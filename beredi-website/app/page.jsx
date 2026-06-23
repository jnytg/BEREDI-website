"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <div>
            <h1 className="text-2xl font-bold tracking-wide text-teal-700">
              BEREDI
            </h1>
            <p className="text-xs text-slate-500">
              Disaster Risk Reduction & Response
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-teal-600 transition">Home</a>
            <a href="#about" className="hover:text-teal-600 transition">About</a>
            <a href="#training" className="hover:text-teal-600 transition">Training</a>
            <a href="#partners" className="hover:text-teal-600 transition">Partners</a>
            <a href="#contact" className="hover:text-teal-600 transition">Contact</a>
          </nav>

        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative overflow-hidden pt-36 pb-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-cyan-50 to-white" />

        <div className="max-w-7xl mx-auto relative grid lg:grid-cols-2 gap-14 items-center">
          {/* your content stays exactly the same */}
        </div>
      </section>

    </div>
  );
}