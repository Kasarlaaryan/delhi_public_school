/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { Info } from 'lucide-react';

export default function IBDP() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="IB Diploma Programme" 
        subtitle="The gold standard of international education, preparing students for success at the world's leading universities."
        category="ACADEMICS"
        image="https://images.unsplash.com/photo-1541339907198-e08759df9a13?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-24 bg-dps-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-dps-green-light/30 border border-dps-green-light p-8 rounded-2xl flex gap-6 mb-16">
              <Info className="w-8 h-8 text-dps-green shrink-0" />
              <div>
                <h3 className="font-bold text-dps-green mb-2 uppercase tracking-widest text-xs">Curriculum Update</h3>
                <p className="text-sm text-dps-green-dark/80 leading-relaxed">
                  Detailed IBDP curriculum information and program highlights for the upcoming academic session will be available soon. DPS Nacharam is committed to providing the highest standards of IB education.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6">
                <h2 className="font-serif text-3xl text-dps-green-dark">Why IBDP?</h2>
                <p className="text-dps-text leading-relaxed">
                  The International Baccalaureate® (IB) Diploma Programme (DP) is for students aged 16-19. It is respected by leading universities across the globe.
                </p>
                <ul className="flex flex-col gap-4 text-sm text-dps-muted">
                  <li className="flex gap-3"><span className="font-bold text-dps-green">•</span> Balanced academic rigor</li>
                  <li className="flex gap-3"><span className="font-bold text-dps-green">•</span> Critical thinking focus</li>
                  <li className="flex gap-3"><span className="font-bold text-dps-green">•</span> Global perspective</li>
                  <li className="flex gap-3"><span className="font-bold text-dps-green">•</span> University readiness</li>
                </ul>
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-8 border-white bg-dps-off-white">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" alt="Academic Success" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-dps-off-white">
        <Container className="text-center">
          <h2 className="font-serif text-3xl mb-8">Interested in IBDP?</h2>
          <p className="text-dps-muted mb-12 max-w-xl mx-auto">Contact our admissions office for detailed information about the IBDP program at DPS Nacharam.</p>
          <a href="/admissions/enquiry" className="px-10 py-4 bg-dps-green text-dps-white rounded-full font-bold tracking-widest text-[10px] hover:bg-dps-green-dark transition-all uppercase">Inquire Now</a>
        </Container>
      </section>
    </div>
  );
}
