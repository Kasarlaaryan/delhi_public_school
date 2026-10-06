/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { SCHOOL_DATA } from '@/src/data/schoolData';
import { Calendar, MapPin, Tag, ArrowLeft, Share2, Clock } from 'lucide-react';
import { formatDate } from '@/src/lib/utils';
import { motion } from 'motion/react';

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const event = SCHOOL_DATA.events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dps-off-white">
        <Container className="text-center">
          <h2 className="font-serif text-4xl text-dps-green-dark mb-4">Event Not Found</h2>
          <p className="text-dps-muted mb-8">The event you are looking for might have been moved or removed.</p>
          <Link to="/student-life/events" className="px-8 py-4 bg-dps-green text-white rounded-full font-bold">
            Back to Events
          </Link>
        </Container>
      </div>
    );
  }

  const eventDate = new Date(event.date);

  return (
    <main className="bg-white min-h-screen pb-24">
      <PageHeader 
        title={event.title} 
        category={event.category}
        subtitle={formatDate(event.date)}
        image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="relative -mt-20 z-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[40px] shadow-2xl shadow-dps-green/5 border border-dps-border p-8 md:p-16"
              >
                <Link to="/student-life/events" className="inline-flex items-center gap-2 text-dps-green font-bold text-xs uppercase tracking-widest mb-10 hover:gap-4 transition-all">
                  <ArrowLeft size={16} /> Back to Calendar
                </Link>

                <h2 className="font-serif text-4xl text-dps-green-dark mb-8 leading-tight">About the Event</h2>
                <div className="prose prose-lg text-dps-muted leading-relaxed max-w-none">
                  <p>
                    {event.description || "Join us for this exciting event at DPS Nacharam. We bring together students, faculty, and experts to foster learning, creativity, and excellence."}
                  </p>
                  <p className="mt-6">
                    Our campus events are designed to provide students with diverse opportunities to showcase their talents and engage in meaningful dialogue. Whether it's a competitive meet, a cultural showcase, or an academic seminar, each event contributes to the holistic development of our student body.
                  </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 border-t border-dps-border">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-dps-green-light flex items-center justify-center text-dps-green shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dps-green-dark text-sm uppercase tracking-widest mb-1">Time</h4>
                      <p className="text-dps-muted">9:00 AM onwards</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-dps-green-light flex items-center justify-center text-dps-green shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dps-green-dark text-sm uppercase tracking-widest mb-1">Venue</h4>
                      <p className="text-dps-muted">Main Campus Auditorium / Sports Ground</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl border-8 border-dps-off-white">
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Event cover" 
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-dps-off-white rounded-[32px] p-8 border border-dps-border">
                <h3 className="font-serif text-2xl text-dps-green-dark mb-6">Event Details</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 py-4 border-b border-dps-border/50">
                    <Calendar size={20} className="text-dps-green" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-dps-muted uppercase tracking-widest">Date</span>
                      <span className="font-medium text-dps-green-dark">{eventDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 py-4 border-b border-dps-border/50">
                    <Tag size={20} className="text-dps-green" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-dps-muted uppercase tracking-widest">Category</span>
                      <span className="font-medium text-dps-green-dark">{event.category}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 space-y-4">
                  <button className="w-full py-4 bg-dps-green text-white rounded-2xl font-bold hover:bg-dps-green-dark transition-all shadow-lg shadow-dps-green/20">
                    Register Interest
                  </button>
                  <button className="w-full py-4 border-2 border-dps-green text-dps-green rounded-2xl font-bold hover:bg-dps-green-light transition-all flex items-center justify-center gap-2">
                    <Share2 size={18} /> Share Event
                  </button>
                </div>
              </div>

              <div className="bg-dps-green-dark rounded-[32px] p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-dps-green/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-serif text-2xl mb-4 relative z-10 text-[#ffffff]">Important Note</h3>
                <p className="text-dps-white/70 text-sm leading-relaxed mb-6 relative z-10">
                  Please ensure you carry your school ID card for identification. Outside guests must register 48 hours prior to the event.
                </p>
                <div className="h-1 w-12 bg-dps-green rounded-full relative z-10" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
