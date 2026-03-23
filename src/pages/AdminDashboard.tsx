import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/i18n/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Users, LayoutGrid, Calendar, Star, LogOut, Home } from "lucide-react";

const AdminDashboard = () => {
  const { t } = useLanguage();
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<any[]>([]);
  const [stats, setStats] = useState({ users: 0, providers: 0, customers: 0 });

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/");
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("profiles").select("*").order("created_at", { ascending: false });
      if (data) {
        setProfiles(data);
        setStats({
          users: data.length,
          providers: data.filter((p: any) => p.account_type === "provider").length,
          customers: data.filter((p: any) => p.account_type === "customer").length,
        });
      }
    };
    if (isAdmin) fetchData();
  }, [isAdmin]);

  if (loading) return <div className="flex min-h-screen items-center justify-center">{t("loading")}...</div>;

  const statCards = [
    { icon: Users, label: t("totalUsers"), value: stats.users, color: "text-primary" },
    { icon: LayoutGrid, label: t("totalProviders"), value: stats.providers, color: "text-secondary" },
    { icon: Calendar, label: t("totalCustomers"), value: stats.customers, color: "text-accent-foreground" },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/")} className="font-display text-xl font-bold text-primary">Evently</button>
            <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-semibold text-destructive">{t("admin")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}><Home className="h-4 w-4" /></Button>
            <Button variant="ghost" size="sm" onClick={signOut}><LogOut className="h-4 w-4" /></Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <h1 className="mb-6 font-display text-2xl font-bold text-foreground">{t("adminDashboard")}</h1>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {statCards.map((s) => (
            <Card key={s.label}>
              <CardContent className="flex items-center gap-4 p-6">
                <div className={`rounded-xl bg-muted p-3 ${s.color}`}><s.icon className="h-6 w-6" /></div>
                <div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle className="font-display">{t("allUsers")}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("fullName")}</TableHead>
                  <TableHead>{t("accountType")}</TableHead>
                  <TableHead>{t("phone")}</TableHead>
                  <TableHead>{t("joinDate")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {profiles.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-medium">{p.full_name || "—"}</TableCell>
                    <TableCell>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${p.account_type === "provider" ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"}`}>
                        {p.account_type === "provider" ? t("serviceProvider") : t("customer")}
                      </span>
                    </TableCell>
                    <TableCell>{p.phone || "—"}</TableCell>
                    <TableCell>{new Date(p.created_at).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
