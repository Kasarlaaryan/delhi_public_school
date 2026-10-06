/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { Shield, Heart, Users } from 'lucide-react';

export default function StudentWellbeing() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Student Wellbeing" 
        subtitle="A nurturing environment where every student's emotional, physical, and social health is our primary concern."
        category="CAMPUS LIFE"
        image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-24 bg-white overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-8 border-white bg-dps-off-white">
                <img 
                  src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Student Support Group" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-dps-green/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 bg-dps-green p-8 rounded-[32px] text-white shadow-xl hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Heart size={24} fill="white" />
                  </div>
                  <div className="text-3xl font-bold italic font-serif">100%</div>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80 leading-tight">Commitment to<br />Mental Wellness</div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-dps-green-light rounded-full text-dps-green font-bold text-xs tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-dps-green animate-pulse" />
                Nurturing Atmosphere
              </div>
              <h2 className="font-serif text-5xl text-dps-green-dark mb-8 leading-tight">Foundation for Excellence</h2>
              <p className="text-xl text-dps-muted leading-relaxed mb-10">
                True learning happens when students feel safe, heard, and supported. At DPS Nacharam, our wellbeing framework provides the emotional security needed for intellectual risk-taking and personal growth.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { 
                    title: "Counseling", 
                    desc: "Professional therapists providing emotional guidance and support.",
                    icon: <Users size={20} className="text-dps-green" />
                  },
                  { 
                    title: "Physical Health", 
                    desc: "State-of-the-art infirmary and regular health checkups.",
                    icon: <Shield size={20} className="text-dps-green" />
                  },
                  { 
                    title: "Life Skills", 
                    desc: "Curriculum-integrated mindfulness and resilience training.",
                    icon: <Heart size={20} className="text-dps-green" />
                  },
                  { 
                    title: "Peer Support", 
                    desc: "Student-led initiatives promoting empathy and inclusion.",
                    icon: <Users size={20} className="text-dps-green" />
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-3xl bg-dps-off-white hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-dps-border">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                      {item.icon}
                    </div>
                    <h4 className="font-serif text-lg text-dps-green-dark mb-2">{item.title}</h4>
                    <p className="text-sm text-dps-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-dps-off-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-4xl text-dps-green-dark mb-6">Specialized Care Wings</h2>
            <p className="text-lg text-dps-muted">We provide dedicated support systems for every aspect of a student's daily life on campus.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Health & Infirmary",
                desc: "Equipped with modern medical facilities and a team of certified nurses and visiting pediatricians to handle any health concerns immediately.",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
                tag: "Medical"
              },
              {
                title: "Safety & Security",
                desc: "A sprawling 22-acre campus monitored 24/7 by advanced CCTV systems and trained security personnel to ensure a worry-free environment.",
                image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
                tag: "Campus"
              },
              {
                title: "Guidance Center",
                desc: "Personalized counseling sessions that help students navigate academic pressure, social dynamics, and career choices with confidence.",
                image: "https://images.unsplash.com/photo-1523240715632-d984cf4bc9ae?q=80&w=800&auto=format&fit=crop",
                tag: "Counseling"
              }
            ].map((card, idx) => (
              <div key={idx} className="group bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={card.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={card.title} 
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-dps-green">
                    {card.tag}
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="font-serif text-2xl text-dps-green-dark mb-4">{card.title}</h3>
                  <p className="text-dps-muted text-sm leading-relaxed mb-6">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-dps-green-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale" />
        <Container className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">Every Child Matters</h2>
            <p className="text-xl text-white/80 leading-relaxed mb-12">
              Our commitment to wellbeing extends beyond the classroom. We partner with parents to ensure that every student's journey is supported by a community of care.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-5 bg-dps-green text-white rounded-full font-bold text-lg hover:bg-white hover:text-dps-green-dark transition-all shadow-xl hover:shadow-2xl">
                Get Support
              </button>
              <button className="px-10 py-5 border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Wellness Curriculum
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
