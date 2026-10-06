/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { Globe, GraduationCap, Microscope, Palette } from 'lucide-react';

export default function Cambridge() {
  const pillars = [
    { title: "International Perspective", icon: Globe, desc: "Fostering global citizenship and cultural awareness." },
    { title: "Advanced Research", icon: Microscope, desc: "Encouraging independent study and scientific inquiry." },
    { title: "Academic Rigour", icon: GraduationCap, desc: "Challenging students with world-class assessment standards." },
    { title: "Creative Expression", icon: Palette, desc: "Valuing innovation and artistic exploration." }
  ];

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Cambridge International" 
        subtitle="A world-class education providing international pathways for students to excel globally."
        category="ACADEMICS"
        image="https://images.unsplash.com/photo-1541339907198-e08759df9a13?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-24 bg-dps-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-serif text-4xl text-dps-green-dark mb-8">Globally Recognized, Locally Nurtured</h2>
            <p className="text-lg text-dps-text leading-relaxed">
              Our Cambridge pathway provides students with a competitive edge, fostering critical thinking, research skills, and a deep understanding of subjects. We are a Cambridge-certified institution with expert educators trained to deliver the curriculum effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((item, idx) => (
              <div key={idx} className="p-10 bg-dps-off-white rounded-2xl border border-dps-border text-center flex flex-col items-center">
                <item.icon className="w-10 h-10 text-dps-green mb-6" />
                <h3 className="font-serif text-xl text-dps-green-dark mb-4">{item.title}</h3>
                <p className="text-sm text-dps-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-dps-green-dark text-dps-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-dps-green-light/60 uppercase block mb-6">CAMBRIDGE PATHWAYS</span>
              <h2 className="font-serif text-4xl mb-8 text-white">IGCSE & A-Levels</h2>
              <p className="text-dps-white/70 mb-10 leading-relaxed">
                We offer a wide range of subjects across Science, Commerce, and Arts, allowing students to tailor their education to their career aspirations.
              </p>
              <ul className="flex flex-col gap-4 text-sm font-medium">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-dps-green" /> Cambridge IGCSE (Grades IX-X)</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-dps-green" /> Cambridge AS & A Levels (Grades XI-XII)</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-3xl p-10 border border-white/10 backdrop-blur-sm">
              <h3 className="font-serif text-2xl mb-6 text-white">International Exposure</h3>
              <p className="text-sm text-dps-white/60 leading-relaxed mb-8">
                Students participate in international competitions, collaborative projects with overseas schools, and global seminars that broaden their horizons.
              </p>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop" alt="International Students" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
