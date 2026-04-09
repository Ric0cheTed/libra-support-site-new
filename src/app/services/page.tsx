import { metadata as servicesMetadata } from './metadata';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { MobileStickyCallBar } from '@/components/ui/mobile-sticky-call-bar';
import ServicesContent from './services-content';

export const metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs />
      <div className="pb-24 sm:pb-0">
        <ServicesContent />
      </div>
      <MobileStickyCallBar />
    </>
  );
}
