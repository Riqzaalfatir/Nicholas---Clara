"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeRight, fadeLeft } from "@/lib/animation";

const WeddingGift = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("7752700128");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="gift" className="bg-[#F2F1E8]">
      {/* Gambar dan judul */}
      <div className="relative w-full aspect-[390/255] lg:aspect-[1514/759] overflow-hidden">
        <Image
          src="/images/weddinggift/Couple-Gift.svg"
          alt="Wedding Gift"
          fill
          className="object-cover block lg:object-bottom pointer-events-none"
        />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute -bottom-[2.31vw] left-0 font-montreal font-regular text-[17.95vw] lg:text-[18vw] whitespace-nowrap text-[#F2F1E8] leading-none"
        >
          Wedding Gift
        </motion.h2>
      </div>

      {/* Konten */}
      <div className="w-[83.59vw] lg:w-[564px] mx-auto">
        <motion.hr
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="border-t-[1.5px] lg:border-t-[2px] border-[#191A2A] mt-[40px] lg:mt-[90px]"
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="font-montreal font-regular text-[3.08vw] lg:text-[18px] text-[#191A2A] mt-[22px] lg:mt-[38px]"
        >
          Your presence and prayers are the greatest blessing to us.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="font-montreal font-regular text-[3.08vw] lg:text-[18px] text-[#191A2A] mt-[22px] lg:mt-[35px] leading-[4.36vw] lg:leading-[25px]"
        >
          Should you wish to honor us with a gift, <br />
          please find the details below for your convenience.
        </motion.p>

        <motion.div 
        variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 3, ease: "easeOut" }}
        className="flex items-end justify-between mt-[28px] lg:mt-[52px]">
          <div
            className="leading-none"
          >
            <p className="font-montreal font-medium text-[3.08vw] lg:text-[18px] text-[#191A2A]">
              BCA
            </p>
            <p className="font-montreal font-medium text-[3.08vw] lg:text-[18px] text-[#191A2A] mt-[3px] lg:mt-[10px]">
              7752700128 a/n Nicholas Glenn
            </p>
          </div>

          <div
          >
            <button
              onClick={handleCopy}
              className="font-montreal font-medium text-[3.08vw] lg:text-[18px] text-[#191A2A] hover:text-black underline underline-offset-[5px] hover:underline-offset-[8px] active:scale-95 transition-all duration-300"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </motion.div>

        <motion.hr
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 3.5, ease: "easeOut" }}
          className="border-t-[1.5px] lg:border-t-[2px] border-[#191A2A] mt-[22px] lg:mt-[35px]"
        />
      </div>
    </section>
  );
};

export default WeddingGift;

