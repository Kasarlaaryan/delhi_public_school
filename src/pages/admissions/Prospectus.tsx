/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { FileText, Download, BookOpen, Map, Eye } from 'lucide-react';

const brochures = [
  {
    title: "School Prospectus 2026-27",
    desc: "A comprehensive guide to our philosophy, campus, and life at DPS Nacharam.",
    size: "12.4 MB",
    type: "PDF"
  },
  {
    title: "Cambridge International Guide",
    desc: "Details about the IGCSE and A-Level curriculum and global opportunities.",
    size: "8.2 MB",
    type: "PDF"
  },
  {
    title: "IB Diploma Programme Handbook",
    desc: "In-depth look at the IBDP structure, CAS, and TOK requirements.",
    size: "6.5 MB",
    type: "PDF"
  },
  {
    title: "Residential Campus Brochure",
    desc: "Everything about boarding life, security, and facilities for residential students.",
    size: "5.1 MB",
    type: "PDF"
  }
];

export default function Prospectus() {
  return (
    <main className="bg-white min-h-screen">
      <PageHeader 
        title="Prospectus" 
        category="RESOURCES"
        subtitle="Explore our institutional vision through our official publications."
      />

      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-serif text-4xl text-dps-green-dark mb-8">Digital Prospectus</h2>
              <p className="text-lg text-dps-muted leading-relaxed mb-8">
                Our interactive prospectus offers a window into the vibrant world of Delhi Public School Nacharam. From our world-class infrastructure to our innovative pedagogy, discover why we are a preferred choice for thousands of families.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-dps-green text-white rounded-full font-bold flex items-center gap-3 hover:bg-dps-green-dark transition-all">
                  <Eye size={20} /> View Online
                </button>
                <button className="px-8 py-4 border-2 border-dps-green text-dps-green rounded-full font-bold flex items-center gap-3 hover:bg-dps-green-light transition-all">
                  <Download size={20} /> Download All
                </button>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] bg-dps-off-white rounded-[40px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Prospectus Preview" />
              <div className="absolute inset-0 bg-dps-green-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-dps-green shadow-2xl">
                  <Eye size={32} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {brochures.map((item, idx) => (
              <div key={idx} className="bg-white border border-dps-border p-8 rounded-[32px] flex items-start gap-6 hover:shadow-xl transition-all hover:border-dps-green/20">
                <div className="w-16 h-16 rounded-2xl bg-dps-green-light flex items-center justify-center text-dps-green shrink-0">
                  <FileText size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-dps-green-dark mb-2">{item.title}</h3>
                  <p className="text-dps-muted mb-6">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest text-dps-muted uppercase">{item.type} • {item.size}</span>
                    <button className="text-dps-green font-bold text-sm flex items-center gap-2 hover:underline">
                      <Download size={16} /> Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-dps-off-white rounded-[40px] border border-dps-border flex flex-col md:flex-row items-center gap-12">
            <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center text-dps-green shrink-0">
              <Map size={48} />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-dps-green-dark mb-2">Request a Physical Copy</h3>
              <p className="text-dps-muted leading-relaxed">
                If you prefer a printed copy of our prospectus, you can visit our school office or request one to be sent to your mailing address.
              </p>
            </div>
            <button className="px-8 py-4 bg-dps-green-dark text-white rounded-full font-bold whitespace-nowrap hover:bg-dps-green transition-all">
              Request by Mail
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
