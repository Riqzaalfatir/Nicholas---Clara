"use client";

import { useEffect } from "react";

type Props = {
  progress: number;
  onDone?: () => void;
};

export default function LoadingScreen({ progress, onDone }: Props) {
  const fading = progress === 100;

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => onDone?.(), 600);
      return () => clearTimeout(timer);
    }
  }, [progress, onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#F2F1E8]"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 500ms ease",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <p className="font-helvetica text-[12px] text-[#191A2A]/60 tracking-widest">
          The Wedding of
        </p>
        <h1 className="font-montreal text-[40px] text-[#191A2A] mt-2 leading-none">
          Nicholas & Clara
        </h1>
        <p className="font-helvetica text-[12px] text-[#191A2A]/60 mt-5">
          29 AUGUST 2026
        </p>

        {/* Progress bar */}
        <div
          className="mt-10 rounded-full overflow-hidden"
          style={{
            width: 180,
            height: 1,
            backgroundColor: "rgba(25,26,42,0.15)",
          }}
        >
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              backgroundColor: "#191A2A",
            }}
          />
        </div>
        <p className="font-helvetica text-[10px] text-[#191A2A]/40 mt-2">
          {progress}%
        </p>
      </div>
    </div>
  );
}