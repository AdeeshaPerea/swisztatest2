import React, { useState } from 'react';
import SwisztaTest2 from './pages/SwisztaTest2';

/* Shared Interactive Modals */
import QuoteModal from './components/QuoteModal';
import VideoModal from './components/VideoModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import ClientsModal from './components/ClientsModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isClientsOpen, setIsClientsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="app-root">
      {/* Standalone Swiszta Test 2 Luxury Landing Experience */}
      <SwisztaTest2 
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenVideo={() => setIsVideoOpen(true)}
        onSelectService={(svc) => setSelectedService(svc)}
        onOpenClients={() => setIsClientsOpen(true)}
      />

      {/* Modals */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
      />

      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
      />

      <ServiceDetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
        onOpenQuote={() => setIsQuoteOpen(true)} 
      />

      <ClientsModal 
        isOpen={isClientsOpen} 
        onClose={() => setIsClientsOpen(false)} 
      />
    </div>
  );
}
