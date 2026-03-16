import { categories } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

const CategoryChips = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => navigate(`/category/${cat.id}`)}
          className="flex flex-shrink-0 flex-col items-center gap-1.5 rounded-2xl bg-muted/60 px-4 py-3 transition-all hover:bg-primary/10 hover:shadow-card active:scale-95"
        >
          <span className="text-2xl">{cat.icon}</span>
          <span className="whitespace-nowrap text-xs font-medium text-foreground">{cat.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryChips;
