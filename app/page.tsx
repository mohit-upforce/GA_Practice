"use client";

import Image from "next/image";
import ReactGA from "react-ga4";

export default function Home() {

  ReactGA.initialize("G-0XWDJ8PFMH");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>This is Home Page</h1>
    </div>
  );
}
