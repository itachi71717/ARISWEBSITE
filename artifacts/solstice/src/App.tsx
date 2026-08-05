import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Services } from './components/services';
import { ColorShowcase } from './components/color-showcase';
import { Contact } from './components/contact';
import { Footer } from './components/footer';

const queryClient = new QueryClient();

function HomePage() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal flex flex-col w-full selection:bg-solstice-gold/30 selection:text-charcoal">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ColorShowcase />
      <Contact />
      <Footer />
    </main>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-ivory text-charcoal font-sans text-center px-6">
      <h1 className="text-4xl md:text-6xl font-serif mb-4">Page Not Found</h1>
      <p className="text-slate mb-8 max-w-md">The page you are looking for doesn't exist or has been moved.</p>
      <a 
        href="/"
        className="px-8 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory transition-colors"
      >
        Return Home
      </a>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
