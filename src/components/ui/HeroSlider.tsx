/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { cn } from '@/src/lib/utils';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    category: "ADMISSIONS 2026-27",
    title: "Shape Your Future at DPS Nacharam",
    subtitle: "Registration now open for the upcoming academic session. Join our community of excellence.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000&auto=format&fit=crop",
    ctaText: "APPLY ONLINE",
    ctaLink: "/admissions/apply",
    secondaryCtaText: "ENQUIRE NOW",
    secondaryCtaLink: "/admissions/enquiry"
  },
  {
    id: 2,
    category: "ACADEMIC EXCELLENCE",
    title: "Diverse Pathways for Global Success",
    subtitle: "From CBSE and Cambridge to IB Diploma – find the right curriculum for your child's potential.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2000",
    ctaText: "EXPLORE PROGRAMS",
    ctaLink: "/academics"
  },
  {
    id: 3,
    category: "WORLD-CLASS CAMPUS",
    title: "22-Acre State-of-the-Art Environment",
    subtitle: "Professional sports facilities, advanced science labs, and a nurturing residential campus.",
    image: "https://images.unsplash.com/photo-1541339907198-e08759df9a13?q=80&w=2000&auto=format&fit=crop",
    ctaText: "VIEW FACILITIES",
    ctaLink: "/campus-life/facilities"
  },
  {
    id: 4,
    category: "HOLISTIC GROWTH",
    title: "Nurturing Leaders of Tomorrow",
    subtitle: "We believe in balanced growth through arts, sports, and community engagement.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=2000",
    ctaText: "OUR STORY",
    ctaLink: "/about"
  }
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.8 },
        scale: { duration: 1.2 }
      }
    } as const,
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 }
      }
    }) as const
  };

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-dps-green-dark">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-dps-green-dark/70 via-dps-green-dark/40 to-dps-green-dark/80 z-10" />
            <img 
              src={slides[current].image} 
              alt={slides[current].title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content */}
          <Container className="relative z-20 h-full flex flex-col justify-center items-center text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-dps-green-light/60 text-xs tracking-[0.4em] font-bold uppercase mb-6"
            >
              {slides[current].category}
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-dps-white font-bold leading-[1.1] mb-8 max-w-5xl text-wrap-balance"
            >
              {slides[current].title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-dps-white/80 max-w-2xl mb-12 font-medium leading-relaxed"
            >
              {slides[current].subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to={slides[current].ctaLink} className="px-10 py-5 bg-dps-white text-dps-green rounded-full font-bold tracking-widest text-[10px] hover:bg-dps-green-light transition-all shadow-xl flex items-center gap-2 group">
                {slides[current].ctaText}
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              {slides[current].secondaryCtaText && (
                <Link to={slides[current].secondaryCtaLink || "#"} className="px-10 py-5 border border-dps-white/30 backdrop-blur-sm text-dps-white rounded-full font-bold tracking-widest text-[10px] hover:bg-dps-white/10 transition-all">
                  {slides[current].secondaryCtaText}
                </Link>
              )}
            </motion.div>
          </Container>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-6 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="p-4 rounded-full border border-dps-white/20 text-dps-white hover:bg-dps-white/10 transition-all pointer-events-auto backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-4 rounded-full border border-dps-white/20 text-dps-white hover:bg-dps-white/10 transition-all pointer-events-auto backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className="group relative py-4"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div className={cn(
              "h-1 transition-all duration-300 rounded-full",
              current === idx ? "w-12 bg-dps-white" : "w-6 bg-dps-white/30 group-hover:bg-dps-white/50"
            )} />
          </button>
        ))}
      </div>

      {/* Bottom Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dps-green-dark to-transparent z-20 pointer-events-none" />
    </section>
  );
}
