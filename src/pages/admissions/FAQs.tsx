/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is the age criteria for nursery admission?",
        a: "A child should be 3 years old as of March 31st of the year of admission for Nursery."
      },
      {
        q: "Does the school provide transport facilities?",
        a: "Yes, we have a fleet of air-conditioned buses covering most parts of Hyderabad and Secunderabad with GPS tracking and female attendants."
      }
    ]
  },
  {
    category: "Academics",
    questions: [
      {
        q: "Which boards does the school offer?",
        a: "We offer CBSE (Primary to Senior Secondary), Cambridge International (IGCSE), and IB Diploma Programme (IBDP)."
      },
      {
        q: "What is the student-teacher ratio?",
        a: "Our average student-teacher ratio is 20:1, ensuring personalized attention for every student."
      }
    ]
  },
  {
    category: "Facilities",
    questions: [
      {
        q: "Do you have boarding facilities?",
        a: "Yes, we have separate residential facilities for boys (Grade V onwards) and girls (Grade VI onwards) on our campus."
      },
      {
        q: "Are the classrooms air-conditioned?",
        a: "Yes, all our classrooms and laboratories are fully air-conditioned and digitally equipped."
      }
    ]
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<string | null>("General-0");

  return (
    <main className="bg-white min-h-screen">
      <PageHeader 
        title="Frequently Asked Questions" 
        category="ADMISSIONS"
        subtitle="Finding answers to common queries about life at DPS Nacharam."
      />

      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            {faqs.map((group, groupIdx) => (
              <div key={groupIdx} className="mb-12">
                <h2 className="text-xs font-bold tracking-[0.3em] text-dps-green uppercase mb-8 ml-4">
                  {group.category} Questions
                </h2>
                <div className="space-y-4">
                  {group.questions.map((faq, idx) => {
                    const id = `${group.category}-${idx}`;
                    const isOpen = openIndex === id;
                    
                    return (
                      <div 
                        key={idx}
                        className={cn(
                          "border rounded-[24px] transition-all duration-300",
                          isOpen ? "bg-dps-off-white border-dps-green/20 shadow-lg" : "bg-white border-dps-border hover:border-dps-green/40"
                        )}
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : id)}
                          className="w-full px-8 py-6 flex items-center justify-between text-left"
                        >
                          <div className="flex items-center gap-4">
                            <HelpCircle className={cn("shrink-0 transition-colors", isOpen ? "text-dps-green" : "text-dps-muted")} size={24} />
                            <span className={cn("font-serif text-xl", isOpen ? "text-dps-green-dark" : "text-dps-text")}>
                              {faq.q}
                            </span>
                          </div>
                          <ChevronDown className={cn("shrink-0 transition-transform duration-300", isOpen && "rotate-180")} />
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="px-8 pb-8 pl-16 text-lg text-dps-muted leading-relaxed">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-dps-green-dark rounded-[40px] p-12 text-center text-white">
            <h3 className="font-serif text-3xl mb-4">Still have questions?</h3>
            <p className="text-dps-white/70 mb-8 max-w-xl mx-auto">Our admission team is here to help you with any specific queries you might have.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-dps-green text-white rounded-full font-bold hover:bg-white hover:text-dps-green-dark transition-all">
                Contact Admission Team
              </button>
              <button className="px-8 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all">
                Download Prospectus
              </button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
