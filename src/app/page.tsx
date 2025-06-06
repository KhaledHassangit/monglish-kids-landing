"use client";
// importing React components
import dynamic from "next/dynamic";
// importing Components
const LandingPage = dynamic(() => import("./(pages)/landingPage/page"));

export default function Home() {
  return (
    <>
      <LandingPage />
    </>
  );
}
