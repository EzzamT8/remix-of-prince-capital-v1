import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="heading-large text-center mb-8">Resources</h1>
        <p className="text-center text-muted-foreground">
          Coming soon: Valuable tools, guides, and information to support your business journey.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
