/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { motion } from 'motion/react';
import { Trophy, Star, Users, ArrowUpRight } from 'lucide-react';

const stats = [
  { label: "CBSE Class XII Pass Percentage", value: "100%", icon: Trophy },
  { label: "Students with 90% & Above", value: "245", icon: Star },
  { label: "Average Aggregate Score", value: "88.4%", icon: ArrowUpRight },
  { label: "Highest Score (Humanities)", value: "99.2%", icon: Trophy }
];

export default function Results() {
  return (
    <main className="bg-white min-h-screen">
      <PageHeader 
        title="Academic Results" 
        category="ACHIEVEMENTS"
        subtitle="Celebrating our students' commitment to excellence in the 2025-26 Board Examinations."
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-dps-off-white p-8 rounded-[32px] border border-dps-border text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-dps-green mx-auto mb-4 shadow-sm">
                  <stat.icon size={24} />
                </div>
                <div className="text-4xl font-bold text-dps-green-dark mb-2">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-dps-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-dps-green-dark rounded-[40px] p-8 md:p-12 text-white">
              <h2 className="font-serif text-3xl mb-8">CBSE Result Highlights</h2>
              <div className="space-y-6">
                {[
                  "100% placement in top-tier Engineering & Medical colleges.",
                  "Consistent record of school toppers among the top 1% in the country.",
                  "Highest number of students qualifying for JEE Advanced in the region.",
                  "Exceptional performance in English and Elective subjects."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-dps-green flex items-center justify-center text-white shrink-0 mt-1">
                      <Star size={12} fill="currentColor" />
                    </div>
                    <p className="text-lg text-dps-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="font-serif text-3xl text-dps-green-dark">Cambridge & IBDP Performance</h2>
              <p className="text-lg text-dps-muted leading-relaxed">
                Our international stream continues to set new benchmarks with students securing admissions in prestigious universities across the USA, UK, Canada, and Australia.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-dps-off-white rounded-3xl border border-dps-border">
                  <div className="text-3xl font-bold text-dps-green mb-1">A* / A</div>
                  <div className="text-sm font-medium text-dps-muted">65% of all IGCSE Grades</div>
                </div>
                <div className="p-6 bg-dps-off-white rounded-3xl border border-dps-border">
                  <div className="text-3xl font-bold text-dps-green mb-1">38+</div>
                  <div className="text-sm font-medium text-dps-muted">Average IBDP Points</div>
                </div>
              </div>
              <button className="w-full py-4 border-2 border-dps-green text-dps-green rounded-full font-bold hover:bg-dps-green-light transition-all">
                Download Detailed Result Brochure
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Student Spotlight */}
      <section className="py-24 bg-dps-off-white overflow-hidden">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-dps-green-dark mb-4">Student Toppers Spotlight</h2>
            <p className="text-dps-muted">Recognition of the exceptional effort of our high achievers.</p>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-12 snap-x hide-scrollbar">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="min-w-[300px] bg-white rounded-[32px] p-6 shadow-xl border border-dps-border snap-center">
                <div className="aspect-square rounded-2xl bg-dps-green-light mb-4 overflow-hidden">
                  <img src={`https://i.pravatar.cc/300?u=student${i}`} alt="Student" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <h4 className="font-serif text-xl text-dps-green-dark">Student Name {i}</h4>
                <div className="text-dps-green font-bold text-sm mb-2">99.4% (CBSE Science)</div>
                <p className="text-xs text-dps-muted leading-relaxed">Accepted into IIT Bombay for Computer Science Engineering.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
