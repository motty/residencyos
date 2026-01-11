import { LanguageProvider } from './i18n';
import { WaitlistProvider } from './context';
import { Navigation, WaitlistModal } from './components';
import {
  Hero,
  Features,
  ProductPreview,
  HowItWorks,
  Testimonials,
  CTA,
  Footer,
} from './sections';

function App() {
  return (
    <LanguageProvider>
      <WaitlistProvider>
        <div className="min-h-screen">
          {/* Subtle grain overlay for sophistication */}
          <div className="grain-overlay" />

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main>
            <Hero />
            <Features />
            <ProductPreview />
            <HowItWorks />
            <Testimonials />
            <CTA />
          </main>

          {/* Footer */}
          <Footer />
        </div>

        {/* Waitlist Modal */}
        <WaitlistModal />
      </WaitlistProvider>
    </LanguageProvider>
  );
}

export default App;
