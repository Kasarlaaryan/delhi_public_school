/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { motion } from 'motion/react';
import { Trophy, Activity, Users, Award, Shield } from 'lucide-react';

const sportsCategories = [
  {
    title: "Field Sports",
    desc: "Professional coaching for Football, Cricket, and Athletics on international-standard grounds.",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop",
    icon: Activity
  },
  {
    title: "Aquatic Sports",
    desc: "State-of-the-art swimming facilities with certified life-guards and professional trainers.",
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=800&auto=format&fit=crop",
    icon: Shield
  },
  {
    title: "Indoor Excellence",
    desc: "Badminton, Table Tennis, and Gymnastics in climate-controlled indoor arenas.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    icon: Award
  }
];

export default function Sports() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Athletics & Sports" 
        subtitle="Professional-grade sports infrastructure nurturing teamwork, discipline, and excellence."
        category="CAMPUS LIFE"
        image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-5xl text-dps-green-dark mb-8 leading-tight">Nurturing Future Champions</h2>
              <p className="text-xl text-dps-muted leading-relaxed mb-12">
                At DPS Nacharam, sports are an integral part of our holistic curriculum. With 16 dedicated sports facilities, we provide students with the opportunity to excel in various disciplines under professional guidance.
              </p>
              <div className="flex flex-col gap-8">
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-3xl bg-dps-green-light text-dps-green flex items-center justify-center shrink-0 shadow-sm">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dps-green-dark mb-2 uppercase tracking-[0.2em] text-xs">Excellence Hub</h3>
                    <p className="text-dps-muted">Consistent winners at Inter-DPS and National SGFI championships.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-3xl bg-dps-green-light text-dps-green flex items-center justify-center shrink-0 shadow-sm">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dps-green-dark mb-2 uppercase tracking-[0.2em] text-xs">Professional Teams</h3>
                    <p className="text-dps-muted">Specialized coaching wings for elite student-athletes across 12 disciplines.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-dps-off-white rounded-[48px] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Nurturing Future Champions" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-dps-green p-8 rounded-3xl shadow-xl text-white">
                <div className="text-4xl font-bold mb-1">16+</div>
                <div className="text-xs font-bold tracking-widest uppercase opacity-80">Sports Facilities</div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sportsCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-square rounded-[32px] overflow-hidden mb-6 relative">
                  <img 
                    src={cat.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={cat.title} 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dps-green-dark/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <cat.icon className="w-8 h-8 mb-2" />
                    <h4 className="font-serif text-2xl text-[#ffffff]">{cat.title}</h4>
                  </div>
                </div>
                <p className="text-dps-muted text-sm leading-relaxed px-2">
                  {cat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-dps-off-white">
        <Container>
          <div className="bg-white rounded-[48px] p-12 md:p-20 shadow-xl border border-dps-border flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="font-serif text-4xl text-dps-green-dark mb-6">Elite Sports Academy</h2>
              <p className="text-lg text-dps-muted leading-relaxed mb-8">
                For students who wish to pursue sports professionally, we offer the Elite Sports Academy. This program includes specialized nutrition plans, sports psychology sessions, and rigorous training schedules outside regular school hours.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-dps-green text-white rounded-full font-bold hover:bg-dps-green-dark transition-all">
                  Join the Academy
                </button>
                <button className="px-8 py-4 border-2 border-dps-green text-dps-green rounded-full font-bold hover:bg-dps-green-light transition-all">
                  Sports Calendar
                </button>
              </div>
            </div>
            <div className="w-full lg:w-2/5 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=400&auto=format&fit=crop" 
                className="rounded-2xl shadow-md" 
                alt="Sport 1" 
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop" 
                className="rounded-2xl shadow-md mt-8" 
                alt="Sport 2" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
