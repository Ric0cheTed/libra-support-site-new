'use client';

import dynamic from 'next/dynamic';

const ClientCareFeatures = dynamic(
  () => import('./ClientCareFeatures').then(mod => mod.ClientCareFeatures),
  { ssr: false }
);

export default function ClientCareFeaturesWrapper() {
  return <ClientCareFeatures />;
}
