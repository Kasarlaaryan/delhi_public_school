/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { motion } from 'motion/react';

const approaches = [
  {
    title: "Academic Rigour",
    description: "We maintain high standards of academic achievement across all curricula, encouraging students to push their intellectual boundaries through critical thinking and inquiry-based learning.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
    icon: "01"
  },
  {
    title: "Creative Exploration",
    description: "Arts and culture are integral parts of our learning experience. We provide platforms for innovation, self-expression, and technical mastery in various creative disciplines.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",
    icon: "02"
  },
  {
    title: "Physical Development",
    description: "Our extensive sports program ensures that students develop physical strength, endurance, and a lifelong spirit of sportsmanship and healthy competition.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
    icon: "03"
  },
  {
    title: "Emotional Intelligence",
    description: "We focus on the mental well-being of our students, fostering empathy, resilience, and strong interpersonal skills to prepare them for global leadership.",
    image: "https://images.unsplash.com/photo-1523240715632-d984cf4bc9ae?q=80&w=1200&auto=format&fit=crop",
    icon: "04"
  }
];

export default function HolisticApproach() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <PageHeader 
        title="Holistic Approach" 
        subtitle="Integrating physical, mental, and creative development with academic excellence."
        category="OUR PHILOSOPHY"
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="font-serif text-5xl text-dps-green-dark mb-8">The DPS Philosophy</h2>
            <p className="text-xl text-dps-muted leading-relaxed">
              At DPS Nacharam, we believe education is a journey of self-discovery. Our holistic framework ensures that every student develops the confidence to lead and the wisdom to serve.
            </p>
          </div>

          <div className="space-y-32">
            {approaches.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="relative aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl border-8 border-dps-off-white">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute top-8 left-8 w-16 h-16 bg-dps-green rounded-full flex items-center justify-center text-white font-serif text-2xl font-bold shadow-lg">
                      {item.icon}
                    </div>
                  </div>
                </div>
                
                <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                  <h3 className="font-serif text-4xl text-dps-green-dark mb-6">{item.title}</h3>
                  <div className="w-20 h-1.5 bg-dps-green mb-8 rounded-full" />
                  <p className="text-lg text-dps-muted leading-relaxed">
                    {item.description}
                  </p>
                  <button className="mt-10 px-8 py-4 bg-dps-green-light text-dps-green rounded-full font-bold hover:bg-dps-green hover:text-white transition-all">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-dps-green-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000&auto=format&fit=crop')] opacity-10 grayscale" />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight text-white border-white">Shaping Responsible Global Citizens</h2>
              <p className="text-xl text-dps-white/70 mb-12">
                Our approach results in students who are not just academically proficient, but also emotionally mature, socially responsible, and physically active.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <p className="text-sm text-white uppercase tracking-widest font-bold">Holistic Engagement</p>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <div className="text-4xl font-bold text-white mb-2">Global</div>
                  <p className="text-sm text-white uppercase tracking-widest font-bold">Standard Pedagogy</p>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-dps-green rounded-full flex items-center justify-center p-12 border-8 border-white/10">
              <div className="text-center">
                <div className="text-7xl font-serif font-bold mb-4 italic">"Values"</div>
                <p className="text-xl opacity-80 uppercase tracking-[0.3em]">At the Core</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
