/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { motion } from 'motion/react';
import { Award, Star, TrendingUp, Users, BookOpen, GraduationCap } from 'lucide-react';

const scholarshipTypes = [
  {
    title: "Merit Scholarships",
    description: "Awarded to students with exceptional academic records in board examinations and entrance tests.",
    criteria: "Score > 95% in qualifying exams",
    icon: Star
  },
  {
    title: "Sports Excellence",
    description: "For state, national, and international level athletes who have represented the school or state.",
    criteria: "National/State level certification",
    icon: Award
  },
  {
    title: "Talent Support",
    description: "Supporting students with extraordinary talents in performing arts, visual arts, or technology.",
    criteria: "Portfolio/Performance review",
    icon: TrendingUp
  },
  {
    title: "Need-Based Aid",
    description: "Financial assistance provided to students from economically weaker sections with strong academic potential.",
    criteria: "Income verification & merit",
    icon: Users
  }
];

export default function Scholarships() {
  return (
    <main className="bg-white min-h-screen">
      <PageHeader 
        title="Scholarships" 
        category="ADMISSIONS"
        subtitle="Empowering excellence through financial support and recognition."
      />

      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="font-serif text-4xl text-dps-green-dark mb-6">Nurturing Talent & Potential</h2>
            <p className="text-lg text-dps-muted leading-relaxed">
              At DPS Nacharam, we believe that financial constraints should never hinder a bright mind. Our scholarship programs are designed to recognize achievement and provide support where it's needed most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {scholarshipTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-dps-off-white p-8 rounded-[32px] border border-dps-border hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-dps-green mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <type.icon size={32} />
                </div>
                <h3 className="font-serif text-2xl text-dps-green-dark mb-4">{type.title}</h3>
                <p className="text-dps-muted mb-6">{type.description}</p>
                <div className="pt-6 border-t border-dps-border/50">
                  <span className="text-xs font-bold tracking-widest text-dps-green uppercase">Eligibility Criteria:</span>
                  <p className="text-sm text-dps-green-dark font-medium mt-1">{type.criteria}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-dps-green-dark text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl mb-8 text-[#ffffff]">Application Process</h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Apply for Admission", text: "Complete the standard admission process for the upcoming academic year." },
                  { step: "02", title: "Submit Scholarship Form", text: "Request and submit the specific scholarship application along with supporting documents." },
                  { step: "03", title: "Review & Interview", text: "Shortlisted candidates will be called for an interaction with the scholarship committee." },
                  { step: "04", title: "Final Announcement", text: "Scholarship awards are announced within 15 days of the interview process." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <span className="font-serif text-4xl text-dps-green opacity-40 leading-none">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-[#ffffff]">{item.title}</h4>
                      <p className="text-dps-white/70">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-[40px] p-8 md:p-12 border border-white/10 backdrop-blur-sm">
              <BookOpen className="text-dps-green mb-8" size={48} />
              <h3 className="font-serif text-3xl mb-6 text-[#ffffff]">Academic Excellence Fund</h3>
              <p className="text-lg text-dps-white/70 mb-8">
                Our flagship fund is dedicated to supporting students who aspire to reach the world's top universities. This fund covers not just tuition fees but also provides resources for standardized test preparations (SAT/ACT) and university application guidance.
              </p>
              <button className="w-full py-4 bg-dps-green text-white rounded-full font-bold hover:bg-dps-green-dark transition-colors">
                Inquire About Scholarships
              </button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
