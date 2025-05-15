import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex p-4 items-center justify-between mx-5">
      <h1 className=" font-extrabold text-xl text-amber-400">BrainRot</h1>
      <nav className="text-lg flex gap-3">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact Us</Link>
      </nav>
    </header>
  );
}
