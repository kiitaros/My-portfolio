import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

export const StarBackground = () => {  
const [stars, setStars] = useState([]);
const [meteors,setMeteors ] = useState([]);
const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
    const checkDarkMode = () => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    checkDarkMode();

    // Set up observer for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    if (isDarkMode) {
        generateStars();
        generateMeteors();
        
        const interval = setInterval(() => {
            generateMeteors();
        }, 3000); 

        const handleResize = () => {
            generateStars();
            generateMeteors();
        };
        
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearInterval(interval);
            observer.disconnect();
        };
    }

    return () => {
        observer.disconnect();
    };
}, [isDarkMode]);

const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000
);
  const newStars = [];
  for (let i = 0; i < numberOfStars; i++) {
   newStars.push({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.5,
    animationDuration: Math.random() * 4 + 2,
})
  }
    setStars(newStars);
};

const generateMeteors = () => {
    const numberOfMeteors = 3;

  const newMeteors = [];
  for (let i = 0; i < numberOfMeteors; i++) {
    newMeteors.push({
    id: i,
    size: Math.random() * 1.5 + 0.5,
    x: Math.random() * 100,
    y: Math.random() * 30,
    delay: 0, 
    animationDuration: Math.random() * 2 + 2,
    length: Math.random() * 100 + 50,
})
  }
    setMeteors(newMeteors);
};

 return ( <div className={cn(
    "fixed inset-0 overflow-hidden pointer-events-none z-0",
    !isDarkMode && "hidden"
)}>
    {stars.map((star)=> (
        <div key={star.id} className="star animate-pulse-subtle" style={{
            width: star.size + "px",
            height:star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
        
        }}
        />
    ))}

        {meteors.map((meteor)=> (
        <div key={meteor.id} className="meteor animate-meteor" style={{
            width: meteor.length + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
        }}
        />
    ))}
 </div>
 );
 }