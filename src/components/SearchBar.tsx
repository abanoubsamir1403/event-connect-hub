import { Search } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
  const { t } = useLanguage();
  return (
    <div className="relative">
      <Search className="absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        placeholder={placeholder || t("searchPlaceholder")}
        onChange={(e) => onSearch?.(e.target.value)}
        className="w-full rounded-full border border-border bg-muted/50 py-3 ps-11 pe-4 text-sm font-body placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
};

export default SearchBar;
