/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { SCHOOL_DATA } from '@/src/data/schoolData';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our admissions office, help desk, or residential campus."
        category="CONTACT"
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="flex flex-col gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                   <div className="w-12 h-12 rounded-xl bg-dps-green-light text-dps-green flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-dps-green-dark">Address</h3>
                  <address className="not-italic text-sm text-dps-muted leading-relaxed">
                    {SCHOOL_DATA.address}
                  </address>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dps-green-light text-dps-green flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-dps-green-dark">Call Us</h3>
                  <div className="text-sm text-dps-muted flex flex-col gap-3">
                    <a href={`tel:${SCHOOL_DATA.phone[0]}`} className="hover:text-dps-green transition-colors flex justify-between items-center border-b border-dps-border pb-2">
                      <span>Admissions</span>
                      <span className="font-medium">{SCHOOL_DATA.phone[0]}</span>
                    </a>
                    <div className="flex flex-col gap-2 border-b border-dps-border pb-2">
                      <span className="text-[9px] font-bold tracking-widest uppercase opacity-60">Hostel Inquiries</span>
                      <div className="flex flex-col gap-1">
                        {SCHOOL_DATA.hostelPhone.map(p => (
                          <a key={p} href={`tel:${p}`} className="hover:text-dps-green transition-colors flex justify-between items-center">
                            <span>Warden</span>
                            <span className="font-medium">{p}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <a href={`tel:${SCHOOL_DATA.helpDesk}`} className="hover:text-dps-green transition-colors flex justify-between items-center">
                      <span>Help Desk</span>
                      <span className="font-medium">{SCHOOL_DATA.helpDesk}</span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dps-green-light text-dps-green flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-dps-green-dark">Email</h3>
                  <div className="text-sm text-dps-muted flex flex-col gap-1">
                    <span>{SCHOOL_DATA.email[0]}</span>
                    <span>{SCHOOL_DATA.email[1]}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dps-green-light text-dps-green flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-dps-green-dark">Office Hours</h3>
                  <div className="text-sm text-dps-muted flex flex-col gap-1">
                    <span>Mon - Sat: 9:00 AM - 4:00 PM</span>
                    <span>Sunday: Closed</span>
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-dps-off-white rounded-3xl overflow-hidden grayscale">
                {/* Map placeholder */}
                <div className="w-full h-full bg-dps-green-light flex items-center justify-center text-dps-green/40 font-serif">
                  INTERACTIVE MAP
                </div>
              </div>
            </div>

            <div className="bg-dps-off-white p-10 md:p-16 rounded-[40px] border border-dps-border">
              <h2 className="font-serif text-3xl text-dps-green-dark mb-8">Send a Message</h2>
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-widest text-dps-muted uppercase ml-1">Full Name</label>
                  <input type="text" className="px-6 py-4 rounded-xl bg-dps-white border border-dps-border focus:outline-none focus:border-dps-green transition-colors text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-widest text-dps-muted uppercase ml-1">Email Address</label>
                  <input type="email" className="px-6 py-4 rounded-xl bg-dps-white border border-dps-border focus:outline-none focus:border-dps-green transition-colors text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-widest text-dps-muted uppercase ml-1">Subject</label>
                  <select className="px-6 py-4 rounded-xl bg-dps-white border border-dps-border focus:outline-none focus:border-dps-green transition-colors text-sm appearance-none">
                    <option>General Enquiry</option>
                    <option>Admissions</option>
                    <option>Careers</option>
                    <option>Hostel</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-widest text-dps-muted uppercase ml-1">Message</label>
                  <textarea rows={4} className="px-6 py-4 rounded-xl bg-dps-white border border-dps-border focus:outline-none focus:border-dps-green transition-colors text-sm resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-dps-green text-dps-white py-5 rounded-xl font-bold tracking-widest text-xs hover:bg-dps-green-dark transition-all">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
