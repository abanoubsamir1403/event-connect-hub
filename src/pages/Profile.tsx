import AppLayout from "@/components/AppLayout";
import { User, Settings, Heart, Bell, HelpCircle, LogOut, LayoutDashboard } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { TranslationKey } from "@/i18n/translations";

const Profile = () => {
  const { t } = useLanguage();
  const { user, profile, isAdmin, isProvider, signOut } = useAuth();
  const navigate = useNavigate();

  const menuItems: { icon: typeof Heart; labelKey: TranslationKey; onClick?: () => void }[] = [
    ...(isAdmin ? [{ icon: LayoutDashboard, labelKey: "adminDashboard" as TranslationKey, onClick: () => navigate("/admin") }] : []),
    ...(isProvider ? [{ icon: LayoutDashboard, labelKey: "providerDashboard" as TranslationKey, onClick: () => navigate("/provider-dashboard") }] : []),
    { icon: Heart, labelKey: "favorites" as TranslationKey },
    { icon: Bell, labelKey: "notifications" as TranslationKey },
    { icon: Settings, labelKey: "settings" as TranslationKey },
    { icon: HelpCircle, labelKey: "helpSupport" as TranslationKey },
  ];

  return (
    <AppLayout>
      <div className="min-h-screen bg-background pb-20 md:pb-8">
        <div className="sticky top-0 z-30 border-b border-border bg-background/95 px-4 py-3 backdrop-blur-md md:top-[57px]">
          <div className="mx-auto max-w-6xl">
            <h1 className="font-display text-xl font-semibold text-foreground">{t("profile")}</h1>
          </div>
        </div>
        <div className="mx-auto max-w-lg px-4 pt-6">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <User className="h-7 w-7 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                {user ? (profile?.full_name || user.email) : t("guestUser")}
              </h2>
              <p className="text-sm text-muted-foreground">
                {user ? (profile?.account_type === "provider" ? t("serviceProvider") : t("customer")) : t("signInPrompt")}
              </p>
            </div>
          </div>

          {!user && (
            <button
              onClick={() => navigate("/login")}
              className="mb-6 w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]"
            >
              {t("signIn")}
            </button>
          )}

          <div className="divide-y divide-border rounded-2xl border border-border">
            {menuItems.map((item) => (
              <button
                key={item.labelKey}
                onClick={item.onClick}
                className="flex w-full items-center gap-3 px-4 py-3.5 text-start transition-colors hover:bg-muted/50"
              >
                <item.icon className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{t(item.labelKey)}</span>
              </button>
            ))}
          </div>

          {user && (
            <button
              onClick={signOut}
              className="mt-4 flex w-full items-center gap-3 rounded-2xl border border-destructive/20 px-4 py-3.5 text-start text-destructive transition-colors hover:bg-destructive/5"
            >
              <LogOut className="h-5 w-5" />
              <span className="text-sm font-medium">{t("logOut")}</span>
            </button>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
