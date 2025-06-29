import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";
import About from "@/pages/About";
import PartnerWithUs from "@/pages/ParterWithUs";
import ProductPage from "@/pages/ProductPage"; 
import AboveNav from "./components/AboveNav"; 
import Navigation from "./components/Navigation";
import CartPage from "@/pages/CartPage";
import { CartProvider } from "@/context/CartContext";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";



function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About } /> 
      <Route path="/partner" component={PartnerWithUs} />
      <Route path="/products" component={ProductPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
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
      <Router />
    </TooltipProvider>
  </CartProvider>
</QueryClientProvider>
  );
}

export default App;