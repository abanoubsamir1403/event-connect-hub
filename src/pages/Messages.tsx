import AppLayout from "@/components/AppLayout";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Messages = () => {
  const { t } = useLanguage();
  return (
    <AppLayout>
      <div className="min-h-screen bg-background pb-20 md:pb-8">
        <div className="sticky top-0 z-30 border-b border-border bg-background/95 px-4 py-3 backdrop-blur-md md:top-[57px]">
          <div className="mx-auto max-w-6xl">
            <h1 className="font-display text-xl font-semibold text-foreground">{t("messages")}</h1>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <MessageCircle className="h-7 w-7 text-muted-foreground" />
          </div>
          <h2 className="mb-2 font-display text-lg font-semibold text-foreground">{t("noMessagesYet")}</h2>
          <p className="text-sm text-muted-foreground">{t("noMessagesDesc")}</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Messages;
