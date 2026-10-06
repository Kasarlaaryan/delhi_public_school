/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function AdmissionApply() {
  const applicationUrl = "https://www.dpsnacharam.in/admission-process/"; // Placeholder

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Apply Online" 
        subtitle="Begin the enrollment process for the upcoming academic session 2026-27."
        category="ADMISSIONS"
      />

      <section className="py-24">
        <Container className="text-center">
          <div className="max-w-3xl mx-auto p-12 md:p-20 bg-dps-off-white border border-dps-border rounded-[40px]">
            <h2 className="font-serif text-4xl text-dps-green-dark mb-8">Official Application Portal</h2>
            <p className="text-lg text-dps-muted leading-relaxed mb-12">
              You are about to be redirected to our secure application portal where you can complete the formal admission process.
            </p>
            <a 
              href={applicationUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-dps-green text-dps-white rounded-full font-bold tracking-widest text-xs uppercase hover:bg-dps-green-dark transition-all shadow-xl"
            >
              Go to Application Portal <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 border border-dps-border rounded-3xl">
              <h3 className="font-serif text-xl mb-4">Required Documents</h3>
              <ul className="text-sm text-dps-muted flex flex-col gap-3">
                <li>• Birth Certificate</li>
                <li>• Previous Report Cards</li>
                <li>• Passport Photos</li>
                <li>• Address Proof</li>
              </ul>
            </div>
            <div className="p-8 border border-dps-border rounded-3xl">
              <h3 className="font-serif text-xl mb-4">Fee Payment</h3>
              <p className="text-sm text-dps-muted">Secure online payment options for application fees and term deposits.</p>
            </div>
            <div className="p-8 border border-dps-border rounded-3xl">
              <h3 className="font-serif text-xl mb-4">Support</h3>
              <p className="text-sm text-dps-muted">Need help? Contact our admissions help desk at 040 67580013.</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
