import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="heading-large text-center mb-8">Support</h1>
        <p className="text-center text-muted-foreground">
          Coming soon: Find answers to your questions or contact our support team for assistance.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default SupportPage;
