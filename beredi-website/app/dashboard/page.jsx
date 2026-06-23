"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function DashboardPage() {

  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");

  const [moduleData, setModuleData] = useState({});

  useEffect(() => {

    const user = auth.currentUser;

    if (user) {
      setUserEmail(user.email);
    } else {
      router.push("/login");
    }

    const savedModules =
      JSON.parse(localStorage.getItem("moduleData")) || {};

    setModuleData(savedModules);

  }, []);

  // LOGOUT
  const logout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  // CONTINUE MODULE
  const continueModule = () => {

    let currentModule =
      localStorage.getItem("currentModule");

    if (!currentModule) {
      router.push("/modules/module1");
      return;
    }

    router.push(currentModule);
  };

  // CERTIFICATE CHECK
  const allCompleted =
    moduleData["module1"] === "completed" &&
    moduleData["module2"] === "completed" &&
    moduleData["module3"] === "completed" &&
    moduleData["module4"] === "completed";

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center p-6">

        <div>
          <h1 className="text-3xl font-bold">
            BEREDI Dashboard
          </h1>



          <p className="text-slate-300 mt-1">
            {userEmail}
          </p>

          
        </div>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl"
        >
          Logout
        </button>

      </div>

      {/* WELCOME CARD */}
      <div className="px-6">

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">

          <h2 className="text-2xl font-bold">
            Welcome Back 👋
          </h2>

          <p className="text-slate-300 mt-2">
            Continue building disaster-ready communities
            through BEREDI training modules.
          </p>

        </div>

      </div>

      {/* DASHBOARD GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

        {/* TRAINING MATERIALS */}
        <div
          onClick={() => router.push("/modules")}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-6 cursor-pointer hover:scale-105 transition duration-300"
        >

          <div className="text-5xl mb-4">
            📚
          </div>

          <h2 className="text-2xl font-bold">
            Training Modules
          </h2>

          <p className="text-slate-300 mt-2">
            Open all BEREDI training lessons.
          </p>

        </div>

        {/* CONTINUE TRAINING */}
        <div
          onClick={continueModule}
          className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl p-6 cursor-pointer hover:scale-105 transition duration-300"
        >

          <div className="text-5xl mb-4">
            ▶️
          </div>

          <h2 className="text-2xl font-bold">
            Continue Training
          </h2>

          <p className="mt-2 text-white/90">
            Resume where you left off.
          </p>

        </div>

        {/* QUIZ RECORDS */}
        <div
          className="bg-white/10 backdrop-blur-md rounded-3xl p-6" >

          <div className="text-5xl mb-4">
            📋
          </div>

          <h2 className="text-2xl font-bold">
            Quiz Records
          </h2>

          <div className="mt-4 space-y-2 text-slate-300">

            <p>
              Module 1:
              {moduleData["module1"] === "completed"
                ? " ✅ Completed"
                : " 🔒 Locked"}
            </p>

            <p>
              Module 2:
              {moduleData["module2"] === "completed"
                ? " ✅ Completed"
                : " 🔒 Locked"}
            </p>

            <p>
              Module 3:
              {moduleData["module3"] === "completed"
                ? " ✅ Completed"
                : " 🔒 Locked"}
            </p>

            <p>
              Module 4:
              {moduleData["module4"] === "completed"
                ? " ✅ Completed"
                : " 🔒 Locked"}
            </p>

          </div>

        </div>

        {/* COMMITMENT FORM */}
        <div
          onClick={() => router.push("/commitment")}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-6 cursor-pointer hover:scale-105 transition duration-300"
        >

          <div className="text-5xl mb-4">
            📝
          </div>

          <h2 className="text-2xl font-bold">
            Commitment Form
          </h2>

          <p className="text-slate-300 mt-2">
            Submit your participant commitment.
          </p>

        </div>

        {/* CERTIFICATE */}
        <div
          onClick={() => {

            if (allCompleted) {
              router.push("/certificate");
            } else {
              alert("Complete all modules first.");
            }

          }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-6 cursor-pointer hover:scale-105 transition duration-300"
        >

          <div className="text-5xl mb-4">
            📄
          </div>

          <h2 className="text-2xl font-bold">
            Certificate
          </h2>

          <p className="text-slate-300 mt-2">

            {allCompleted
              ? "Download Certificate 🎉"
              : "Locked 🔒"}

          </p>

        </div>

      </div>

    </div>
  );
}