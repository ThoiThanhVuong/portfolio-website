import { Moon, Sun } from "lucide-react";
import useTheme from "@/hooks/useTheme";

const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();
  
  return (
    <button 
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Chuyển giao diện tối" : "Chuyển giao diện sáng"}
      title={theme === "light" ? "Chuyển giao diện tối" : "Chuyển giao diện sáng"}
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
};

export default ThemeToggle;