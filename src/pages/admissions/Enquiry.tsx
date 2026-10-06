/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { SCHOOL_DATA } from '@/src/data/schoolData';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function AdmissionEnquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Admission Enquiry" 
        subtitle="Complete the form below and our admissions team will get back to you shortly."
        category="ADMISSIONS"
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="bg-dps-white p-10 md:p-16 rounded-[40px] border border-dps-border shadow-2xl">
              {submitted ? (
                <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-dps-green-light text-dps-green rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="font-serif text-3xl text-dps-green-dark mb-4">Thank You</h2>
                  <p className="text-dps-muted mb-10">Your enquiry has been submitted successfully. Our admissions team will contact you soon.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-dps-green font-bold tracking-widest text-[10px] uppercase underline underline-offset-8"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold tracking-widest text-dps-muted uppercase ml-1">Student Name</label>
                      <input required type="text" className="px-6 py-4 rounded-xl bg-dps-off-white border border-dps-border focus:outline-none focus:border-dps-green transition-colors text-sm" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold tracking-widest text-dps-muted uppercase ml-1">Parent Name</label>
                      <input required type="text" className="px-6 py-4 rounded-xl bg-dps-off-white border border-dps-border focus:outline-none focus:border-dps-green transition-colors text-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold tracking-widest text-dps-muted uppercase ml-1">Phone Number</label>
                      <input required type="tel" className="px-6 py-4 rounded-xl bg-dps-off-white border border-dps-border focus:outline-none focus:border-dps-green transition-colors text-sm" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold tracking-widest text-dps-muted uppercase ml-1">Email Address</label>
                      <input required type="email" className="px-6 py-4 rounded-xl bg-dps-off-white border border-dps-border focus:outline-none focus:border-dps-green transition-colors text-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold tracking-widest text-dps-muted uppercase ml-1">Curriculum</label>
                      <select required className="px-6 py-4 rounded-xl bg-dps-off-white border border-dps-border focus:outline-none focus:border-dps-green transition-colors text-sm appearance-none">
                        <option value="">Select Curriculum</option>
                        <option value="CBSE">CBSE</option>
                        <option value="Cambridge">Cambridge International</option>
                        <option value="IBDP">IBDP</option>
                        <option value="NIOS">NIOS</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold tracking-widest text-dps-muted uppercase ml-1">Grade</label>
                      <input required type="text" placeholder="e.g. Grade 5" className="px-6 py-4 rounded-xl bg-dps-off-white border border-dps-border focus:outline-none focus:border-dps-green transition-colors text-sm" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-widest text-dps-muted uppercase ml-1">Locality</label>
                    <input type="text" className="px-6 py-4 rounded-xl bg-dps-off-white border border-dps-border focus:outline-none focus:border-dps-green transition-colors text-sm" />
                  </div>

                  <button 
                    disabled={loading}
                    type="submit" 
                    className="w-full bg-dps-green text-dps-white py-5 rounded-xl font-bold tracking-widest text-xs hover:bg-dps-green-dark transition-all disabled:opacity-50 disabled:cursor-not-wait"
                  >
                    {loading ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                  </button>
                </form>
              )}
            </div>

            <div className="flex flex-col gap-12">
              <h2 className="font-serif text-4xl text-dps-green-dark">Admission Office</h2>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest text-dps-muted uppercase">Phone</span>
                  {SCHOOL_DATA.phone.map(p => (
                    <span key={p} className="text-xl font-serif text-dps-green-dark">{p}</span>
                  ))}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest text-dps-muted uppercase">Email</span>
                  <span className="text-xl font-serif text-dps-green-dark">{SCHOOL_DATA.email[0]}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest text-dps-muted uppercase">Landline</span>
                  <span className="text-xl font-serif text-dps-green-dark">{SCHOOL_DATA.landline}</span>
                </div>
              </div>

              <div className="p-8 bg-dps-green-light rounded-3xl border border-dps-green/20 flex gap-6">
                <AlertCircle className="w-6 h-6 text-dps-green shrink-0" />
                <p className="text-xs text-dps-green/60 leading-relaxed font-medium">
                  Our admissions help desk is open Monday to Saturday from 9:00 AM to 4:00 PM. We recommend calling ahead to schedule a campus tour.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
