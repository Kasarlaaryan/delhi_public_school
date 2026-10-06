/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';

export default function NIOS() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="NIOS Pathway" 
        subtitle="Flexible learning options through the National Institute of Open Schooling."
        category="ACADEMICS"
      />

      <section className="py-24 bg-dps-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl text-dps-green-dark mb-8 text-center">Empowering Diverse Learners</h2>
            <p className="text-lg text-dps-text leading-relaxed mb-12 text-center">
              Our NIOS program provides a flexible and personalized learning experience, catering to students who require non-traditional educational pathways while maintaining high academic standards.
            </p>
            <div className="bg-dps-off-white p-12 rounded-3xl border border-dps-border">
              <h3 className="font-serif text-2xl text-dps-green-dark mb-6">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {['Flexible Examination Schedule', 'Personalized Learning Pace', 'Wide Choice of Subjects', 'Nationally Recognized Certification'].map((feat) => (
                  <li key={feat} className="flex gap-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-dps-green" />
                    <span className="font-bold text-dps-text text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
