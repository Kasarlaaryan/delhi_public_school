/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { motion } from 'motion/react';
import { Heart, Globe, Handshake, Sprout, ShieldCheck, Sun } from 'lucide-react';

const outreachProjects = [
  {
    title: "Eco-Sustainability",
    icon: Sprout,
    description: "Our student-led initiative focusing on zero-waste campus management, tree plantation drives, and solar energy awareness.",
    impact: "5000+ Saplings Planted"
  },
  {
    title: "Social Empowerment",
    icon: Handshake,
    description: "Collaborating with local NGOs to provide education support, literacy programs, and skill-building workshops for underprivileged communities.",
    impact: "12 Village Partnerships"
  },
  {
    title: "Health & Hygiene",
    icon: ShieldCheck,
    description: "Organizing medical camps, blood donation drives, and awareness sessions on personal hygiene and nutrition across rural sectors.",
    impact: "2500+ Lives Impacted"
  }
];

export default function Community() {
  return (
    <main className="bg-white min-h-screen">
      <PageHeader 
        title="Community Outreach" 
        category="STUDENT LIFE"
        subtitle="Cultivating empathy and global citizenship through meaningful social action."
      />

      {/* Philosophy Section */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-5xl text-dps-green-dark mb-8 leading-tight">Service Before Self</h2>
              <p className="text-xl text-dps-muted mb-12 leading-relaxed">
                At the heart of DPS Nacharam is the spirit of 'Seva'. We believe that true education is incomplete without a sense of responsibility toward society and the environment.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="mt-1 text-dps-green"><Heart size={24} fill="currentColor" /></div>
                  <div>
                    <h4 className="font-bold text-dps-green-dark mb-1">Compassion</h4>
                    <p className="text-sm text-dps-muted">Developing a heart that beats for the marginalized.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-dps-green"><Globe size={24} /></div>
                  <div>
                    <h4 className="font-bold text-dps-green-dark mb-1">Awareness</h4>
                    <p className="text-sm text-dps-muted">Understanding global issues and local challenges.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop" className="rounded-[40px] shadow-2xl" alt="Community Service" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-dps-green-light rounded-full -z-10" />
            </div>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-dps-off-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl text-dps-green-dark mb-6">Our Impact Initiatives</h2>
            <p className="text-lg text-dps-muted">Focused programs designed to create measurable change in the world around us.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {outreachProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[40px] shadow-xl border border-dps-border flex flex-col group"
              >
                <div className="w-16 h-16 rounded-2xl bg-dps-green-light flex items-center justify-center text-dps-green mb-8 group-hover:scale-110 transition-transform">
                  <project.icon size={32} />
                </div>
                <h3 className="font-serif text-2xl text-dps-green-dark mb-4">{project.title}</h3>
                <p className="text-dps-muted mb-8 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="pt-6 border-t border-dps-border">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-dps-green uppercase block mb-1">Impact Delivered</span>
                  <span className="text-xl font-bold text-dps-green-dark">{project.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <Container>
          <div className="bg-dps-green-dark rounded-[48px] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <Sun className="absolute top-10 right-10 text-dps-green/20" size={120} />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl mb-8 text-[#ffffff]">Ready to Make a Difference?</h2>
              <p className="text-xl text-dps-white/70 mb-12 leading-relaxed">
                We encourage all our students, parents, and alumni to join our community outreach programs. Together, we can build a more sustainable and equitable future.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="px-10 py-5 bg-dps-green text-white rounded-full font-bold text-lg hover:bg-white hover:text-dps-green-dark transition-all">
                  Volunteer Now
                </button>
                <button className="px-10 py-5 border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                  Proposed Initiatives
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
