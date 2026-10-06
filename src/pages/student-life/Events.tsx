/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { SCHOOL_DATA } from '@/src/data/schoolData';
import { Calendar, Filter, Search, ChevronRight } from 'lucide-react';
import { cn, formatDate } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

export default function Events() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed'>('upcoming');
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Academic', 'Sports', 'Cultural', 'Literary', 'Technology', 'Community'];
  
  const filteredEvents = SCHOOL_DATA.events.filter(event => {
    const matchesTab = activeTab === 'upcoming' ? event.isUpcoming : !event.isUpcoming;
    const matchesFilter = filter === 'All' || event.category === filter;
    return matchesTab && matchesFilter;
  });

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Campus Buzz & Events" 
        subtitle="A comprehensive calendar of academic, cultural, and sports events at DPS Nacharam."
        category="STUDENT LIFE"
      />

      <section className="py-24">
        <Container>
          {/* Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
            <div className="flex p-1 bg-slate-100 rounded-xl">
              <button 
                onClick={() => setActiveTab('upcoming')}
                className={cn(
                  "px-8 py-3 rounded-lg text-xs font-bold tracking-widest transition-all",
                  activeTab === 'upcoming' ? "bg-white text-blue-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
                )}
              >
                UPCOMING
              </button>
              <button 
                onClick={() => setActiveTab('completed')}
                className={cn(
                  "px-8 py-3 rounded-lg text-xs font-bold tracking-widest transition-all",
                  activeTab === 'completed' ? "bg-white text-blue-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
                )}
              >
                COMPLETED
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all",
                    filter === cat ? "bg-blue-900 text-white" : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                  )}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Events List */}
          <div className="grid grid-cols-1 gap-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <Link 
                  key={event.id} 
                  to={`/student-life/events/${event.id}`}
                  className="group flex flex-col md:flex-row items-center gap-10 p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex flex-col items-center justify-center w-24 h-24 bg-blue-50 text-blue-900 rounded-2xl shrink-0 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-500">
                    <span className="text-3xl font-serif font-bold">{new Date(event.date).getDate()}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                  </div>
                  
                  <div className="flex-grow flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold tracking-widest text-blue-900 uppercase">{event.category}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-200" />
                      <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">{formatDate(event.date)}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-slate-900 group-hover:text-blue-900 transition-colors">{event.title}</h3>
                    {event.description && (
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{event.description}</p>
                    )}
                  </div>

                  <div className="p-4 rounded-full border border-slate-100 text-slate-400 group-hover:bg-blue-900 group-hover:text-white group-hover:border-blue-900 transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </Link>
              ))
            ) : (
              <div className="py-32 text-center bg-slate-50 rounded-3xl border border-slate-100">
                <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-6" />
                <h3 className="font-serif text-2xl text-slate-900 mb-2">No Events Found</h3>
                <p className="text-sm text-slate-500">There are no events matching your current filters.</p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
