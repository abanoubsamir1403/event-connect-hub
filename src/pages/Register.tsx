import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState<"customer" | "provider">("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: { full_name: fullName, account_type: accountType, phone },
      },
    });
    setLoading(false);
    if (error) {
      toast({ title: t("registerError"), description: error.message, variant: "destructive" });
    } else {
      toast({ title: t("registerSuccess"), description: t("checkEmail") });
      navigate("/login");
    }
  };

  const handleSocialLogin = async (provider: "google" | "apple") => {
    setLoading(true);
    const result = await lovable.auth.signInWithOAuth(provider, {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast({ title: t("registerError"), description: String(result.error), variant: "destructive" });
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-8">
      <Card className="w-full max-w-md shadow-card">
        <CardHeader className="text-center">
          <button onClick={() => navigate("/")} className="mx-auto mb-2 font-display text-2xl font-bold text-primary">
            Evently
          </button>
          <CardTitle className="font-display text-xl">{t("createAccount")}</CardTitle>
          <CardDescription>{t("createAccountDesc")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" onClick={() => handleSocialLogin("google")} disabled={loading} className="gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Google
            </Button>
            <Button variant="outline" onClick={() => handleSocialLogin("apple")} disabled={loading} className="gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              Apple
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-card px-2 text-muted-foreground">{t("orContinueWith")}</span></div>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">{t("fullName")}</Label>
              <div className="relative">
                <User className="absolute start-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="fullName" placeholder={t("fullNamePlaceholder")} value={fullName} onChange={(e) => setFullName(e.target.value)} className="ps-10" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("email")}</Label>
              <div className="relative">
                <Mail className="absolute start-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="email" type="email" placeholder={t("emailPlaceholder")} value={email} onChange={(e) => setEmail(e.target.value)} className="ps-10" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t("phoneNumber")}</Label>
              <div className="relative">
                <Phone className="absolute start-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="phone" type="tel" placeholder={t("phonePlaceholder")} value={phone} onChange={(e) => setPhone(e.target.value)} className="ps-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t("password")}</Label>
              <div className="relative">
                <Lock className="absolute start-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="ps-10 pe-10" required minLength={6} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute end-3 top-3 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>{t("accountType")}</Label>
              <RadioGroup value={accountType} onValueChange={(v) => setAccountType(v as "customer" | "provider")} className="flex gap-4">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="customer" id="customer" />
                  <Label htmlFor="customer" className="cursor-pointer">{t("customer")}</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="provider" id="provider" />
                  <Label htmlFor="provider" className="cursor-pointer">{t("serviceProvider")}</Label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? t("loading") : t("createAccount")}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            {t("haveAccount")}{" "}
            <Link to="/login" className="font-medium text-primary hover:underline">{t("signIn")}</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
