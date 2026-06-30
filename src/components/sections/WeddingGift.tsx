"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeRight, fadeLeft } from "@/lib/animation";

const WeddingGift = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("123 555 2025");
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
          className="object-cover block lg:object-bottom"
        />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute -bottom-[2.31vw] left-0 font-montreal font-regular text-[17.95vw] lg:text-[18vw] whitespace-nowrap text-[#F2F1E8] leading-none"
        >
          Wedding Gift
        </motion.h2>
      </div>

      {/* Konten */}
      <div className="w-[83.59vw] lg:w-[564px] mx-auto">
        <motion.hr
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
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

        <div className="flex items-end justify-between mt-[28px] lg:mt-[52px]">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="leading-none"
          >
            <p className="font-montreal font-medium text-[3.08vw] lg:text-[18px] text-[#191A2A]">
              BCA
            </p>
            <p className="font-montreal font-medium text-[3.08vw] lg:text-[18px] text-[#191A2A] mt-[3px] lg:mt-[10px]">
              123 555 2025 a/n Provite
            </p>
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          >
            <button
              onClick={handleCopy}
              className="font-montreal font-medium text-[3.08vw] lg:text-[18px] text-[#191A2A] underline underline-offset-[5px]"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </motion.div>
        </div>

        <motion.hr
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="border-t-[1.5px] lg:border-t-[2px] border-[#191A2A] mt-[22px] lg:mt-[35px]"
        />
      </div>
    </section>
  );
};

export default WeddingGift;

// SEBELUM DI VW KAN
// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const WeddingGift = () => {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText("123 555 2025");
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <section className="bg-[#F2F1E8]">

//         {/* Gambar dan judul */}
//         <div className="relative w-full h-[255px] lg:aspect-[1514/759] overflow-hidden">
//             <Image
//               src="/images/weddinggift/Couple-Gift.webp"
//               alt="Wedding Gift"
//               fill
//               className="object-cover block lg:object-bottom"/>
//               <h2 className="absolute -bottom-[9px] left-0 font-montreal font-regular text-[70px] lg:text-[275px] text-[#F2F1E8] leading-none ">Wedding Gift</h2>
//         </div>

//         {/* Konten */}
//         <div className="w-[326px] lg:w-[564px] mx-auto">
//             <hr className="border-t border-[#191A2A] mt-[38px] lg:mt-[87px]" />

//             <p className="font-montreal font-regular text-[12px] lg:text-[18px] text-[#191A2A] mt-[22px] lg:mt-[38px]">Your presence and prayers are the greatest blessing to us.</p>

//             <p className="font-montreal font-regular text-[12px] lg:text-[18px] text-[#191A2A] mt-[22px] lg:mt-[35px] leading-[17px] lg:leading-[25px]">Should you wish to honor us with a gift, <br />
//             please find the details below for your convenience.</p>

//             <div className="flex items-end justify-between mt-[28px] lg:mt-[52px]">
//                 <div className="leading-none">
//                     <p className="font-montreal font-medium text-[12px] lg:text-[18px] text-[#191A2A]">BCA</p>
//                     <p className="font-montreal font-medium text-[12px] lg:text-[18px] text-[#191A2A] mt-1.5 lg:mt-[10px]">123 555 2025 a/n Provite</p>
//                 </div>
//                 <button onClick={handleCopy} className="font-montreal font-medium text-[12px] lg:text-[18px] text-[#191A2A] underline underline-offset-[5px]">{copied ? "Copied!" : "Copy"}</button>
//             </div>

//             <hr className="border-t border-[#191A2A] mt-[20px] lg:mt-[25px]" />
//         </div>
//     </section>
//   );
// };

// export default WeddingGift;
