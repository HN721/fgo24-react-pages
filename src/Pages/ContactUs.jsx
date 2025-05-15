import React from "react";
import Navbar from "../component/navbar";

export default function ContactUs() {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Navbar />

      <form action="">
        {" "}
        <main className="flex flex-col items-center justify-center mt-20 px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold max-w-4xl leading-snug mb-6 animate-slide-in-right">
            Contact Us
          </h2>
          <div className="flex flex-col items-center">
            <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-6 animate-slide-in-right animate-delay-200">
              Got questions or ideas? Reach out to the BrainRot team! We're
              excited to connect with creators, dreamers, and innovators. Drop
              us a message or find us at the contacts below.
            </p>
            <div className="flex flex-col gap-4 w-full max-w-md animate-slide-in-right animate-delay-400">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="w-full p-3 rounded-md bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-amber-400 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-amber-400 transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                name="text"
                className="w-full p-3 rounded-md bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-amber-400 transition-colors"
              ></textarea>
              <button
                className="w-full p-3 rounded-md bg-amber-400 text-slate-900 font-bold hover:bg-amber-500 transition-colors"
                onClick={() => alert("Message sent! (Simulated)")}
              >
                Send Message
              </button>
            </div>
            <div className="mt-8 text-lg animate-slide-in-right animate-delay-600">
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@brainrot.com"
                  className="hover:text-amber-400"
                >
                  hello@brainrot.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+1234567890" className="hover:text-amber-400">
                  +62 (856) 567-890
                </a>
              </p>
              <p>
                Follow us:{" "}
                <a
                  href="https://x.com/brainrot"
                  className="hover:text-amber-400"
                >
                  @BrainRot
                </a>
              </p>
            </div>
          </div>
        </main>
      </form>
    </div>
  );
}
