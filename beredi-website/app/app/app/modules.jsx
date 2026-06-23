"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ModulesPage() {
  const router = useRouter();
  const [moduleData, setModuleData] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("moduleData")) || {};
    setModuleData(stored);
  }, []);

  const isCompleted = (num) => moduleData["module" + num] === "completed";

  const isUnlocked = (num) => {
    if (num === 1) return true;
    if (num === 2) return isCompleted(1);
    if (num === 3) return isCompleted(2);
    if (num === 4) return isCompleted(3);
    if (num === 5) return isCompleted(4);
    if (num === 6) return isCompleted(5);
    if (num === 7) return isCompleted(6);
    if (num === 8) return isCompleted(7);
    if (num === 9) return isCompleted(8);
    if (num === 10) return isCompleted(9);
    if (num === 11) return isCompleted(10);
    return false;
  };

  const openModule = (num) => {
    if (!isUnlocked(num)) {
      alert("⚠️ Finish previous module first.");
      return;
    }

    localStorage.setItem("currentModule", "module" + num);

    const pages = {
      1: "/modules/module1tier1-1",
      2: "/modules/module1tier1-2",
      3: "/modules/module2tier1-1",
      4: "/modules/module2tier1-2",
      5: "/modules/module2tier1-3",
      6: "/modules/module2tier1-4",
      7: "/modules/module2tier2-1",
      8: "/modules/module2tier2-2",
      9: "/modules/module2tier2-3",
      10: "/modules/module2tier2-4",
      11: "/modules/module2tier2-5",
    };

    router.push(pages[num]);
  };

  const ModuleCard = ({ num, title }) => {
    const unlocked = isUnlocked(num);
    const completed = isCompleted(num);

    return (
  <div
    onClick={() => openModule(num)}
    className={`group flex justify-between items-center p-6 rounded-3xl border transition-all duration-300 shadow-sm
    ${
      unlocked
        ? "bg-white hover:shadow-2xl hover:-translate-y-1 cursor-pointer border-slate-200"
        : "bg-slate-200 opacity-50 cursor-not-allowed border-slate-300"
    }`}
  >

    <div>

      <h3 className="text-lg font-bold">
        {title}
      </h3>

      <p className="text-sm text-slate-500 mt-1">
        BEREDI Disaster Training Module
      </p>

    </div>

    <div className="flex items-center gap-3">

      {completed ? (
        <span className="bg-green-500 text-white text-xs px-4 py-2 rounded-full">
          Completed
        </span>
      ) : unlocked ? (
        <span className="bg-teal-100 text-teal-700 text-xs px-4 py-2 rounded-full">
          Unlocked
        </span>
      ) : (
        <span className="bg-slate-400 text-white text-xs px-4 py-2 rounded-full">
          Locked
        </span>
      )}

    </div>

  </div>
);
  };
return (
  <div className="min-h-screen bg-slate-50 text-slate-800">

    {/* HEADER */}
    <div className="bg-gradient-to-r from-teal-700 to-cyan-700 text-white px-8 py-10 shadow-lg">

      <h1 className="text-4xl font-extrabold">
        BEREDI Training Modules
      </h1>

      <p className="mt-3 text-white/80 max-w-2xl">
        Continue your disaster preparedness and response training journey.
      </p>

    </div>

    {/* CONTENT */}
    <div className="max-w-5xl mx-auto px-6 py-10">

      {/* MODULE 1 */}
      <div className="mb-10">

        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Module 1 — Disaster Preparedness
        </h2>

        <div className="space-y-4">
          <ModuleCard
            num={1}
            title="Tier 1.1 - Disaster Preparedness"
          />

          <ModuleCard
            num={2}
            title="Tier 1.2 - Disaster Response"
          />
        </div>

      </div>

      {/* MODULE 2 */}
      <div className="mb-10">

        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Module 2 — Response Training
        </h2>

        <div className="space-y-4">

          <ModuleCard
            num={3}
            title="Good Samaritan Response"
          />

          <ModuleCard
            num={4}
            title="Immediate Response"
          />

          <ModuleCard
            num={5}
            title="Emotional Care"
          />

          <ModuleCard
            num={6}
            title="Basic Lifesaving Skills"
          />

        </div>

      </div>

      {/* MODULE 2 TIER 2 */}
      <div>

        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Module 2 Tier 2
        </h2>

        <div className="space-y-4">

          <ModuleCard
            num={7}
            title="Church-Based Preparedness"
          />

          <ModuleCard
            num={8}
            title="Contingency Planning"
          />

          <ModuleCard
            num={9}
            title="Volunteer Teams"
          />

          <ModuleCard
            num={10}
            title="Capacity Building"
          />

          <ModuleCard
            num={11}
            title="Spiritual Leadership"
          />

        </div>

      </div>

    </div>

  </div>
);
}