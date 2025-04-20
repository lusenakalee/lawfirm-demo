import { Expertise } from "@/components/Expertise";
import { HeroSection } from "@/components/HeroSection";
import TeamValues from "@/components/TeamValues";

export default function Home() {
  return (
    <main className="p-4">
        <HeroSection/>
        <div id="expertise">


        <Expertise/>
          </div>
        <TeamValues/>
      </main> 
      
  );
}
