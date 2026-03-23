import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Calendar, Star, MessageCircle, LogOut, Home, Plus } from "lucide-react";

const ProviderDashboard = () => {
  const { t } = useLanguage();
  const { user, profile, isProvider, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isProvider)) {
      navigate("/");
    }
  }, [user, isProvider, loading, navigate]);

  if (loading) return <div className="flex min-h-screen items-center justify-center">{t("loading")}...</div>;

  const quickActions = [
    { icon: Plus, label: t("addService"), onClick: () => {} },
    { icon: Calendar, label: t("manageBookings"), onClick: () => {} },
    { icon: MessageCircle, label: t("messages"), onClick: () => navigate("/messages") },
  ];

  const statCards = [
    { icon: LayoutGrid, label: t("myServices"), value: 0 },
    { icon: Calendar, label: t("activeBookings"), value: 0 },
    { icon: Star, label: t("avgRating"), value: "—" },
    { icon: MessageCircle, label: t("messages"), value: 0 },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/")} className="font-display text-xl font-bold text-primary">Evently</button>
            <span className="rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-semibold text-secondary">{t("providerPanel")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}><Home className="h-4 w-4" /></Button>
            <Button variant="ghost" size="sm" onClick={signOut}><LogOut className="h-4 w-4" /></Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">
              {t("welcome")}, {profile?.full_name || t("serviceProvider")}
            </h1>
            <p className="text-sm text-muted-foreground">{t("providerDashboardDesc")}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8 flex flex-wrap gap-3">
          {quickActions.map((a) => (
            <Button key={a.label} variant="outline" onClick={a.onClick} className="gap-2">
              <a.icon className="h-4 w-4" /> {a.label}
            </Button>
          ))}
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((s) => (
            <Card key={s.label}>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="rounded-xl bg-muted p-3 text-primary"><s.icon className="h-6 w-6" /></div>
                <div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty state */}
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <LayoutGrid className="mb-4 h-12 w-12 text-muted-foreground/50" />
            <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{t("noServicesYet")}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{t("noServicesDesc")}</p>
            <Button className="gap-2"><Plus className="h-4 w-4" /> {t("addService")}</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProviderDashboard;
