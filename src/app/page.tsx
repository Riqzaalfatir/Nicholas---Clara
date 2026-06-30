"use client";

import { useState, useEffect } from "react";
import { usePreloader } from "@/hooks/UsePreloader";
import Opening from "@/components/popup/Opening";

import Hero from "@/components/sections/Hero";
import Profile from "@/components/sections/Profile";
import BrideGroom from "@/components/sections/BrideGroom";
import FotoTeks from "@/components/sections/FotoTeks";
import Gallery from "@/components/sections/Gallery";
import EventOrder from "@/components/sections/EventOrder";
import Rsvp from "@/components/sections/Rsvp";
import WeddingGift from "@/components/sections/WeddingGift";
import Wishes from "@/components/sections/Wishes";
import Thankyou from "@/components/sections/Thankyou";

import Header from "@/components/layout/Header";

export default function Home() {
  const [start, setStart] = useState<boolean>(false);
  const { progress } = usePreloader();

  useEffect(() => {
    if (!start) {
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [start]);

  return (
    <>
      <main className="block">
        <Header />
        <Hero start={start} />
        <Profile />
        <BrideGroom />
        <FotoTeks />
        <Gallery />
        <EventOrder />
        <Rsvp />
        <WeddingGift />
        <Wishes />
        <Thankyou />
      </main>
      {progress === 100 && !start && (
        <Opening setStart={setStart} namaTamu="Sela" />
      )}
    </>
  );
}