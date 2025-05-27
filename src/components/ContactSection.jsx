import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram, MessageSquare, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
const {toast} = useToast();
const [isSubmitting, setIsSubmitting] = useState(false);
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.target;
  const emailInput = form.elements.email;
  form.elements._replyto.value = emailInput.value;

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error("Failed to submit");

    toast({
      title: "Message Sent!",
      description: "Thank you for your message, we will contact you soon.",
    });
    form.reset();
  } catch (error) {
    toast({
      title: "Error",
      description: "An error occurred while sending, please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to new ideas and opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information - Left Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary"/> 
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:ahmedborah1@outlook.com" className="text-muted-foreground hover:text-primary transition-colors">
                   ahmad8tech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary"/> 
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+201555099084" className="text-muted-foreground hover:text-primary transition-colors">
                    +20 155 509 9084
                  </a>
                </div>
              </div>

           
            </div>

            <div className="pt-6 mt-4">
              <h4 className="font-medium mb-4 text-center">Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Linkedin />
                </a>
                <a href="https://x.com/ahmad8tech" target="_blank" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/ahmad8tech/?hl=ar" target="_blank" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Instagram />
                </a>
              </div>
            </div> 
          </div>

          {/* Contact Form - Right Column */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6"
            action="https://formspree.io/f/mrbqngyg"
            method="POST"
            onSubmit={handleSubmit}
            >
                 <input type="text" name="_gotcha" style={{ display: "none" }} />
                 <input type="hidden" name="_replyto" value="" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ahmed Ali..."
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder=". . .@gmail.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  required 
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2"
                     
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
               <Send size={16}  /> 
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}