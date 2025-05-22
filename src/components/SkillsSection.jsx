import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Code2,
  FileCode,
  GitBranch,
  Globe,
  Palette,
  PenTool,
  Terminal,
  Type,
  Video,
  FileText,
} from "lucide-react";

const skills = [
 
  {
    name: "HTML/CSS",
    level: 95,
    category: "programming",
    icon: <Type className="w-6 h-6" />,
    description: "Clean, semantic markup and modern CSS techniques",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "programming",
    icon: <Code2 className="w-6 h-6" />,
    description: "Modern ES6+ features and functional programming",
  },
  {
    name: "React",
    level: 90,
    category: "programming",
    icon: <FileCode className="w-6 h-6" />,
    description: "Component architecture and hooks",
  },
  {
    name: "Git & GitHub",
    level: 70,
    category: "programming",
    icon: <GitBranch className="w-6 h-6" />,
    description: "Version control and collaborative development",
  },
  {
    name: "GDScript",
    level: 80,
    category: "programming",
    icon: <Terminal className="w-6 h-6" />,
    description: "Game development and scripting",
  },


  {
    name: "Adobe Premiere Pro",
    level: 90,
    category: "Tools",
    icon: <Video className="w-6 h-6" />,
    description: "Video editing and post-production",
  },
  {
    name: "Figma",
    level: 90,
    category: "Tools",
    icon: <PenTool className="w-6 h-6" />,
    description: "UI/UX design and prototyping",
  },
  {
    name: "Adobe Photoshop",
    level: 90,
    category: "Tools",
    icon: <Palette className="w-6 h-6" />,
    description: "Image editing and digital art",
  },
  {
    name: "Microsoft Office",
    level: 80,
    category: "Tools",
    icon: <FileText className="w-6 h-6" />,
    description: "Document processing and productivity",
  },
];

const categories = ["all", "programming", "Tools"];

const SkillCard = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-card p-8 rounded-lg shadow-xs card-hover relative overflow-hidden">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-primary">{skill.icon}</div>
          <h3 className="font-semibold text-lg">{skill.name}</h3>
        </div>
        
   
        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-primary h-2 rounded-full"
          />
        </div>

 
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="absolute bottom-0 left-0 right-0 bg-primary/90 text-primary-foreground p-4 rounded-b-lg"
        >
          <p className="text-sm">{skill.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};