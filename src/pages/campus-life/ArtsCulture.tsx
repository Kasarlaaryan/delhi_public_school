/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { Palette, Music, Mic2, Book } from 'lucide-react';

export default function ArtsCulture() {
  const activities = [
    { title: 'Art Gallery', icon: Palette, desc: 'Showcasing the visual creativity of our students.' },
    { title: 'Musical Activities', icon: Music, desc: 'Nurturing vocal and instrumental talents.' },
    { title: 'Cultural Activities', icon: Mic2, desc: 'Celebrating diversity through dance, drama, and festivals.' },
    { title: 'Literary Activities', icon: Book, desc: 'Fostering communication skills and literary appreciation.' }
  ];

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Arts & Culture" 
        subtitle="Unleashing student creativity through diverse artistic and cultural expressions."
        category="CAMPUS LIFE"
      />

      <section className="py-24 bg-dps-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {activities.map((item) => (
              <div key={item.title} className="p-12 bg-dps-off-white rounded-[40px] border border-dps-border flex flex-col items-start group hover:bg-dps-white hover:shadow-2xl transition-all">
                <div className="w-16 h-16 rounded-2xl bg-dps-green text-dps-white flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-dps-green-dark mb-4">{item.title}</h3>
                <p className="text-dps-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
