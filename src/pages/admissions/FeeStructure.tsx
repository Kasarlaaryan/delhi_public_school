/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { CreditCard, ShieldCheck, PieChart, Info, Download } from 'lucide-react';

const feeTable = [
  { grade: "Nursery - UKG", registration: "₹2,500", admission: "₹45,000", caution: "₹5,000", tuition: "₹1,20,000" },
  { grade: "Class I - V", registration: "₹2,500", admission: "₹45,000", caution: "₹5,000", tuition: "₹1,45,000" },
  { grade: "Class VI - X", registration: "₹2,500", admission: "₹45,000", caution: "₹5,000", tuition: "₹1,65,000" },
  { grade: "Class XI - XII", registration: "₹2,500", admission: "₹45,000", caution: "₹5,000", tuition: "₹1,85,000" }
];

export default function FeeStructure() {
  return (
    <main className="bg-white min-h-screen">
      <PageHeader 
        title="Fee Structure" 
        category="ADMISSIONS"
        subtitle="Transparent and straightforward financial guidelines for the 2026-27 academic year."
      />

      <section className="py-24">
        <Container>
          <div className="max-w-3xl mb-16">
            <h2 className="font-serif text-4xl text-dps-green-dark mb-6">Investment in Your Child's Future</h2>
            <p className="text-lg text-dps-muted leading-relaxed">
              Our fee structure is designed to reflect the high-quality infrastructure, world-class faculty, and the comprehensive learning ecosystem we provide. All figures are in INR.
            </p>
          </div>

          <div className="overflow-x-auto mb-16 shadow-2xl shadow-dps-green/5 rounded-[32px] border border-dps-border">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-dps-green text-white">
                  <th className="px-8 py-6 font-serif text-lg">Grade Level</th>
                  <th className="px-8 py-6 font-serif text-lg">Registration</th>
                  <th className="px-8 py-6 font-serif text-lg">Admission Fee</th>
                  <th className="px-8 py-6 font-serif text-lg">Caution Deposit</th>
                  <th className="px-8 py-6 font-serif text-lg">Tuition (Annual)</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {feeTable.map((row, idx) => (
                  <tr key={idx} className="border-b border-dps-border last:border-0 hover:bg-dps-off-white transition-colors">
                    <td className="px-8 py-6 font-bold text-dps-green-dark">{row.grade}</td>
                    <td className="px-8 py-6 text-dps-muted">{row.registration}</td>
                    <td className="px-8 py-6 text-dps-muted">{row.admission}</td>
                    <td className="px-8 py-6 text-dps-muted">{row.caution}</td>
                    <td className="px-8 py-6 font-bold text-dps-green">{row.tuition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="p-8 bg-dps-off-white rounded-3xl border border-dps-border">
              <div className="text-dps-green mb-6"><PieChart size={32} /></div>
              <h4 className="font-serif text-xl text-dps-green-dark mb-4">Payment Schedule</h4>
              <p className="text-sm text-dps-muted leading-relaxed">
                Fees can be paid annually or in three equal installments at the beginning of each term (April, August, and December).
              </p>
            </div>
            <div className="p-8 bg-dps-off-white rounded-3xl border border-dps-border">
              <div className="text-dps-green mb-6"><CreditCard size={32} /></div>
              <h4 className="font-serif text-xl text-dps-green-dark mb-4">Payment Methods</h4>
              <p className="text-sm text-dps-muted leading-relaxed">
                We accept online transfers, credit/debit cards, and UPI via our dedicated parent portal. Cash payments are not accepted at the school office.
              </p>
            </div>
            <div className="p-8 bg-dps-off-white rounded-3xl border border-dps-border">
              <div className="text-dps-green mb-6"><ShieldCheck size={32} /></div>
              <h4 className="font-serif text-xl text-dps-green-dark mb-4">Refund Policy</h4>
              <p className="text-sm text-dps-muted leading-relaxed">
                Caution deposit is refundable at the time of withdrawal. Other fees are non-refundable once the admission is confirmed.
              </p>
            </div>
          </div>

          <div className="bg-dps-green-dark rounded-[40px] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-dps-green rounded-2xl flex items-center justify-center">
                  <Info size={24} />
                </div>
                <h3 className="font-serif text-3xl">Other Mandatory Fees</h3>
              </div>
              <ul className="space-y-4 text-dps-white/70">
                <li>• Transport fee based on distance (Annual range: ₹35,000 - ₹55,000)</li>
                <li>• Uniform and Books (Purchased through authorized vendors)</li>
                <li>• External Examination fees (IGCSE / IBDP / Boards)</li>
                <li>• Residential charges for boarding students (Additional ₹2,80,000 annually)</li>
              </ul>
            </div>
            <div className="shrink-0 w-full lg:w-auto">
              <button className="w-full lg:w-auto px-12 py-5 bg-white text-dps-green-dark rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-dps-green hover:text-white transition-all shadow-2xl">
                <Download size={24} /> Download Full Fee Card
              </button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
