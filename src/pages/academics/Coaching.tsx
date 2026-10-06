/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { SCHOOL_DATA } from '@/src/data/schoolData';
import { Trophy, Users, Star } from 'lucide-react';

export default function Coaching() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Coaching & Career Excellence" 
        subtitle="Strategic preparation for top national and international competitive examinations."
        category="ACADEMICS"
        image="https://images.unsplash.com/photo-1523240715632-d984cf4bc9ae?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="font-serif text-4xl text-dps-green-dark mb-8">Strategic Partnerships for Success</h2>
              <p className="text-lg text-dps-text leading-relaxed mb-8">
                We collaborate with the nation's leading coaching institutions to provide integrated preparation for IIT-JEE, NEET, and other competitive exams within the school campus.
              </p>
              <div className="flex flex-col gap-6">
                {SCHOOL_DATA.coachingPartners.map((partner) => (
                  <div key={partner.name} className="flex gap-6 items-center p-6 bg-dps-off-white rounded-2xl border border-dps-border">
                    <div className="w-12 h-12 rounded-full bg-dps-white flex items-center justify-center font-bold text-dps-green shadow-sm">P</div>
                    <div>
                      <h3 className="font-bold text-dps-text">{partner.name}</h3>
                      <p className="text-xs text-dps-green uppercase tracking-widest font-bold mt-1">{partner.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Student Studying" />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white mt-12">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Digital Classroom" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-dps-green-light text-dps-green flex items-center justify-center mb-8">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-dps-green-dark mb-4">IIT / NEET Prep</h3>
              <p className="text-sm text-dps-muted leading-relaxed">Rigorous integrated coaching with a focus on core concepts and problem-solving.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-dps-green-light text-dps-green flex items-center justify-center mb-8">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-dps-green-dark mb-4">Olympiads</h3>
              <p className="text-sm text-dps-muted leading-relaxed">Foundation programs designed for early excellence in national and international Olympiads.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-dps-green-light text-dps-green flex items-center justify-center mb-8">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-dps-green-dark mb-4">Career Counseling</h3>
              <p className="text-sm text-dps-muted leading-relaxed">Dedicated counseling to guide students towards the right career paths and universities.</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
