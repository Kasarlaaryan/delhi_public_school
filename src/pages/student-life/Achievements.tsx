/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { motion } from 'motion/react';
import { Trophy, Award, Medal, Crown, TrendingUp } from 'lucide-react';

const achievementHighlights = [
  {
    title: "Academic Laurels",
    description: "Consistent 100% results in CBSE Board Examinations with students securing national-level ranks year after year.",
    icon: Award,
    stats: "250+ Merit Certificates",
    color: "bg-dps-green"
  },
  {
    title: "Sports Dominance",
    description: "Overall champions at the Hyderabad Inter-School Athletic Meet and winners in state-level basketball and swimming championships.",
    icon: Trophy,
    stats: "45 Gold Medals in 2025",
    color: "bg-amber-500"
  },
  {
    title: "International MUNs",
    description: "Awarded 'Best Delegation' at several prestigious Model United Nations conferences both in India and abroad.",
    icon: Medal,
    stats: "Top 1% Global Rank",
    color: "bg-blue-500"
  }
];

export default function Achievements() {
  return (
    <main className="bg-white min-h-screen">
      <PageHeader 
        title="Achievements" 
        category="STUDENT LIFE"
        subtitle="Celebrating a legacy of excellence across academics, sports, and the arts."
      />

      {/* Hall of Fame Highlights */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {achievementHighlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-dps-off-white p-10 rounded-[40px] border border-dps-border hover:shadow-2xl transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform`}>
                  <item.icon size={32} />
                </div>
                <h3 className="font-serif text-3xl text-dps-green-dark mb-4">{item.title}</h3>
                <p className="text-dps-muted mb-8 leading-relaxed">{item.description}</p>
                <div className="pt-6 border-t border-dps-border/50">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-dps-green uppercase block mb-1">Impact Metric</span>
                  <span className="text-xl font-bold text-dps-green-dark">{item.stats}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Recent Success Section */}
      <section className="py-24 bg-dps-green-dark text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-dps-green rounded-full opacity-20 blur-2xl animate-pulse" />
              <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop" className="rounded-[40px] shadow-2xl relative z-10" alt="Victory moment" />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl z-20">
                <Crown className="text-dps-green mb-2" size={32} />
                <div className="text-2xl font-bold text-dps-green-dark">School of the Year</div>
                <div className="text-xs font-bold text-dps-muted tracking-widest uppercase mt-1">Global Education Awards 2025</div>
              </div>
            </div>
            
            <div>
              <h2 className="font-serif text-5xl mb-8 leading-tight text-[#ffffff]">Shaping Future Champions</h2>
              <p className="text-xl text-dps-white/70 mb-12 leading-relaxed">
                Our commitment to excellence is reflected in the numerous accolades our students receive. Whether it's the Innovation Award at Science Expos or the Best Performer at Cultural Fests, our students excel in every field.
              </p>
              
              <div className="space-y-6">
                {[
                  { label: "Olympiad Ranks", value: "National Top 10" },
                  { label: "Sustainability Awards", value: "Paryavaran Mitra 2026" },
                  { label: "Community Service", value: "President's Volunteer Medal" }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between py-4 border-b border-white/10">
                    <span className="text-lg text-dps-white/60">{stat.label}</span>
                    <span className="text-xl font-bold text-dps-green">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Wall of Honor */}
      <section className="py-24 bg-dps-off-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-dps-green-dark mb-4">Wall of Honor</h2>
            <p className="text-dps-muted">Celebrating our outstanding individual achievers.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-6 rounded-[32px] border border-dps-border shadow-sm group hover:shadow-xl transition-all">
                <div className="aspect-square rounded-2xl bg-dps-green-light mb-6 overflow-hidden relative">
                  <img src={`https://i.pravatar.cc/300?u=achiever${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Achiever" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-dps-green text-white rounded-full flex items-center justify-center shadow-lg">
                    <TrendingUp size={18} />
                  </div>
                </div>
                <h4 className="font-serif text-2xl text-dps-green-dark mb-1">Student Name</h4>
                <p className="text-dps-green font-bold text-xs tracking-widest uppercase mb-4">International Level Athlete</p>
                <p className="text-sm text-dps-muted leading-relaxed">
                  Represented India at the Asian Youth Games, securing a Silver medal in the 400m hurdles.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
