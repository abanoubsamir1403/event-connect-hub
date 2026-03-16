import SearchBar from "@/components/SearchBar";
import CategoryChips from "@/components/CategoryChips";
import ProviderCard from "@/components/ProviderCard";
import BottomNav from "@/components/BottomNav";
import { providers } from "@/data/mockData";
import heroImage from "@/assets/hero-events.jpg";
import { motion } from "framer-motion";

const Index = () => {
  const featured = providers.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero */}
      <div className="relative h-56 overflow-hidden">
        <img src={heroImage} alt="Elegant event venue" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 to-foreground/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2 font-display text-3xl font-bold text-primary-foreground"
          >
            Find Your Perfect Event
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-4 text-sm text-primary-foreground/80"
          >
            Discover & book the best service providers
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-lg px-4">
        {/* Search - overlapping hero */}
        <div className="-mt-6 relative z-10 mb-6">
          <SearchBar />
        </div>

        {/* Categories */}
        <section className="mb-6">
          <h2 className="mb-3 font-display text-lg font-semibold text-foreground">Browse Categories</h2>
          <CategoryChips />
        </section>

        {/* Featured */}
        <section className="mb-6">
          <h2 className="mb-3 font-display text-lg font-semibold text-foreground">Featured Providers</h2>
          <div className="grid gap-4">
            {featured.map((provider, i) => (
              <ProviderCard key={provider.id} provider={provider} index={i} />
            ))}
          </div>
        </section>

        {/* All Providers */}
        <section className="mb-6">
          <h2 className="mb-3 font-display text-lg font-semibold text-foreground">Popular Services</h2>
          <div className="grid gap-4">
            {providers
              .filter((p) => !p.featured)
              .map((provider, i) => (
                <ProviderCard key={provider.id} provider={provider} index={i} />
              ))}
          </div>
        </section>
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;
