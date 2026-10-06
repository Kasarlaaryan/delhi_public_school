/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';

export default function PlaceholderPage({ title, category }: { title: string, category: string }) {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title={title} 
        subtitle={`Discover more about ${title.toLowerCase()} at DPS Nacharam.`}
        category={category}
      />

      <section className="py-32 bg-dps-white">
        <Container className="text-center">
          <div className="max-w-2xl mx-auto p-20 bg-dps-off-white border border-dps-border rounded-[40px]">
             <h2 className="font-serif text-4xl text-dps-green-dark mb-6">Content Coming Soon</h2>
             <p className="text-dps-muted leading-relaxed mb-10">
               We are currently updating this section with the latest information, images, and student stories. Please check back later.
             </p>
             <div className="h-[1px] w-20 bg-dps-green mx-auto" />
          </div>
        </Container>
      </section>
    </div>
  );
}
