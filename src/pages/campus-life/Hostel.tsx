/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { SCHOOL_DATA } from '@/src/data/schoolData';
import { Home, Shield, Users, Coffee, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function Hostel() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Residential Campus" 
        subtitle="A safe, nurturing home-away-from-home for our residential students."
        category="CAMPUS LIFE"
        image="https://images.unsplash.com/photo-1541339907198-e08759df9a13?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1555854816-80dc1221a042?q=80&w=800&auto=format&fit=crop" 
                  alt="Dormitory Living" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop" 
                  alt="Hostel Building" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="font-serif text-5xl text-dps-green-dark leading-tight">Safe & Nurturing Boarding</h2>
              <p className="text-xl text-dps-muted leading-relaxed">
                Our residential facilities are designed to provide a comfortable and secure environment where students can focus on their growth, academic success, and character building.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 bg-dps-off-white rounded-[32px] border border-dps-border shadow-sm">
                  <h3 className="font-bold text-dps-green mb-3 uppercase tracking-[0.2em] text-[10px]">Boys Hostel</h3>
                  <p className="text-lg font-serif text-dps-green-dark">Grades V – XII</p>
                  <p className="text-xs text-dps-muted mt-2">State-of-the-art separate block with modern amenities.</p>
                </div>
                <div className="p-8 bg-dps-off-white rounded-[32px] border border-dps-border shadow-sm">
                  <h3 className="font-bold text-dps-green mb-3 uppercase tracking-[0.2em] text-[10px]">Girls Hostel</h3>
                  <p className="text-lg font-serif text-dps-green-dark">Grades VI – XII</p>
                  <p className="text-xs text-dps-muted mt-2">Secure, dedicated environment with 24/7 supervision.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12 border-t border-dps-border">
            {[
              { title: 'Home Comfort', icon: Home, desc: 'Well-furnished rooms and common areas designed for belonging.' },
              { title: 'Secure Environment', icon: Shield, desc: '24/7 campus-wide security and dedicated residential staff.' },
              { title: 'Community Life', icon: Users, desc: 'Shared experiences that foster lifelong friendships and values.' },
              { title: 'Nutritious Dining', icon: Coffee, desc: 'Balanced, multi-cuisine meal plans prepared in hygienic kitchens.' }
            ].map((feat) => (
              <div key={feat.title} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-[28px] bg-dps-green-light text-dps-green flex items-center justify-center mb-8 group-hover:bg-dps-green group-hover:text-white transition-all duration-500 shadow-sm">
                  <feat.icon size={32} />
                </div>
                <h4 className="font-bold text-dps-green-dark mb-4 uppercase tracking-[0.2em] text-xs">{feat.title}</h4>
                <p className="text-sm text-dps-muted leading-relaxed px-4">{feat.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Facilities Showcase */}
      <section className="py-24 bg-dps-green-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1555854816-80dc1221a042?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale" />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight text-[#ffffff]">Beyond a Place to Stay</h2>
              <p className="text-xl text-dps-white/70 mb-12 leading-relaxed">
                Life at the DPS Nacharam Residential Campus is about holistic development. From evening study hours to supervised sports and recreational activities, every moment is a learning experience.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                  <div className="text-3xl font-bold mb-1">Modern</div>
                  <p className="text-[10px] uppercase tracking-widest opacity-60">Living Spaces</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                  <div className="text-3xl font-bold mb-1">Academic</div>
                  <p className="text-[10px] uppercase tracking-widest opacity-60">Supervision</p>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop" 
                alt="Student Community" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Hostel Admission Inquiries CTA */}
      <section className="py-24 bg-dps-off-white border-t border-dps-border">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-dps-white rounded-[40px] p-12 md:p-20 shadow-xl border border-dps-border overflow-hidden relative">
              {/* Abstract background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-dps-green/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 text-center lg:text-left">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-dps-green uppercase mb-4 block">ADMISSIONS OPEN</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-dps-green-dark mb-6 leading-tight">
                    Hostel Admission Inquiries
                  </h2>
                  <p className="text-dps-muted text-lg mb-10 max-w-xl">
                    For detailed information regarding our residential facilities, fee structure, and room availability, please connect with our hostel wardens.
                  </p>
                  <Link 
                    to="/admissions/enquiry" 
                    className="inline-flex items-center gap-3 px-12 py-5 bg-dps-green text-dps-white rounded-full font-bold tracking-widest text-[10px] uppercase hover:bg-dps-green-dark transition-all shadow-lg group"
                  >
                    Submit Enquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>

                <div className="flex flex-col gap-6 w-full lg:w-80 shrink-0">
                  {SCHOOL_DATA.hostelPhone.map((phone, idx) => (
                    <a 
                      key={phone} 
                      href={`tel:${phone}`}
                      className="flex items-center gap-6 p-6 bg-dps-off-white border border-dps-border rounded-2xl hover:border-dps-green/30 hover:shadow-md transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-dps-green text-dps-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold tracking-widest text-dps-muted uppercase mb-1">
                          {idx === 0 ? "PRIMARY CONTACT" : "SECONDARY CONTACT"}
                        </span>
                        <span className="text-xl font-serif text-dps-green-dark group-hover:text-dps-green transition-colors">{phone}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
