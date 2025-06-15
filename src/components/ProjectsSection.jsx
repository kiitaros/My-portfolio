import { Download, ExternalLinkIcon, GithubIcon, ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";

const isDownloadableFile = (url) => {
    if (!url || url === "#") return false;
    const downloadableExtensions = ['.pdf', '.jpg', '.jpeg', '.png', '.doc', '.docx', '.zip'];
    return downloadableExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

export const projects = [
{
    id: 1,
    title:  "My web portfolio",
    description: "A responsive website showcasing my projects with clean design and intuitive navigation.",
    image: "/projects/protfolio.png",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    projectURL:"#hero",
    githubURL: "https://github.com/kiitaros/My-portfolio",
 
},

{
    id: 2,
    title:  "Brand identity: Tastify",
    description: "A restaurant's visual identity, featuring logo design, color palette, and style guidelines.",
    image: "/projects/tastify.png",
    tags: ["photoshop", "illustrator"],
    projectURL:"/projects/Tastify.pdf",
},

{
    id: 3,
    title:  "Brand identity: Verve",
    description: "A coffee shop's visual identity, featuring logo design, color palette, and style guidelines.",
    image: "/projects/verve.png",
    tags: ["photoshop", "illustrator"],
    projectURL:"/projects/verve.pdf",
},

{
    id: 4,
    title: "Video game",
    description: "A passion project featuring interactive gameplay, custom graphics, and engaging sound.",
    image: "/projects/game.png",
    tags: ["Godot", "GDScript"],
    projectURL:"../web-games/index.html",
  

},
{
    id: 5,
    title: "Game Hub",
    description: "A minimalist platform that aggregates video games and their Metacritic scores, offering sortable filters and an intuitive layout for quick comparison and discovery.",
    image: "/projects/game-hub.png",
    tags: ["React", "Typescript", "Chakra UI"],
    projectURL:"https://game-hub-lac-five.vercel.app/",
  

},

]
export const ProjectsSection = () => {
    const [loadedProjects, setLoadedProjects] = useState({});

    useEffect(() => {
     
        projects.forEach(project => {
            const img = new Image();
            img.src = project.image;
            img.onload = () => {
                setLoadedProjects(prev => ({
                    ...prev,
                    [project.id]: true
                }));
            };
        });
    }, []);
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-w5xl">
                <h2 className="text-3xl md:text-4xl font-bold  mb-4 text-center"> Featured <span className="text-primary"> Projects </span></h2>
                   <p className="text-center text-muted-foregrounf mb-12 max-w-2xl mx-auto">
                     Here are some of my recent projects. Each project was carefully
                     crafted with attention to detail, performance, and user experience.
                   </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, key) =>(
                                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                                         <div className="h-48 overflow-hidden">
                                             <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                         </div>
                                                  <div className="p-6">
                                                         <div className="flex flex-wrap gap-2 mb-4">
                                                            {project.tags.map((tag, index)=>(
                                                                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                                                        {tag}
                                                                    </span>
                                                            ))}
                                                         </div>
                                               
                                                                 <h3 className="text-xl font-semibold mb-1">
                                                                    {project.title}
                                                                 </h3>
                                                                     <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                                                         <div className="flex justify-between items-center ">
                                                                               <div className="flex space-x-3">
                                                                                            <a 
                                                                                               href={project.projectURL}
                                                                                               target="_blank"
                                                                                               rel="noopener noreferrer"
                                                                                               className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                                                                <ExternalLinkIcon size={20} />
                                                                                            </a>
                                                                                            {isDownloadableFile(project.projectURL) && loadedProjects[project.id] && (
                                                                                                <a href={project.projectURL} 
                                                                                                   target="_blank" 
                                                                                                   download={project.projectURL.split('/').pop()}
                                                                                                   className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                                                                    <Download size={20} />
                                                                                                </a>
                                                                                            )}
                                                                               </div>
                                                                               </div>
                                                                         </div>
                                 
                                 </div>
                            ))}
                          </div>
                                    <div className="text-center mt-12">
                                          <a href="https://github.com/kiitaros" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                                             Check My Github <ArrowRightIcon size={16} />
                                          </a>
                                    </div>
            </div>
        </section>
    );
}