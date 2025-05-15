import React from "react";

import Navbar from "../component/navbar";

export default function AboutPage() {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Navbar />

      <main className="flex flex-col items-center justify-center mt-20 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold max-w-4xl leading-snug mb-1">
          About BrainRot
        </h2>
        <div className="flex items-center">
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed ">
            BrainRot is your go-to platform for bold, creative, and mind-bending
            content. We're here to spark inspiration, challenge norms, and
            deliver experiences that stick with you. With a passion for
            innovation, our team curates unique ideas that resonate with
            dreamers and doers alike.
          </p>
        </div>
      </main>
    </div>
  );
}
