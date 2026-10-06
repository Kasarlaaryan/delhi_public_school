/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { SCHOOL_DATA } from '@/src/data/schoolData';

export default function Collaborations() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Global Collaborations" 
        subtitle="Connected to a world of learning through partnerships with prestigious institutions."
        category="ABOUT"
      />

      <section className="py-24">
        <Container>
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl text-slate-900 mb-8">Nurturing Excellence through Partnerships</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our collaborations with premier national and international organizations bring global perspectives and cutting-edge resources to our students.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {SCHOOL_DATA.collaborations.map((partner) => (
              <div key={partner} className="p-12 bg-white border border-slate-100 rounded-3xl flex items-center justify-center grayscale hover:grayscale-0 transition-all group">
                <div className="flex flex-col items-center gap-4">
                   <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center font-bold text-slate-300 group-hover:text-blue-900 group-hover:bg-blue-50 transition-colors">
                     {partner[0]}
                   </div>
                   <span className="text-[10px] font-bold tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
