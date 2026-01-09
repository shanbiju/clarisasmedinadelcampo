import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="flex items-center gap-1.5 px-2 py-1.5 text-sm rounded-md hover:bg-secondary transition-colors"
      aria-label={language === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <Globe size={16} />
      <span className="font-medium uppercase">{language}</span>
    </button>
  );
};

export default LanguageSwitcher;
