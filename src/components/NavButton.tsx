'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type NavButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavButton({ href, children }: NavButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <button
        className={cn(
          'text-sm md:text-base px-5 py-3 transition-colors duration-200 font-medium cursor-pointer',
          isActive
            ? 'bg-[#F7DA0A] text-[#2B3990]'
            : 'bg-[#2B3990] text-white hover:bg-[#F7DA0A] hover:text-[#2B3990]'
        )}
      >
        {children}
      </button>
    </Link>
  );
}
