import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import HeadSection from './components/HeadSection';

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Breadcrumb
        items={[
          { label: "หน้าหลัก", href: "/" },
          { label: "สินค้าของเรา" },
        ]}
      />
      <HeadSection/>
    </main>
  );
}