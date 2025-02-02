import Clients from "@/Components/Clients";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import Recentprojects from "@/Components/Recentprojects";
import { FloatingNav } from "@/Components/UI/Floating-navbar";
import { navItems } from "@/data";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center relative bg-black-100 overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero/>
        <Grid/>
        <Recentprojects/>
        <Clients/>
      </div>
    </main>
  );
}
