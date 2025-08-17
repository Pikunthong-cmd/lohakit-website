import React from 'react';
import ImageGallery from './components/ImageGallery';
import ServiceHighlights from './components/ServiceHighlights';
import ProductServiceAccordion from './components/ProductServiceAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Breadcrumb
        items={[
          { label: "หน้าหลัก", href: "/" },
          { label: "เกี่ยวกับเรา" },
        ]}
      />
      <BaseImageGallery />
      <ServiceHighlights />
      <ProductServiceAccordion />
    </main>
  );
}