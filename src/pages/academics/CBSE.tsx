/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { BookOpen, CheckCircle2, Layers, Target } from 'lucide-react';

export default function CBSE() {
  const highlights = [
    "Holistic development focused curriculum",
    "Integration of life skills and values",
    "Comprehensive and continuous evaluation",
    "State-of-the-art laboratory exposure",
    "Balanced academic and co-curricular schedule"
  ];

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="CBSE Curriculum" 
        subtitle="The Central Board of Secondary Education pathway designed for academic excellence and competitive readiness."
        category="ACADEMICS"
      />

      <section className="py-24 bg-dps-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8">
              <h2 className="font-serif text-4xl text-dps-green-dark leading-tight">National Standards, Global Excellence</h2>
              <p className="text-lg text-dps-text leading-relaxed">
                The CBSE curriculum at DPS Nacharam is designed to provide a solid foundation for students, preparing them for competitive examinations while ensuring a well-rounded personality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-dps-green shrink-0" />
                    <span className="text-sm text-dps-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-dps-off-white p-12 rounded-3xl border border-dps-border">
              <h3 className="font-serif text-2xl text-dps-green-dark mb-8">Academic Structure</h3>
              <div className="flex flex-col gap-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-dps-white shadow-sm flex items-center justify-center shrink-0">
                    <Layers className="w-6 h-6 text-dps-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1 uppercase tracking-widest">Foundational Stage</h4>
                    <p className="text-xs text-dps-muted">Grades Nursery to II - Nurturing curiosity and basics.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-dps-white shadow-sm flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-dps-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1 uppercase tracking-widest">Middle & Secondary</h4>
                    <p className="text-xs text-dps-muted">Grades III to X - Focusing on core subjects and analytical skills.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-dps-white shadow-sm flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-dps-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1 uppercase tracking-widest">Senior Secondary</h4>
                    <p className="text-xs text-dps-muted">Grades XI & XII - Specialized streams (Science, Commerce, Humanities).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-dps-off-white">
        <Container className="text-center">
          <h2 className="font-serif text-3xl mb-12">Admissions for CBSE Pathway</h2>
          <div className="inline-flex gap-4">
            <a href="/admissions/apply" className="px-10 py-4 bg-dps-green text-dps-white rounded-full font-bold tracking-widest text-[10px] hover:bg-dps-green-dark transition-all">APPLY NOW</a>
            <a href="/admissions/enquiry" className="px-10 py-4 border border-dps-border text-dps-text rounded-full font-bold tracking-widest text-[10px] hover:bg-dps-white transition-all">INQUIRE</a>
          </div>
        </Container>
      </section>
    </div>
  );
}
