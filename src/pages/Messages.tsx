import BottomNav from "@/components/BottomNav";
import { MessageCircle } from "lucide-react";

const Messages = () => (
  <div className="min-h-screen bg-background pb-20">
    <div className="sticky top-0 z-30 border-b border-border bg-background/95 px-4 py-3 backdrop-blur-md">
      <div className="mx-auto max-w-lg">
        <h1 className="font-display text-xl font-semibold text-foreground">Messages</h1>
      </div>
    </div>
    <div className="mx-auto flex max-w-lg flex-col items-center justify-center px-4 py-24 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <MessageCircle className="h-7 w-7 text-muted-foreground" />
      </div>
      <h2 className="mb-2 font-display text-lg font-semibold text-foreground">No messages yet</h2>
      <p className="text-sm text-muted-foreground">
        Start a conversation with a service provider
      </p>
    </div>
    <BottomNav />
  </div>
);

export default Messages;
