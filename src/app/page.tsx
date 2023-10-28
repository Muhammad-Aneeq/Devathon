import HeroSection from "@/conponents/HeroSection/HeroSection";
import Navbar from "@/conponents/Navbar/Navbar";
import PopularCourses from "@/conponents/PopularCourses/PopularCourses";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularCourses />
    </>
  );
}
