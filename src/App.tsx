import { CTA } from "./components/screens/cta";
import { CurrencyOptions } from "./components/screens/currency-options";
import { Features } from "./components/screens/features";
import { Footer } from "./components/screens/footer";
import { Hero } from "./components/screens/hero";
import { PricingPlan } from "./components/screens/pricing-plan";
import { RecentClients } from "./components/screens/recent-clients";
import { SeamlessBanking } from "./components/screens/seamless-banking";
import { SmartPayment } from "./components/screens/smart-payment";
import { Stats } from "./components/screens/stats";
import { Testimonials } from "./components/screens/testimonials";


function App() {
  return (
    <main className="">
      <Hero />
      <RecentClients />
      <Features />
      <CurrencyOptions />
      <SmartPayment />
      <Stats />
      <PricingPlan />
      <SeamlessBanking />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
