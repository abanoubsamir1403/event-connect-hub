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

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, lang, setLang } = useLanguage();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-around py-2">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 1.8} />
              <span className="text-[10px] font-medium">{t(tab.labelKey)}</span>
            </button>
          );
        })}
        <button
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="flex flex-col items-center gap-0.5 px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Globe className="h-5 w-5" strokeWidth={1.8} />
          <span className="text-[10px] font-medium">{t("switchLang")}</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
