/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { motion } from 'motion/react';
import { Palette, Music, Mic2, Code, Shield, Heart } from 'lucide-react';

const activityCategories = [
  {
    title: "Arts & Creativity",
    icon: Palette,
    items: ["Fine Arts & Painting", "Sculpture", "Photography", "Digital Media Art"],
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Performing Arts",
    icon: Music,
    items: ["Classical & Modern Dance", "Western & Indian Music", "Theatrics & Drama", "Public Speaking"],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Special Interest",
    icon: Code,
    items: ["Robotics & Coding", "Astronomy Club", "Debating Society", "Culinary Arts"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Activities() {
  return (
    <main className="bg-white min-h-screen">
      <PageHeader 
        title="Campus Activities" 
        category="STUDENT LIFE"
        subtitle="Unlocking potential through a diverse range of co-curricular and extra-curricular pursuits."
      />

      <section className="py-24">
        <Container>
          <div className="max-w-3xl mb-20">
            <h2 className="font-serif text-4xl text-dps-green-dark mb-6">Beyond the Classroom</h2>
            <p className="text-lg text-dps-muted leading-relaxed">
              At DPS Nacharam, education extends far beyond textbooks. Our vibrant activity program is designed to help students discover their passions, build leadership skills, and develop a well-rounded personality.
            </p>
          </div>

          <div className="space-y-24">
            {activityCategories.map((cat, idx) => (
              <div key={idx} className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={idx % 2 !== 0 ? 'lg:order-2' : ''}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-dps-green-light rounded-2xl flex items-center justify-center text-dps-green">
                      <cat.icon size={24} />
                    </div>
                    <h3 className="font-serif text-3xl text-dps-green-dark">{cat.title}</h3>
                  </div>
                  <ul className="grid grid-cols-2 gap-4 mb-8">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-dps-muted">
                        <div className="w-1.5 h-1.5 bg-dps-green rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-dps-muted leading-relaxed mb-8">
                    Guided by professional mentors, our students engage in rigorous practice and creative exploration, preparing them for competitions and personal mastery.
                  </p>
                  <button className="px-8 py-4 border-2 border-dps-green text-dps-green rounded-full font-bold hover:bg-dps-green-light transition-all">
                    Explore Gallery
                  </button>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={cn("relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl", idx % 2 !== 0 ? 'lg:order-1' : '')}
                >
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dps-green-dark/20 to-transparent" />
                </motion.div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Hobby Clubs */}
      <section className="py-24 bg-dps-green-dark text-white overflow-hidden">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4 text-[#ffffff]">Hobby Clubs</h2>
            <p className="text-dps-white/70">Nurturing diverse interests every Friday afternoon.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: "Eco Club", icon: Heart },
              { label: "MUN Club", icon: Shield },
              { label: "Radio DPS", icon: Mic2 },
              { label: "Tech Wizards", icon: Code },
              { label: "Heritage Club", icon: Star },
              { label: "Literary Society", icon: BookOpen }
            ].map((club, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-dps-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <club.icon size={24} />
                </div>
                <span className="text-sm font-bold tracking-widest uppercase">{club.label}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

import { cn } from '@/src/lib/utils';
import { Star, BookOpen } from 'lucide-react';
