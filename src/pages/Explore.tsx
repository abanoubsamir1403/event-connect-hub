import SearchBar from "@/components/SearchBar";
import CategoryChips from "@/components/CategoryChips";
import ProviderCard from "@/components/ProviderCard";
import BottomNav from "@/components/BottomNav";
import { providers } from "@/data/mockData";
import { useState } from "react";

const Explore = () => {
  const [query, setQuery] = useState("");
  const filtered = providers.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-30 border-b border-border bg-background/95 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto max-w-lg">
          <h1 className="mb-3 font-display text-xl font-semibold text-foreground">Explore</h1>
          <SearchBar onSearch={setQuery} />
        </div>
      </div>

      <div className="mx-auto max-w-lg px-4 pt-4">
        {!query && (
          <section className="mb-6">
            <h2 className="mb-3 font-display text-base font-semibold text-foreground">Categories</h2>
            <CategoryChips />
          </section>
        )}

        <section>
          <h2 className="mb-3 font-display text-base font-semibold text-foreground">
            {query ? `Results for "${query}"` : "All Providers"}
          </h2>
          <div className="grid gap-4">
            {filtered.map((p, i) => (
              <ProviderCard key={p.id} provider={p} index={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-12 text-center text-muted-foreground">No results found</p>
          )}
        </section>
      </div>

      <BottomNav />
    </div>
  );
};

export default Explore;
