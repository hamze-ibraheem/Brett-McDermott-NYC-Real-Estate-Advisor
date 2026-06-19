/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Layout } from './components/Layout';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { DifferenceSection } from './components/DifferenceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <DifferenceSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
}
