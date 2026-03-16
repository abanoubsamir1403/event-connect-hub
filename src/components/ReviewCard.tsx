import { Star } from "lucide-react";
import { Review } from "@/data/mockData";

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="rounded-xl border border-border bg-card p-4">
    <div className="mb-2 flex items-center justify-between">
      <span className="font-semibold text-foreground">{review.userName}</span>
      <span className="text-xs text-muted-foreground">{review.date}</span>
    </div>
    <div className="mb-2 flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < review.rating ? "fill-accent text-accent" : "text-border"}`}
        />
      ))}
    </div>
    <p className="text-sm text-muted-foreground">{review.comment}</p>
  </div>
);

export default ReviewCard;
