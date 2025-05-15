import React, { useEffect, useState } from "react";
import icon from "./sahur.png";
import Navbar from "../component/navbar";

export default function HomePage() {
  const [typedText, setTypedText] = useState("");
  const fullText =
    "tung-tung tung sahur anomali mengerikan yang hanya keluar pada sahur konon kata nya ";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Navbar />

      <main className="flex items-center justify-center mt-20 px-4 text-center">
        <img src={icon} alt="" srcset="" />
        <p className="text-3xl md:text-5xl font-normal max-w-4xl leading-snug">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>
      </main>
    </div>
  );
}
