import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import Contact from "./pages/Contact";
import Layout from "./components/layout"; // ✅ ADD THIS LINE
import OffersPage from "./pages/Offers"; // at the top

import Home from "./pages/Home";
import NotFound from "./pages/not-found";
import About from "@/pages/About";
import PartnerWithUs from "@/pages/ParterWithUs";
import ProductPage from "@/pages/ProductPage"; 
import CartPage from "@/pages/CartPage";
import SignIn from "@/pages/SignIn";
import { CartProvider } from "@/context/CartContext";


function Router() {
  return (
    <Switch>
      <Route path="/offers" component={OffersPage} />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/partner" component={PartnerWithUs} />
      <Route path="/products" component={ProductPage} />
      <Route path="/contact" component={Contact} /> {/* ✅ Add this */}
      <Route path="/cart" component={CartPage} />
      <Route path="/signin" component={SignIn} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />

          {/* ✅ WRAP ALL PAGES WITH LAYOUT HERE */}
          <Layout>
            <Router />
          </Layout>

        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
