/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { SCHOOL_DATA } from '@/src/data/schoolData';
import { motion } from 'motion/react';

export default function OurStory() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Our Story" 
        subtitle="A legacy of educational excellence and visionary leadership in the heart of Hyderabad."
        category="ABOUT DPS NACHARAM"
      />

      <section className="py-24 bg-dps-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="flex flex-col gap-8">
              <h2 className="font-serif text-4xl text-dps-green-dark">Dedicated to Excellence</h2>
              <p className="text-lg text-dps-text leading-relaxed">
                Delhi Public School Nacharam is part of the prestigious DPS Society, known for setting global standards in education. Our 22-acre campus is designed to provide a nurturing environment where students can thrive academically and personally.
              </p>
              <p className="text-dps-muted leading-relaxed">
                We believe that every child has unique potential. Our goal is to provide the resources, guidance, and opportunities necessary for them to discover their passions and develop the skills required for the 21st century.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-dps-off-white rounded-[48px] overflow-hidden shadow-2xl border-8 border-white">
                <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="DPS Nacharam Campus" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-dps-green p-10 rounded-2xl text-dps-white shadow-xl hidden md:block">
                <span className="block text-4xl font-serif font-bold mb-2">22+</span>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-60">Acres of Campus</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-dps-off-white">
        <Container>
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl text-dps-green-dark">Our Core Philosophy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-5xl font-serif text-dps-green/10">01.</span>
              <h3 className="font-serif text-2xl text-dps-green-dark">Vision</h3>
              <p className="text-dps-muted text-sm leading-relaxed">
                To be a leading center of educational excellence that empowers students to reach their full potential and become responsible global citizens.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-5xl font-serif text-dps-green/10">02.</span>
              <h3 className="font-serif text-2xl text-dps-green-dark">Mission</h3>
              <p className="text-dps-muted text-sm leading-relaxed">
                To provide a holistic education that balances academic achievement with character development, creativity, and physical well-being.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-5xl font-serif text-dps-green/10">03.</span>
              <h3 className="font-serif text-2xl text-dps-green-dark">Values</h3>
              <p className="text-dps-muted text-sm leading-relaxed">
                Integrity, Respect, Excellence, Responsibility, and Compassion are the foundation of everything we do at DPS Nacharam.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
