import { useParams, useNavigate } from "react-router-dom";
import { providers, reviews } from "@/data/mockData";
import { ArrowLeft, Star, MapPin, Heart, Share2 } from "lucide-react";
import ReviewCard from "@/components/ReviewCard";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const ProviderProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  const provider = providers.find((p) => p.id === id);

  if (!provider) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">{t("providerNotFound")}</p>
      </div>
    );
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-background pb-28 md:pb-8">
        {/* Header Image */}
        <div className="relative h-72 overflow-hidden md:h-96">
          <motion.img
            layoutId={`provider-image-${provider.id}`}
            src={provider.image}
            alt={provider.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20" />

          <div className="absolute start-0 end-0 top-0 flex items-center justify-between p-4">
            <button
              onClick={() => navigate(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm transition-colors hover:bg-background"
            >
              <ArrowLeft className={`h-4 w-4 text-foreground ${isRTL ? "rotate-180" : ""}`} />
            </button>
            <div className="flex gap-2">
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm">
                <Heart className="h-4 w-4 text-foreground" />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm">
                <Share2 className="h-4 w-4 text-foreground" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 start-0 end-0 p-4">
            <span className="mb-1 inline-block rounded-full bg-secondary/90 px-3 py-0.5 text-[10px] font-semibold text-secondary-foreground">
              {provider.category}
            </span>
            <h1 className="font-display text-2xl font-bold text-primary-foreground md:text-4xl">{provider.name}</h1>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4">
          <div className="flex items-center gap-4 border-b border-border py-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="font-semibold text-foreground">{provider.rating}</span>
              <span className="text-sm text-muted-foreground">({provider.reviewCount} {t("reviews")})</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{provider.location}</span>
            </div>
          </div>

          <div className="border-b border-border py-4">
            <p className="text-sm text-muted-foreground">{t("startingAt")}</p>
            <p className="font-display text-xl font-bold text-primary">{provider.price}</p>
          </div>

          <div className="border-b border-border py-4">
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">{t("about")}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{provider.description}</p>
          </div>

          <div className="py-4">
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">{t("reviews")}</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Book Button */}
        <div className="fixed bottom-16 start-0 end-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md md:bottom-0">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
            <div>
              <p className="text-xs text-muted-foreground">{t("startingAt")}</p>
              <p className="font-display text-lg font-bold text-foreground">{provider.price}</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5">
                {t("inquire")}
              </button>
              <button className="rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-accent-foreground shadow-lg transition-all hover:shadow-xl active:scale-95">
                {t("bookNow")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProviderProfile;
