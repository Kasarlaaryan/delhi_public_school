/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { SCHOOL_DATA } from '@/src/data/schoolData';
import { motion } from 'motion/react';

export default function Leadership() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Institutional Leadership" 
        subtitle="Meet the visionaries guiding DPS Nacharam towards a future of academic excellence."
        category="LEADERSHIP"
      />

      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SCHOOL_DATA.leadership.map((leader, idx) => (
              <motion.div 
                key={leader.id} 
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[3/4] bg-dps-off-white rounded-3xl overflow-hidden mb-8 relative shadow-lg">
                  {leader.image ? (
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-dps-green-light" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dps-green-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-serif text-2xl text-dps-green-dark mb-1">{leader.name}</h3>
                <p className="text-[10px] font-bold tracking-[0.2em] text-dps-green uppercase mb-4">{leader.designation}</p>
                <p className="text-sm text-dps-muted leading-relaxed mb-6">
                  {leader.bio}
                </p>
                <div className="h-1 w-8 bg-dps-green group-hover:w-16 transition-all rounded-full" />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-dps-green-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-dps-green/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <Container className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8 max-w-3xl mx-auto leading-tight text-white">Committed to Shaping the Leaders of Tomorrow</h2>
            <p className="text-dps-white/70 text-lg mb-12 max-w-2xl mx-auto">
              Our leadership team brings decades of experience in educational management and academic excellence, ensuring every student at DPS Nacharam reaches their full potential.
            </p>
            <button className="px-10 py-4 bg-dps-green text-white rounded-full font-bold hover:bg-white hover:text-dps-green-dark transition-all">
              Message from the Chairman
            </button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
