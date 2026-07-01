import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'green' | 'gradient' | 'dark';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const backgroundVariants = {
  white: 'bg-[#fcf8f1]',
  gray: 'bg-[#f4ece1]',
  green: 'bg-gradient-to-br from-[#f8f0e4] to-[#efe1c9]',
  gradient: 'bg-gradient-to-br from-[#3f2518] via-[#6a4328] to-[#24150f]',
  dark: 'bg-[#24150f]'
};

const paddingVariants = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-24',
  xl: 'py-24 md:py-32'
};

export function Section({ 
  children, 
  className, 
  background = 'white', 
  padding = 'lg',
  id 
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        backgroundVariants[background],
        paddingVariants[padding],
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function HeroSection({ children, className, ...props }: Omit<SectionProps, 'padding'>) {
  return (
    <Section 
      padding="xl" 
      className={cn('relative min-h-screen flex items-center', className)}
      {...props}
    >
      {children}
    </Section>
  );
}

export function ContentSection({ children, className, ...props }: SectionProps) {
  return (
    <Section 
      className={cn('relative', className)}
      {...props}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {children}
      </div>
    </Section>
  );
}
