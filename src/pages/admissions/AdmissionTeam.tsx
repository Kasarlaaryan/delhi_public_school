/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { motion } from 'motion/react';
import { Mail, Phone, Clock, MessageSquare } from 'lucide-react';

const team = [
  {
    name: "Mrs. Aruna Rao",
    role: "Head of Admissions",
    email: "admissions.head@dpsnacharam.in",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Mr. Sanjay Kumar",
    role: "Admission Counselor (Secondary)",
    email: "sanjay.k@dpsnacharam.in",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Ms. Neha Sharma",
    role: "Admission Counselor (Primary)",
    email: "neha.s@dpsnacharam.in",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Mr. David Wilson",
    role: "International Admissions",
    email: "international@dpsnacharam.in",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
  }
];

export default function AdmissionTeam() {
  return (
    <main className="bg-white min-h-screen">
      <PageHeader 
        title="Admission Team" 
        category="ADMISSIONS"
        subtitle="Meet the dedicated professionals ready to guide you through your enrollment journey."
      />

      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] mb-6">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dps-green-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <button className="w-full py-3 bg-white text-dps-green rounded-xl font-bold flex items-center justify-center gap-2">
                      <Mail size={18} /> Email
                    </button>
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-dps-green-dark">{member.name}</h3>
                <p className="text-dps-green font-medium text-sm tracking-widest uppercase mt-1">{member.role}</p>
                <p className="text-sm text-dps-muted mt-2">{member.email}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-dps-off-white">
        <Container>
          <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl border border-dps-border grid lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-dps-green-light flex items-center justify-center text-dps-green mb-6">
                <Clock size={32} />
              </div>
              <h4 className="font-serif text-2xl mb-2">Office Hours</h4>
              <p className="text-dps-muted">Monday - Saturday<br />9:00 AM - 4:00 PM</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-dps-green-light flex items-center justify-center text-dps-green mb-6">
                <Phone size={32} />
              </div>
              <h4 className="font-serif text-2xl mb-2">Helpline</h4>
              <p className="text-dps-muted">+91 76709 00348<br />+91 91009 75725</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-dps-green-light flex items-center justify-center text-dps-green mb-6">
                <MessageSquare size={32} />
              </div>
              <h4 className="font-serif text-2xl mb-2">Visit Us</h4>
              <p className="text-dps-muted">Campus Tours available<br />by prior appointment.</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
