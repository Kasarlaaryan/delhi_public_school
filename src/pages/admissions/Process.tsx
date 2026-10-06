/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { CheckCircle2, FileText, Calendar, UserCheck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdmissionProcess() {
  const steps = [
    { title: 'Enquiry', icon: FileText, desc: 'Submit an online enquiry or visit the campus help desk.' },
    { title: 'Application', icon: Calendar, desc: 'Complete the application form and submit required documents.' },
    { title: 'Interaction', icon: UserCheck, desc: 'Student interaction and parent briefing sessions.' },
    { title: 'Confirmation', icon: ShieldCheck, desc: 'Admission offer and fee payment to secure the seat.' }
  ];

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Admission Process" 
        subtitle="Your journey towards excellence begins here. Follow our streamlined admission process."
        category="ADMISSIONS"
      />

      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto mb-32">
            <h2 className="font-serif text-4xl text-dps-green-dark mb-20 text-center">Step-by-Step Journey</h2>
            <div className="flex flex-col gap-12">
              {steps.map((step, idx) => (
                <div key={step.title} className="flex gap-8 md:gap-16 items-start group">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-16 h-16 rounded-full bg-dps-green-light text-dps-green flex items-center justify-center font-bold text-xl group-hover:bg-dps-green group-hover:text-dps-white transition-colors">
                      {idx + 1}
                    </div>
                    {idx !== steps.length - 1 && (
                      <div className="w-px h-24 bg-dps-border mt-4" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-serif text-2xl text-dps-green-dark mb-4">{step.title}</h3>
                    <p className="text-dps-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dps-off-white p-12 md:p-20 rounded-[40px] border border-dps-border text-center">
            <h2 className="font-serif text-3xl text-dps-green-dark mb-8">Ready to Start?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions/apply" className="px-12 py-5 bg-dps-green text-dps-white rounded-full font-bold tracking-widest text-[10px] uppercase hover:bg-dps-green-dark transition-all">Apply Online</Link>
              <Link to="/admissions/enquiry" className="px-12 py-5 border border-dps-border text-dps-text rounded-full font-bold tracking-widest text-[10px] uppercase hover:bg-dps-white transition-all">Submit Enquiry</Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
