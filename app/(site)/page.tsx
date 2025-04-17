import { Expertise } from "@/components/Expertise";
import { HeroSection } from "@/components/HeroSection";
import TeamValues from "@/components/TeamValues";

export default function Home() {
  return (
    <main>
        <HeroSection/>
        <div id="expertise">


        <Expertise/>
          </div>
        <TeamValues/>
      </main> 
      
  );
}
