/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { Play, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { name: "Parent of Grade 8 Student", video: true, desc: "An incredible journey of growth for my child." },
    { name: "Parent of Grade 12 Student", video: true, desc: "The perfect balance of academics and co-curriculars." },
    { name: "Parent of Grade 5 Student", video: true, desc: "A safe and nurturing environment with expert teachers." }
  ];

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Parent Testimonials" 
        subtitle="Hear directly from our parent community about their experience at DPS Nacharam."
        category="MEDIA"
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((item, idx) => (
              <div key={idx} className="group">
                <div className="aspect-video bg-dps-off-white rounded-3xl overflow-hidden mb-8 relative">
                  <div className="absolute inset-0 bg-dps-green-dark/20 group-hover:bg-dps-green-dark/40 transition-colors z-10" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-16 h-16 rounded-full bg-dps-white text-dps-green flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                  <div className="w-full h-full bg-dps-green-light" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-dps-green fill-current" />)}
                </div>
                <h3 className="font-serif text-xl text-dps-green-dark mb-2">{item.name}</h3>
                <p className="text-sm text-dps-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
