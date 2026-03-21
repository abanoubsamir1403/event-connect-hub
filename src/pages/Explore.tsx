import SearchBar from "@/components/SearchBar";
import CategoryChips from "@/components/CategoryChips";
import ProviderCard from "@/components/ProviderCard";
import AppLayout from "@/components/AppLayout";
import { providers } from "@/data/mockData";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const Explore = () => {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const filtered = providers.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="min-h-screen bg-background pb-20 md:pb-8">
        <div className="sticky top-0 z-30 border-b border-border bg-background/95 px-4 py-3 backdrop-blur-md md:top-[57px]">
          <div className="mx-auto max-w-6xl">
            <h1 className="mb-3 font-display text-xl font-semibold text-foreground">{t("explore")}</h1>
            <div className="md:max-w-xl">
              <SearchBar onSearch={setQuery} />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pt-4">
          {!query && (
            <section className="mb-6">
              <h2 className="mb-3 font-display text-base font-semibold text-foreground">{t("categories")}</h2>
              <CategoryChips />
            </section>
          )}

          <section>
            <h2 className="mb-3 font-display text-base font-semibold text-foreground">
              {query ? `${t("resultsFor")} "${query}"` : t("allProviders")}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p, i) => (
                <ProviderCard key={p.id} provider={p} index={i} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="py-12 text-center text-muted-foreground">{t("noResults")}</p>
            )}
          </section>
        </div>
      </div>
    </AppLayout>
  );
};

export default Explore;
