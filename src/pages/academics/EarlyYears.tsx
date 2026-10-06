/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { Smile, Sparkles, Heart, ShieldCheck } from 'lucide-react';

export default function EarlyYears() {
  const highlights = [
    { title: "Curiosity & Discovery", icon: Sparkles, desc: "Learning through play and exploration in a stimulating environment." },
    { title: "Nurturing Care", icon: Heart, desc: "A warm and safe setting where every child feels valued and loved." },
    { title: "Safety First", icon: ShieldCheck, desc: "State-of-the-art security and child-safe infrastructure." },
    { title: "Joyful Learning", icon: Smile, desc: "Creating a lifelong love for learning from the very first step." }
  ];

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Early Years" 
        subtitle="Nurturing the youngest minds in a safe, creative, and joyful environment."
        category="ACADEMICS"
        image="https://images.unsplash.com/photo-1503919919749-64670085813f?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-24 bg-dps-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-dps-off-white">
                <img 
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1200&auto=format&fit=crop" 
                  alt="Early Years Discovery" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-dps-white p-8 rounded-3xl shadow-xl border border-dps-border">
                <span className="block text-3xl font-serif text-dps-green mb-2">Discovery</span>
                <p className="text-xs text-dps-muted uppercase tracking-widest font-bold">The Foundation of Growth</p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="font-serif text-4xl text-dps-green-dark">Where Every Journey Begins</h2>
              <p className="text-lg text-dps-text leading-relaxed">
                Our Early Years program is designed to spark curiosity and foster a love for discovery. We provide a balanced curriculum that focuses on emotional, social, physical, and cognitive development.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-xl bg-dps-green-light text-dps-green flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl text-dps-green-dark">{item.title}</h3>
                    <p className="text-xs text-dps-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-dps-off-white">
        <Container className="text-center">
          <h2 className="font-serif text-3xl mb-12">Programmes Offered</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['Nursery', 'Prep I (LKG)', 'Prep II (UKG)'].map((grade) => (
              <div key={grade} className="px-12 py-8 bg-dps-white rounded-2xl shadow-sm border border-dps-border flex flex-col gap-2">
                <span className="font-serif text-2xl text-dps-green">{grade}</span>
                <span className="text-[10px] font-bold text-dps-muted uppercase tracking-widest">Early Years</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
