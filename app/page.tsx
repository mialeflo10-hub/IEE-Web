import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutCareer from "@/components/Aboutcarrer";
import StudyPlan from "@/components/StudyPlan";
import CareerField from "@/components/CarrerField";
import NewsEvents from "@/components/NewsEvents";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <NewsEvents />
      <AboutCareer />
      <StudyPlan />
      <CareerField />
    </>
  );
}
