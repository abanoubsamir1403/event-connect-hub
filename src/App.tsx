import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Explore from "./pages/Explore";
import Bookings from "./pages/Bookings";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import ProviderProfile from "./pages/ProviderProfile";
import CategoryPage from "./pages/CategoryPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <BrowserRouter>
          <AuthProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/provider/:id" element={<ProviderProfile />} />
              <Route path="/category/:id" element={<CategoryPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/provider-dashboard" element={<ProviderDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
