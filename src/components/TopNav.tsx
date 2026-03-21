import { useLocation, useNavigate } from "react-router-dom";
import { Home, Search, Calendar, MessageCircle, User, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { TranslationKey } from "@/i18n/translations";

const tabs: { icon: typeof Home; labelKey: TranslationKey; path: string }[] = [
  { icon: Home, labelKey: "home", path: "/" },
  { icon: Search, labelKey: "explore", path: "/explore" },
  { icon: Calendar, labelKey: "bookings", path: "/bookings" },
  { icon: MessageCircle, labelKey: "messages", path: "/messages" },
  { icon: User, labelKey: "profile", path: "/profile" },
];

const TopNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, lang, setLang } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <button onClick={() => navigate("/")} className="font-display text-xl font-bold text-primary">
          Evently
        </button>

        <div className="flex items-center gap-1">
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <tab.icon className="h-4 w-4" strokeWidth={isActive ? 2.5 : 1.8} />
                <span>{t(tab.labelKey)}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Globe className="h-4 w-4" />
          <span>{t("switchLang")}</span>
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
