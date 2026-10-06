/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { SCHOOL_DATA } from '@/src/data/schoolData';

export default function Facilities() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Campus Facilities" 
        subtitle="Explore our 22-acre state-of-the-art educational infrastructure."
        category="CAMPUS LIFE"
        image="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-24 bg-dps-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SCHOOL_DATA.facilities.map((facility) => (
              <div key={facility.id} className="group">
                <div className="aspect-video bg-dps-off-white rounded-3xl overflow-hidden mb-8 shadow-xl border-4 border-white">
                  {facility.image ? (
                    <img 
                      src={facility.image} 
                      alt={facility.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-dps-green-light opacity-20" />
                  )}
                </div>
                <h3 className="font-serif text-3xl text-dps-green-dark mb-4">{facility.title}</h3>
                <p className="text-dps-muted leading-relaxed max-w-lg">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
