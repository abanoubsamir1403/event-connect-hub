import { Star, MapPin } from "lucide-react";
import { Provider } from "@/data/mockData";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface ProviderCardProps {
  provider: Provider;
  index?: number;
}

const ProviderCard = ({ provider, index = 0 }: ProviderCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={() => navigate(`/provider/${provider.id}`)}
      className="group cursor-pointer overflow-hidden rounded-2xl bg-card shadow-card transition-all hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={provider.image}
          alt={provider.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {provider.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold text-secondary-foreground">
            Featured
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-foreground">{provider.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            <span className="text-sm font-semibold text-foreground">{provider.rating}</span>
            <span className="text-xs text-muted-foreground">({provider.reviewCount})</span>
          </div>
        </div>
        <p className="mb-2 text-xs text-muted-foreground">{provider.category}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span className="text-xs">{provider.location}</span>
          </div>
          <span className="text-sm font-semibold text-primary">{provider.price}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProviderCard;
