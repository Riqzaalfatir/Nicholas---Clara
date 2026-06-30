"use client";

import { useEffect, useState } from "react";

const IMAGES_TO_PRELOAD = [
  "/images/opening/Opening-Mobile.webp",
  "/images/opening/Opening-Dekstop.webp",

  "/images/hero/Aset-Heroo.webp",

  "/images/profile/Bg-Couple.webp",
  "/images/profile/Bg-CoupleD.webp",
  "/images/profile/Logo-nc.webp",

  "/images/brideroom/Bg-Brideroom.svg",
  "/images/brideroom/BrideroomD.webp",


  "/images/popup/TandaCeklisBg.svg",
  "/images/popup/TandaSeru.svg",
  "/images/popup/TandaTanya.svg"
];

export function usePreloader() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let count = 0;
    const total = IMAGES_TO_PRELOAD.length;

    IMAGES_TO_PRELOAD.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        count++;
        setProgress(Math.round((count / total) * 100));
        if (count === total) setLoaded(true);
      };
    });
  }, []);

  return { loaded, progress };
}