import React from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeRight, fadeLeft } from "@/lib/animation";

const BrideGroom = () => {
  return (
    <section className="relative w-full overflow-hidden aspect-[390/592] lg:aspect-[1514/2300]">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/images/brideroom/BrideroomD.webp"
        />
        <img
          src="/images/brideroom/Bg-Brideroomm.webp"
          alt="Nicholas & Clara"
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        />
      </picture>

      <div className="absolute top-[21.28vw] lg:top-[220px] left-0 w-full px-[8.21vw] lg:px-[160px] flex justify-between">
        {/* KIRI */}
        <div className="flex flex-col leading-none">
          <motion.p
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="text-[2.56vw] lg:text-[18px] font-helvetica text-white font-medium"
          >
            THE GROOM
          </motion.p>
          <motion.p
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="text-[5.64vw] lg:text-[68px] font-helvetica text-white font-regular mt-[0.51vw] lg:mt-[0px]"
          >
            Nicholas Glenn
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="flex flex-col mt-[6.67vw] lg:mt-[40px]"
          >
            <p className="font-helvetica font-medium text-[2.31vw] lg:text-[16px] text-white">
              The Son Of
            </p>
            <p className="font-helvetica font-medium text-[2.56vw] lg:text-[24px] text-white mt-[1.54vw] lg:mt-[10px]">
              Mr. Hengky Bunnarto &
            </p>
            <p className="font-helvetica font-medium text-[2.56vw] lg:text-[24px] text-white mt-[0.77vw] lg:mt-[5px]">
              Mrs. Nancy Veronika Koswara
            </p>
          </motion.div>
        </div>

        {/* KANAN */}
        <div className="flex flex-col items-end text-right leading-none">
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="text-[2.56vw] lg:text-[18px] font-helvetica text-white font-medium"
          >
            THE BRIDE
          </motion.p>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="text-[5.64vw] lg:text-[68px] font-helvetica text-white font-regular mt-[0.51vw] lg:mt-[0px]"
          >
            Clara Claudia
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="flex flex-col items-end mt-[6.67vw] lg:mt-[40px]"
          >
            <p className="font-helvetica font-medium text-[2.31vw] lg:text-[16px] text-white">
              The Daughter Of
            </p>
            <p className="font-helvetica font-medium text-[2.56vw] lg:text-[24px] text-white mt-[1.54vw] lg:mt-[10px]">
              Mr. Law Saw Sin &
            </p>
            <p className="font-helvetica font-medium text-[2.56vw] lg:text-[24px] text-white mt-[0.77vw] lg:mt-[5px]">
              Mrs. Lim Giok Hwat
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrideGroom;

// SEBELUM DI VW KAN
// import React from "react";

// const BrideGroom = () => {
//   return (
//     <section className="relative w-full h-[592px] lg:aspect-[1514/2300]">
//       <img
//         src="/images/brideroom/Bg-Brideroom.svg"
//         alt="Nicholas & Clara"
//         className="w-full h-full object-cover object-top block lg:hidden"
//       />
//       <img
//         src="/images/brideroom/BrideroomD.webp"
//         alt="Nicholas & Clara"
//         className="absolute inset-0 w-full h-full object-cover object-top hidden lg:block"
//       />

//       <div className="absolute top-[83px] lg:top-[220px] left-0 w-full px-[32px] lg:px-[160px] flex justify-between">
//         {/* KIRI */}
//         <div className="flex flex-col leading-none">
//           <p className="text-[10px] lg:text-[18px] font-helvetica text-white font-medium">
//             THE GROOM
//           </p>
//           <p className="text-[22px] lg:text-[68px] font-helvetica text-white font-regular mt-[2px] lg:mt-[0px]">
//             Nicholas Glenn
//           </p>

//           <div className="flex flex-col mt-[26px] lg:mt-[40px]">
//             <p className="font-helvetica font-medium text-[9px] lg:text-[16px] text-white">
//               The Son Of
//             </p>
//             <p className="font-helvetica font-medium text-[10px] lg:text-[24px] text-white mt-[6px] lg:mt-[10px]">
//               Mr. Hengky Bunnarto &
//             </p>
//             <p className="font-helvetica font-medium text-[10px] lg:text-[24px] text-white mt-[3px] lg:mt-[5px]">
//               Mrs. Nancy Veronika Koswara
//             </p>
//           </div>
//         </div>

//         {/* KANAN */}
//         <div className="flex flex-col items-end text-right leading-none">
//           <p className="text-[10px] lg:text-[18px] font-helvetica text-white font-medium">
//             THE BRIDE
//           </p>
//           <p className="text-[22px] lg:text-[68px] font-helvetica text-white font-regular mt-[2px] lg:mt-[0px]">
//             Clara Claudia
//           </p>

//           <div className="flex flex-col mt-[26px] lg:mt-[40px]">
//             <p className="font-helvetica font-medium text-[9px] lg:text-[16px] text-white">
//               The Daughter Of
//             </p>
//             <p className="font-helvetica font-medium text-[10px] lg:text-[24px] text-white mt-[6px] lg:mt-[10px]">
//               Mr. Law Saw Sin &
//             </p>
//             <p className="font-helvetica font-medium text-[10px] lg:text-[24px] text-white mt-[3px] lg:mt-[5px]">
//               Mrs. Lim Giok Hwat
//             </p>
//           </div>
//         </div>

//         {/* KANAN */}
//       </div>
//     </section>
//   );
// };

// export default BrideGroom;
