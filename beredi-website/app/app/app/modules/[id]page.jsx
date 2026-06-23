"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const modules = {
  1: { title: "Disaster Preparedness", next: 2 },
  2: { title: "Disaster Response", next: 3 },
  3: { title: "Good Samaritan Response", next: 4 },
  4: { title: "Immediate Response", next: 5 },
  5: { title: "Emotional Care", next: 6 },
  6: { title: "Basic Lifesaving Skills", next: 7 },
  7: { title: "Church-Based Preparedness", next: 8 },
  8: { title: "Contingency Planning", next: 9 },
  9: { title: "Volunteer Teams", next: 10 },
  10: { title: "Capacity Building", next: 11 },
  11: { title: "Spiritual Leadership", next: null },
};

export default function ModulePage() {
  const { id } = useParams();
  const router = useRouter();
  const moduleId = Number(id);

  const module = modules[moduleId];

  const [moduleData, setModuleData] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("moduleData")) || {};
    setModuleData(stored);
  }, []);

  const markComplete = () => {
    const updated = {
      ...moduleData,
      ["module" + moduleId]: "completed",
    };

    localStorage.setItem("moduleData", JSON.stringify(updated));
    setModuleData(updated);
  };

  const goNext = () => {
    if (module?.next) {
      router.push(`/modules/${module.next}`);
    } else {
      alert("🎉 You completed all modules!");
      router.push("/dashboard");
    }
  };

  if (!module) {
    return <div className="p-10">Module not found</div>;
  }

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">
        Module {moduleId}: {module.title}
      </h1>

      <p className="mt-4 text-gray-600">
        This is your training content for {module.title}.
      </p>

      <div className="mt-8 flex gap-4">
        <button
          onClick={markComplete}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Mark as Complete
        </button>

        <button
          onClick={goNext}
          className="bg-teal-600 text-white px-4 py-2 rounded"
        >
          Next Module
        </button>
      </div>
    </div>

  );
}