"use client";

import Landing from "./sections/landing";
import { ShootingPetr } from "@/components/ShootingPetr";
import About from "./sections/about";

export default function HomeContent() {
  return (
    <>
      <ShootingPetr />
      <div className="relative min-h-[220vh] flex-1">
        <Landing />
        <About />
      </div>
    </>
  );
}
