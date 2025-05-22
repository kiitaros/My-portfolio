import {Moon, Sun} from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils'; 

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => { 

        const storedTheme = localStorage.getItem("theme")
        if (storedTheme) {
            if (storedTheme === "dark") {
                document.documentElement.classList.add("dark"); 
                setIsDarkMode(true);
            } else {
             
              setIsDarkMode(false);
            }
        }
      
      }, []);
    const toggleTheme = () => {
        if (isDarkMode) {
          document.documentElement.classList.remove("dark"); 
         
          setIsDarkMode(false);
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark"); 
          setIsDarkMode(true);
        }
      };

    return(
<button onClick={toggleTheme} className={cn(
    "p-2 rounded-full transition-colors duration-300",
    "focus:outline-none",
    "hidden md:block" 
)}>
     {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" /> 
     ) : ( 
     <Moon className="h-6 w-6 text-blue-900" />
     )} 
     </button>
    );
};