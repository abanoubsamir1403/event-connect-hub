import { useParams, useNavigate } from "react-router-dom";
import { categories, providers } from "@/data/mockData";
import { ArrowLeft } from "lucide-react";
import ProviderCard from "@/components/ProviderCard";
import SearchBar from "@/components/SearchBar";
import AppLayout from "@/components/AppLayout";
import { useLanguage } from "@/i18n/LanguageContext";
import { TranslationKey } from "@/i18n/translations";

const CategoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  const category = categories.find((c) => c.id === id);
  const categoryProviders = providers.filter((p) => p.categoryId === id);

  if (!category) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">{t("categoryNotFound")}</p>
      </div>
    );
  }

  const catName = t(`cat_${category.id}` as TranslationKey);

  return (
    <AppLayout>
      <div className="min-h-screen bg-background pb-20 md:pb-8">
        <div className="sticky top-0 z-30 border-b border-border bg-background/95 px-4 py-3 backdrop-blur-md md:top-[57px]">
          <div className="mx-auto flex max-w-6xl items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-muted transition-colors hover:bg-muted/80"
            >
              <ArrowLeft className={`h-4 w-4 text-foreground ${isRTL ? "rotate-180" : ""}`} />
            </button>
            <h1 className="font-display text-xl font-semibold text-foreground">
              {category.icon} {catName}
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pt-4">
          <div className="mb-4 md:max-w-xl">
            <SearchBar placeholder={`${t("searchPlaceholder")}`} />
          </div>

          {categoryProviders.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {categoryProviders.map((provider, i) => (
                <ProviderCard key={provider.id} provider={provider} index={i} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-5xl mb-3">{category.icon}</p>
              <p className="text-muted-foreground">{t("noProvidersCategory")}</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default CategoryPage;
