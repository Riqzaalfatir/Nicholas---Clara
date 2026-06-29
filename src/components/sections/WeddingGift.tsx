"use client";

import { useState } from "react";
import Image from "next/image";

const WeddingGift = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("123 555 2025");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-[#F2F1E8]">

        {/* Gambar dan judul */}
        <div className="relative w-full h-[255px] overflow-hidden">
            <Image 
              src="/images/weddinggift/Couple-Gift.webp"
              alt="Wedding Gift"
              fill
              className="object-cover block"/>
              <h2 className="absolute -bottom-[9px] left-0 font-montreal font-regular text-[70px] text-[#F2F1E8] leading-none ">Wedding Gift</h2>
        </div>

        {/* Konten */}
        <div className="w-[326px] mx-auto">
            <hr className="border-t border-[#191A2A] mt-[35px]" />

            <p className="font-montreal font-regular text-[12px] text-[#191A2A] mt-[22px]">Your presence and prayers are the greatest blessing to us.</p>

            <p className="font-montreal font-regular text-[12px] text-[#191A2A] mt-[22px] leading-[17px]">Should you wish to honor us with a gift, <br />
            please find the details below for your convenience.</p>

            <div className="flex items-end justify-between mt-[28px]">
                <div className="leading-none">
                    <p className="font-montreal font-medium text-[12px] text-[#191A2A]">BCA</p>
                    <p className="font-montreal font-medium text-[12px] text-[#191A2A] mt-1.5">123 555 2025 a/n Provite</p>
                </div>
                <button onClick={handleCopy} className="font-montreal font-medium text-[12px] text-[#191A2A] underline underline-offset-[5px]">{copied ? "Copied!" : "Copy"}</button>
            </div>

            <hr className="border-t border-[#191A2A] mt-[20px]" />
        </div>
    </section>
  );
};

export default WeddingGift;