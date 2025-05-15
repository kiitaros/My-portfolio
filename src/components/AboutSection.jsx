import { Code, Video, PenTool, Gamepad } from "lucide-react";
export const  AboutSection = () => {
return (
<section id="about" className="py-24 px-4 relative">
    <div className="container mx-auto  max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
        </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                         <h3 className="text-2xl font-semibold">
                            Creative Web Developer & Video Editor,Designer
                         </h3>
                            <p className="text-muted-foreground">
                                  I'm a Computer Science student who builds websites and designs videos, 
                                turning ideas into clear,
                                engaging experiences. I enjoy combining coding skills with creative vision to solve problems and tell stories visually.
                            </p>
                                <p className="text-muted-foreground"> 
                                    Whether I'm developing a responsive site or editing footage, 
                                    my goal is always simplicity and impact.
                                 </p>
                                       <div className="flex flex-col md:flex-row gap-4 justify-center">
                                                 <a href="cv" className="cosmic-button">
                                                    Get In Touch
                                                 </a>
                                                     <a href="cv" className="px-6 py-2 rounded-full border text-primary border-primary hover:bg-primary/10 transition-colors duration-300">
                                                        Download CV
                                                     </a>
                                       </div>
                      </div>

                            <div className="grid grid-cols-1 gap-6">
                                    <div className="gradient-border p-6 card-hover">
                                        <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-full bg-primary/10">
                                                    <Code className="h-6 w-6 text-primary"/>
                                                </div>
                                                        <div className="text-left">
                                                             <h4 className="font-semibold text-lg"> Web Development</h4> 
                                                             <p className="text-muted-foreground"> Creating responsive websites and web application with 
                                                                modern frameworks.
                                                             </p>    
                                                        </div>
                                        </div>
                                    </div>
                                    <div className="gradient-border p-6 card-hover">
                                          <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-full bg-primary/10">
                                                    <Video className="h-6 w-6 text-primary"/>
                                                </div>
                                                      <div className="text-left">
                                                             <h4 className="font-semibold text-lg">Video Editing </h4> 
                                                             <p className="text-muted-foreground">Cutting and polishing video content for social media and presentations.
                                                             </p>    
                                                        </div>
                                        </div>
                                    </div>
                                    <div className="gradient-border p-6 card-hover">
                                          <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-full bg-primary/10">
                                                    <PenTool className="h-6 w-6 text-primary"/>
                                                </div>
                                                      <div className="text-left">
                                                             <h4 className="font-semibold text-lg"> Design</h4> 
                                                             <p className="text-muted-foreground"> Creating logos, posters, and layouts that look great and communicate well.
                                                             </p>    
                                                        </div>
                                        </div>
                                    </div>

                                       <div className="gradient-border p-6 card-hover">
                                          <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-full bg-primary/10">
                                                    <Gamepad className="h-6 w-6 text-primary"/>
                                                </div>
                                                      <div className="text-left">
                                                             <h4 className="font-semibold text-lg"> Game Development</h4> 
                                                             <p className="text-muted-foreground"> Building fun games with graphics, sound, and interactive rules.
                                                             </p>    
                                                        </div>
                                        </div>
                                    </div>
                            </div>
              </div>
    </div>
</section>
);
}