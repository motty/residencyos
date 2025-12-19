import { LanguageProvider } from './i18n';
import { Navigation } from './components';
import {
  Hero,
  Features,
  ProductPreview,
  HowItWorks,
  Testimonials,
  Pricing,
  CTA,
  Footer,
} from './sections';

function App() {
  return (
    <LanguageProvider>
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
          <Pricing />
          <CTA />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
