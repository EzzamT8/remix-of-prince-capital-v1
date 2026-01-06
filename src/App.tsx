import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WorkingCapitalPage from "./pages/WorkingCapitalPage";
import RevenueBasedFundingPage from "./pages/RevenueBasedFundingPage";
import EquipmentFinancingPage from "./pages/EquipmentFinancingPage";
import InvoiceFactoringPage from "./pages/InvoiceFactoringPage";
import SBALoansPage from "./pages/SBALoansPage";
import StrategicFinancingPage from "./pages/StrategicFinancingPage";
import RealEstateFinancingPage from "./pages/RealEstateFinancingPage";
import BusinessLinesOfCreditPage from "./pages/BusinessLinesOfCreditPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import CompliancePage from "./pages/CompliancePage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage"; // New import
import ResourcesPage from "./pages/ResourcesPage"; // New import
import SupportPage from "./pages/SupportPage"; // New import

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/working-capital" element={<PageTransition><WorkingCapitalPage /></PageTransition>} />
        <Route path="/revenue-based-funding" element={<PageTransition><RevenueBasedFundingPage /></PageTransition>} />
        <Route path="/equipment-financing" element={<PageTransition><EquipmentFinancingPage /></PageTransition>} />
        <Route path="/invoice-factoring" element={<PageTransition><InvoiceFactoringPage /></PageTransition>} />
        <Route path="/sba-loans" element={<PageTransition><SBALoansPage /></PageTransition>} />
        <Route path="/strategic-financing" element={<PageTransition><StrategicFinancingPage /></PageTransition>} />
        <Route path="/real-estate-financing" element={<PageTransition><RealEstateFinancingPage /></PageTransition>} />
        <Route path="/business-lines-of-credit" element={<PageTransition><BusinessLinesOfCreditPage /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicyPage /></PageTransition>} />
        <Route path="/terms-of-service" element={<PageTransition><TermsOfServicePage /></PageTransition>} />
        <Route path="/cookie-policy" element={<PageTransition><CookiePolicyPage /></PageTransition>} />
        <Route path="/compliance" element={<PageTransition><CompliancePage /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} /> {/* New route */}
        <Route path="/resources" element={<PageTransition><ResourcesPage /></PageTransition>} /> {/* New route */}
        <Route path="/support" element={<PageTransition><SupportPage /></PageTransition>} /> {/* New route */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
