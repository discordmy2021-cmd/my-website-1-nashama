import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesRow } from './components/FeaturesRow';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ContactSection } from './components/ContactSection';
import { CaptainModal } from './components/CaptainModal';
import { ChatModal } from './components/ChatModal';
import { CallModal } from './components/CallModal';
import { WalletModal } from './components/WalletModal';
import { NotificationsModal } from './components/NotificationsModal';

export function App() {
  const [isCaptainOpen, setIsCaptainOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCallOpen, setIsCallOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans dir-rtl">
      <Navbar
        onOpenBooking={() => {}}
        onOpenCaptain={() => setIsCaptainOpen(true)}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenCall={() => setIsCallOpen(true)}
      />

      <main>
        <Hero />
        <FeaturesRow />
        <HowItWorksSection />
        <ContactSection />
      </main>

      <CaptainModal
        isOpen={isCaptainOpen}
        onClose={() => setIsCaptainOpen(false)}
      />

      <WalletModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      <CallModal
        isOpen={isCallOpen}
        onClose={() => setIsCallOpen(false)}
      />

      <NotificationsModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />
    </div>
  );
}

export default App;