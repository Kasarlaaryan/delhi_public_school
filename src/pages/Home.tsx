/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Container } from '@/src/components/ui/Container';
import { SCHOOL_DATA } from '@/src/data/schoolData';
import { ArrowRight, Calendar, BookOpen, Trophy, Users, Shield, Lightbulb, Heart, Award, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

import { HeroSlider } from '@/src/components/ui/HeroSlider';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSlider />

      {/* Announcement Bar */}
      <div className="bg-dps-green py-4 overflow-hidden border-y border-dps-white/5">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-[10px] font-bold tracking-widest text-dps-green-light/40 uppercase shrink-0">CAMPUS NEWS</span>
              {SCHOOL_DATA.events.filter(e => e.isUpcoming).map(event => (
                <Link key={event.id} to={`/student-life/events`} className="flex items-center gap-4 text-xs font-medium text-dps-white/90 hover:text-dps-white transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-dps-green-light" />
                  {event.title} • {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
{/* Institutional Introduction */}
<section className="py-24 md:py-32 bg-dps-white">
  <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      
      {/* Left Content */}
      <div>
        <span className="text-xs font-bold tracking-widest text-dps-green uppercase block mb-6">
          OUR INSTITUTION
        </span>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dps-green leading-tight mb-8">
          An Education Designed for the Future
        </h2>

        <div className="flex gap-4 mb-8 items-start">
          <div className="h-px flex-grow bg-dps-green-light mt-3" />
          <p className="text-sm font-bold tracking-widest text-dps-muted uppercase shrink-0">
            FOUNDED ON EXCELLENCE
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex flex-col gap-6">
        <p className="text-lg text-dps-text leading-relaxed">
          Delhi Public School Nacharam is a 22-acre premier educational campus
          in Hyderabad, committed to nurturing global citizens through a balance
          of academic rigour, critical thinking, and character development.
        </p>

        <p className="text-dps-muted leading-relaxed">
          From CBSE and Cambridge International to IBDP and NIOS, we provide
          diverse academic pathways tailored to every student's potential. Our
          holistic approach ensures that students excel not just in classrooms,
          but in sports, arts, and leadership.
        </p>

        <Link
          to="/about"
          className="flex items-center gap-3 text-dps-green font-bold tracking-widest text-[10px] mt-4 hover:gap-5 transition-all"
        >
          LEARN MORE ABOUT US
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  </Container>
</section>

      {/* Holistic Approach Pillars */}
      <section className="py-24 bg-dps-off-white overflow-hidden">
        <Container>
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-dps-green-dark mb-6">Our Holistic Pillars</h2>
            <p className="text-dps-muted max-w-2xl mx-auto">The six core values that guide our educational philosophy and student development journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SCHOOL_DATA.pillars.map((pillar, idx) => {
              const Icon = { BookOpen, Lightbulb, Award, Heart, Users, Shield }[pillar.icon] || BookOpen;
              const iconColors = "text-dps-green bg-dps-green-light";

              return (
                <motion.div
                  key={pillar.id}
                  whileHover={{ y: -10 }}
                  className="bg-dps-white p-10 rounded-2xl shadow-sm border border-dps-border group transition-all hover:border-dps-green/30"
                >
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-dps-green group-hover:text-dps-white transition-colors",
                    iconColors
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-dps-green-dark mb-4">{pillar.title}</h3>
                  <p className="text-dps-muted text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <div className="w-8 h-[2px] bg-dps-green/10 group-hover:w-full group-hover:bg-dps-green transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Statistics */}
      <section className="py-32 bg-dps-green text-dps-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-dps-white/5 skew-x-12 translate-x-1/2" />
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 md:gap-20">
            {SCHOOL_DATA.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="font-serif text-5xl md:text-6xl font-bold text-dps-green-light/40 mb-4">{stat.value}</span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-dps-white/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Academics Showcase */}
      <section className="py-24 md:py-32 bg-dps-white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest text-dps-green uppercase block mb-6">ACADEMIC EXCELLENCE</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dps-green-dark leading-tight">
                Learning Without Boundaries
              </h2>
            </div>
            <Link to="/academics" className="px-8 py-4 border border-dps-border rounded-full text-[10px] font-bold tracking-widest text-dps-green-dark hover:bg-dps-green-light transition-all">
              VIEW ALL PROGRAMS
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SCHOOL_DATA.pathways.slice(0, 3).map((pathway) => (
              <Link key={pathway.id} to={pathway.href} className="group relative h-[500px] overflow-hidden rounded-2xl bg-dps-green-dark">
                <div className="absolute inset-0 bg-gradient-to-t from-dps-green-dark via-dps-green-dark/20 to-transparent z-10" />
                {pathway.image ? (
                  <img src={pathway.image} alt={pathway.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
                ) : (
                  <div className="w-full h-full bg-dps-green transition-transform duration-700 group-hover:scale-110 opacity-60" />
                )}
                
                <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                  <h3 className="font-serif text-3xl text-dps-white mb-4">{pathway.title}</h3>
                  <p className="text-dps-white/60 text-sm mb-6 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {pathway.description}
                  </p>
                  <div className="flex items-center gap-2 text-dps-white text-[10px] font-bold tracking-widest">
                    EXPLORE PATHWAY <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 bg-dps-green-light">
        <Container>
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-widest text-dps-green uppercase block mb-6">OUR CAMPUS</span>
            <h2 className="font-serif text-4xl md:text-5xl text-dps-green-dark">World-Class Facilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SCHOOL_DATA.facilities.map((facility, idx) => (
              <div key={facility.id} className={cn(
                "group relative h-80 rounded-xl overflow-hidden",
                idx === 0 ? "lg:col-span-2" : ""
              )}>
                <div className="absolute inset-0 bg-dps-green-dark/20 group-hover:bg-dps-green-dark/40 transition-colors z-10" />
                {facility.image ? (
                  <img src={facility.image} alt={facility.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                ) : (
                  <div className="w-full h-full bg-dps-off-white" />
                )}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  <h4 className="text-dps-white font-bold text-lg mb-1">{facility.title}</h4>
                  <p className="text-dps-white/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-dps-white">
        <Container>
          <div className="flex justify-between items-center mb-16">
            <h2 className="font-serif text-4xl text-dps-green-dark">Campus Buzz</h2>
            <Link to="/student-life/events" className="text-dps-green font-bold tracking-widest text-[10px] flex items-center gap-2">
              VIEW CALENDAR <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SCHOOL_DATA.events.filter(e => e.isUpcoming).slice(0, 3).map((event) => (
              <div key={event.id} className="border-b border-dps-border py-8 group hover:bg-dps-green-light transition-colors px-6 -mx-6 rounded-lg">
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-dps-green-light text-dps-green shrink-0">
                    <span className="text-xl font-bold font-serif">{new Date(event.date).getDate()}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-widest text-dps-muted uppercase mb-2">{event.category}</span>
                    <h3 className="font-serif text-xl text-dps-green-dark group-hover:text-dps-green transition-colors">{event.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Admissions CTA */}
      <section className="py-24">
        <Container>
          <div className="relative rounded-3xl overflow-hidden bg-dps-green p-12 md:p-24 text-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-dps-green-light text-xs font-bold tracking-widest uppercase mb-6">ADMISSIONS 2026-27</span>
              <h2 className="font-serif text-4xl md:text-6xl text-dps-white mb-8 max-w-3xl">Begin Your Journey at DPS Nacharam</h2>
              <p className="text-dps-white/70 text-lg mb-12 max-w-xl">
                Join an institution where students are empowered to lead, create, and innovate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/admissions/apply" className="px-10 py-5 bg-dps-white text-dps-green rounded-full font-bold tracking-widest text-[10px] hover:bg-dps-green-light transition-all">
                  APPLY NOW
                </Link>
                <Link to="/admissions/enquiry" className="px-10 py-5 border border-dps-white/30 text-dps-white rounded-full font-bold tracking-widest text-[10px] hover:bg-dps-white/10 transition-all">
                  SUBMIT ENQUIRY
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
