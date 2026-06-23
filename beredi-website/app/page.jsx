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

          {/* NAVIGATION */}
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

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white shadow-md border border-slate-200 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-slate-600">
                Empowering Churches Through Disaster Preparedness
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
              Building Safer Communities Through
              <span className="text-teal-600"> Preparedness </span>
              & Response
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              BEREDI helps churches and communities prepare,
              respond, recover, and prevent disasters through
              accessible training and coordinated humanitarian response.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mt-14">
              <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-100">
                <h2 className="text-3xl font-bold text-teal-600">Readiness</h2>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-100">
                <h2 className="text-3xl font-bold text-teal-600">Response</h2>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-100">
                <h2 className="text-3xl font-bold text-teal-600">Recovery</h2>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* TRAINING SECTION */}
      <section id="training" className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            BEREDI Training Programs
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Structured learning designed to help churches and communities become more resilient.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            {[
              { title: "Readiness", desc: "Preparation and awareness training.", link: "/modules/module1" },
              { title: "Response", desc: "Emergency response coordination.", link: "/modules/module2" },
              { title: "Recovery", desc: "Community rebuilding support systems.", link: "/modules/module3" },
              { title: "Mitigation", desc: "Disaster prevention and risk reduction.", link: "/modules/module4" },
            ].map((item) => (
              <Link
                href={item.link}
                key={item.title}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-7 hover:-translate-y-2 hover:shadow-2xl transition duration-300 block"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex items-center justify-center text-2xl mx-auto mb-6">
                  ✓
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm">
                  {item.desc}
                </p>
              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-slate-100 text-center">
        <h2 className="text-4xl font-bold">About BEREDI</h2>
        <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
          BEREDI empowers churches and communities through disaster preparedness and response training.
        </p>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-24 px-6 bg-slate-50 text-center">
        <h2 className="text-4xl font-bold">Our Partners</h2>
        <p className="mt-6 text-slate-600">
          Working together with communities and organizations.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="mt-6 text-slate-600">
          Reach out for partnerships and training opportunities.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-teal-700 to-cyan-700 text-white text-center">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-5xl font-bold">
            Together We Can Build Disaster-Ready Communities
          </h2>

          <p className="mt-6 text-lg text-white/90">
            Join BEREDI in empowering churches and communities.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <button
              onClick={() => window.location.href = "/register"}
              className="bg-white text-teal-700 px-8 py-4 rounded-2xl font-bold"
            >
              Register Now
            </button>

            <button
              onClick={() => window.location.href = "/login"}
              className="border border-white/60 px-8 py-4 rounded-2xl font-bold"
            >
              Log in Back to Dashboard
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}