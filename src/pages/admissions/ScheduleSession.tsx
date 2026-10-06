/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { Calendar, Clock, Video, Users, MapPin } from 'lucide-react';

export default function ScheduleSession() {
  return (
    <main className="bg-white min-h-screen">
      <PageHeader 
        title="Schedule a Session" 
        category="ADMISSIONS"
        subtitle="Book a personalized interaction with our academic counselors or campus heads."
      />

      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-4xl text-dps-green-dark mb-8">Interaction Options</h2>
              <div className="space-y-6">
                {[
                  { title: "Virtual Consultation", icon: Video, desc: "A 20-minute Zoom call for parents living outside Hyderabad or with busy schedules." },
                  { title: "Campus Tour & Meet", icon: MapPin, icon2: Users, desc: "Visit our campus, see the facilities, and have a face-to-face discussion." },
                  { title: "Academic Counseling", icon: Calendar, desc: "Specific session to discuss curriculum choices (CBSE vs Cambridge vs IB)." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-dps-off-white p-8 rounded-[32px] border border-dps-border flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-dps-green shrink-0 shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-dps-green-dark mb-2">{item.title}</h4>
                      <p className="text-dps-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 border-2 border-dashed border-dps-green/20 rounded-[32px] bg-dps-green/5">
                <div className="flex items-center gap-4 text-dps-green mb-4">
                  <Clock size={24} />
                  <span className="font-bold uppercase tracking-widest text-sm">Note on Availability</span>
                </div>
                <p className="text-dps-muted text-sm leading-relaxed">
                  Sessions are typically available Monday to Friday between 2:30 PM and 4:30 PM, and Saturdays between 9:30 AM and 12:30 PM. Please book at least 48 hours in advance.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[40px] border border-dps-border shadow-2xl p-8 md:p-12">
              <h3 className="font-serif text-3xl text-dps-green-dark mb-8">Booking Form</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-dps-muted">Parent Name</label>
                    <input type="text" className="w-full bg-dps-off-white border-transparent rounded-xl px-4 py-4 focus:ring-2 focus:ring-dps-green focus:bg-white transition-all outline-none" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-dps-muted">Phone Number</label>
                    <input type="tel" className="w-full bg-dps-off-white border-transparent rounded-xl px-4 py-4 focus:ring-2 focus:ring-dps-green focus:bg-white transition-all outline-none" placeholder="Your phone number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-dps-muted">Session Type</label>
                  <select className="w-full bg-dps-off-white border-transparent rounded-xl px-4 py-4 focus:ring-2 focus:ring-dps-green focus:bg-white transition-all outline-none appearance-none">
                    <option>Virtual Consultation</option>
                    <option>Campus Visit</option>
                    <option>Academic Counseling</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-dps-muted">Preferred Date</label>
                    <input type="date" className="w-full bg-dps-off-white border-transparent rounded-xl px-4 py-4 focus:ring-2 focus:ring-dps-green focus:bg-white transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-dps-muted">Preferred Time</label>
                    <select className="w-full bg-dps-off-white border-transparent rounded-xl px-4 py-4 focus:ring-2 focus:ring-dps-green focus:bg-white transition-all outline-none appearance-none">
                      <option>Morning (9:30 AM - 12:30 PM)</option>
                      <option>Afternoon (2:30 PM - 4:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-dps-muted">Message / Specific Topics</label>
                  <textarea rows={4} className="w-full bg-dps-off-white border-transparent rounded-xl px-4 py-4 focus:ring-2 focus:ring-dps-green focus:bg-white transition-all outline-none resize-none" placeholder="What would you like to discuss?"></textarea>
                </div>

                <button className="w-full py-5 bg-dps-green text-white rounded-2xl font-bold text-lg hover:bg-dps-green-dark shadow-xl shadow-dps-green/20 transition-all">
                  Request Session
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
