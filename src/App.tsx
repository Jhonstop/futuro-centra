
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Marketplace from "./pages/Marketplace";
import SupplierDashboard from "./pages/SupplierDashboard";
import ProductCatalog from "./pages/supplier/ProductCatalog";
import SellersAITraining from "./pages/supplier/SellersAITraining";
import ProductDetail from "./pages/ProductDetail";
import CentraPay from "./pages/CentraPay";
import ErpSystem from "./pages/ErpSystem";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/supplier" element={<SupplierDashboard />} />
          <Route path="/supplier/catalog" element={<ProductCatalog />} />
          <Route path="/supplier/sellers-ai" element={<SellersAITraining />} />
          <Route path="/centrapay" element={<CentraPay />} />
          <Route path="/erp" element={<ErpSystem />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
