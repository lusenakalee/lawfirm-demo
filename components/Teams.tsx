import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { getAllAuthors } from "@/sanity/lib/team/getAllAuthors";

export  async function Teams() {
      const authors = await getAllAuthors();
    




  return <AnimatedTestimonials authors={authors} />;
}
