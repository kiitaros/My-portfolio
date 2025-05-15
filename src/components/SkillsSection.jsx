import { useState } from "react";
import { cn } from "@/lib/utils";
const skills = [
    
  //programming
{ name:"HTML/CSS", level:95, category:"programming"},
{ name:"JavaScript", level:90, category:"programming"},
{ name:"React", level:90, category:"programming"},
{ name: "Git & GitHub", level: 70, category: "programming"},
{ name: "GDScript", level: 80, category: "programming"},
  
   

  //  Tools
{ name: "Adobe Premiere Pro", level: 90, category: "Tools" },
{ name: "Figma", level: 90, category: "Tools" },
{ name: "Adobe Photoshop", level: 90, category: "Tools" },
{ name: "Adobe Creative Suite", level: 80, category: "Tools" },
{ name: "Microsoft Office", level: 80, category: "Tools" },
  

 

]

const categories = ["all", "programming", "Tools"];

export const SkillsSection = () => {
const[activeCategory, setActiveCategory] = useState("all")
const filteredSkills = skills.filter(
  (skills)=> activeCategory === "all" || skills.category === activeCategory
);
return(
    <section id="skills" 
    className="py-24 px-4 relative bg-secondery/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
               My <span className="text-primary">Skills</span>
            </h2>
            <div className="flex justify-center gap-4 mb-8">
              {categories.map((category, key)=>(
                <button key={key} 
                onClick={()=>setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
                  > 
                    {category}
                </button>
              ))}
              </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                     {filteredSkills.map((skill, key)=>(
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                              <h3 className="font-semibold text-lg">
                                  {skill.name}
                              </h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full  overflow-hidden"> 
                                  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                  style={{ width: skill.level + "%" }}
                                  /> 
                            </div>
                              <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground" >{skill.level}%</span>
                              </div>
                        </div>
                     ))}
                  </div>
        </div>
    </section>
);
}