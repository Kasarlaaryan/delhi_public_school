/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { SCHOOL_DATA } from '@/src/data/schoolData';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function Branches() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Our Network" 
        subtitle="DPS Nacharam is part of a growing network of premier educational institutions."
        category="BRANCHES"
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SCHOOL_DATA.branches.map((branch) => (
              <a 
                key={branch.name} 
                href={branch.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-10 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-serif font-bold text-xl">
                    D
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-blue-900 transition-colors" />
                </div>
                <h3 className="font-serif text-3xl text-slate-900 mb-4">{branch.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Part of the Balajee Arun Educational Society, providing world-class education across Hyderabad.
                </p>
                <div className="flex items-center gap-2 text-blue-900 text-[10px] font-bold tracking-widest">
                  VISIT WEBSITE <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
