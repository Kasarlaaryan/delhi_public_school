/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Briefcase, 
  Building2, 
  Globe, 
  GraduationCap,
  Network,
  Lightbulb,
  Award,
  History,
  Gift,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const stats = [
  { label: 'Active Alumni Members', value: '15346', icon: Users },
  { label: 'Different Career Chosen', value: '320 +', icon: Briefcase },
  { label: 'Companies Represented', value: '150 +', icon: Building2 },
  { label: 'Countries Represented', value: '11 +', icon: Globe },
  { label: 'Alumni Currently in Top Colleges', value: '252 +', icon: GraduationCap },
];

const valuePillars = [
  {
    id: 'networking',
    title: 'NETWORKING',
    icon: Network,
    content: "Connect with fellow graduates across the globe. Our platform enables you to find mentors, industry peers, and potential collaborators within the elite DPS Nacharam network."
  },
  {
    id: 'development',
    title: 'Learning & Development',
    icon: Lightbulb,
    content: "Access exclusive workshops, webinars, and continuous learning programs. We provide resources to help you stay ahead in your career and personal growth journey."
  },
  {
    id: 'recognition',
    title: 'RECOGNITION',
    icon: Award,
    items: [
      "Get featured on the school's social media & website for your achievements",
      "Nomination for illustrious alumni awards",
      "Receive a certificate of recognition for guiding juniors"
    ]
  },
  {
    id: 'nostalgia',
    title: 'NOSTALGIA',
    icon: History,
    content: "Relive your school days through annual reunions, homecoming events, and campus tours. Stay connected to your roots and the teachers who shaped you."
  },
  {
    id: 'benefits',
    title: 'BENEFITS',
    icon: Gift,
    content: "Enjoy exclusive benefits including access to school infrastructure, library resources, and special invitation to major institutional events as guests of honor."
  }
];

const socialImages = [
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
];

export default function Alumni() {
  const [activePillar, setActivePillar] = useState(valuePillars[2]); // Default to RECOGNITION

  return (
    <main className="bg-white min-h-screen">
      <PageHeader 
        title="ALUMNI" 
        category="COMMUNITY"
        subtitle="Home / ALUMNI"
        className="pb-32"
      />

      {/* Network Stats Section */}
      <section className="relative -mt-20 z-20 pb-24">
        <Container>
          <div className="bg-white rounded-[40px] shadow-2xl shadow-dps-green/10 border border-dps-border p-8 md:p-12">
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-3xl md:text-5xl text-dps-green-dark mb-6">
                Profile of Members in the DPS Nacharam Alumni Network
              </h2>
              <p className="text-lg text-dps-muted leading-relaxed">
                DPS Nacharam alumni hold leadership roles worldwide across diverse careers, companies, and universities. Engage with them to expand both professionally and personally.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-dps-green-light flex items-center justify-center text-dps-green mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon size={24} />
                  </div>
                  <span className="text-3xl font-bold text-dps-green-dark mb-2">{stat.value}</span>
                  <span className="text-sm text-dps-muted font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Value Addition Section */}
      <section className="py-24 bg-dps-off-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl text-dps-green-dark mb-6">Adding value to our Alumni Guiding</h2>
            <p className="text-lg text-dps-muted">We believe in nurturing our students even after they graduate from school. Here’s how we do it!</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {valuePillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar)}
                className={cn(
                  "px-8 py-4 rounded-full font-bold text-sm tracking-widest transition-all",
                  activePillar.id === pillar.id 
                    ? "bg-dps-green text-white shadow-xl shadow-dps-green/30 scale-105" 
                    : "bg-white text-dps-muted hover:bg-dps-green-light hover:text-dps-green"
                )}
              >
                {pillar.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-[32px] p-8 md:p-16 shadow-xl border border-dps-border min-h-[300px] flex flex-col md:flex-row gap-12 items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-dps-green-light flex items-center justify-center text-dps-green shrink-0">
              <activePillar.icon size={48} />
            </div>
            
            <div className="flex-1">
              <h3 className="font-serif text-3xl text-dps-green-dark mb-6">{activePillar.title}</h3>
              
              {activePillar.items ? (
                <ul className="space-y-4">
                  {activePillar.items.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-1 w-6 h-6 rounded-full bg-dps-green/10 flex items-center justify-center text-dps-green shrink-0">
                        <ArrowRight size={14} />
                      </div>
                      <span className="text-lg text-dps-muted">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg text-dps-muted leading-relaxed"
                >
                  {activePillar.content}
                </motion.p>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Giving Back Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-dps-green/5 -skew-x-12 translate-x-1/2" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-dps-green-dark mb-8 leading-tight">Giving back to School</h2>
              <div className="space-y-6 text-lg text-dps-muted leading-relaxed">
                <p>Your relationship with DPS Nacharam doesn't end once you graduate.</p>
                <p>You can stay involved by giving back in a variety of ways, from mentoring juniors and sharing your career journey to supporting school initiatives and contributing to the alumni fund.</p>
                <p>Every contribution, whether time or expertise, helps build a stronger future for the current students of your alma mater.</p>
              </div>
              
              <div className="mt-12 flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-dps-green text-white rounded-full font-bold hover:bg-dps-green-dark transition-colors flex items-center gap-3">
                  Become a Mentor <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 border-2 border-dps-green text-dps-green rounded-full font-bold hover:bg-dps-green-light transition-colors">
                  Contact Alumni Office
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop" className="rounded-3xl shadow-lg" alt="Alumni interaction" />
                  <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop" className="rounded-3xl shadow-lg" alt="Alumni event" />
                </div>
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" className="rounded-3xl shadow-lg" alt="Alumni success" />
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" className="rounded-3xl shadow-lg" alt="Alumni network" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Social Media Section */}
      <section className="py-24 bg-dps-green-dark text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4 text-[#ffffff]">SOCIAL MEDIA</h2>
            <div className="w-24 h-1 bg-dps-green mx-auto mb-8 rounded-full" />
            <p className="text-white max-w-2xl mx-auto">Stay updated with the latest stories, achievements, and events from the DPS Nacharam Alumni network across our social platforms.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {socialImages.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className={cn(
                  "relative aspect-square overflow-hidden rounded-2xl group",
                  idx === 0 && "md:col-span-2 md:row-span-2"
                )}
              >
                <img src={img} alt={`Social post ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Users className="text-white" size={32} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 border-t border-white/10 pt-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-dps-white/80 italic">
                "Delhi Public School Nacharam is one of the Best CBSE & Cambridge Schools in Hyderabad. We at DPS prepare our students for life, enabling them to develop a lasting passion for learning and an informed curiosity."
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-white/5 rounded-lg text-sm border border-white/10">CBSE Affiliated</span>
                <span className="px-4 py-2 bg-white/5 rounded-lg text-sm border border-white/10">Cambridge International</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 uppercase tracking-widest text-dps-green text-sm">Our Branches</h4>
                <ul className="space-y-2 text-sm text-dps-white/60">
                  <li className="hover:text-white transition-colors cursor-pointer">DPS Mahendra Hills</li>
                  <li className="hover:text-white transition-colors cursor-pointer">DPS Nadergul</li>
                  <li className="hover:text-white transition-colors cursor-pointer">DPS Aerocity</li>
                  <li className="hover:text-white transition-colors cursor-pointer">DPS Santoshnagar</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 uppercase tracking-widest text-dps-green text-sm">Resources</h4>
                <ul className="space-y-2 text-sm text-dps-white/60">
                  <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Alumni Directory</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Events Calendar</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Giving Portal</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
