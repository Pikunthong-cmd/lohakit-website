import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import MapContact from './components/MapContact';
import ContactDetails from './components/ContactDetails';
import SocialContact from './components/SocialContact';

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Breadcrumb
        items={[
          { label: "หน้าหลัก", href: "/" },
          { label: "ติดต่อเรา" },
        ]}
        
      />
      <MapContact />
      <ContactDetails/>
      <SocialContact />
    </main>
  );
}