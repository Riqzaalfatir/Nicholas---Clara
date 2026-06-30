import React from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeRight, fadeLeft } from "@/lib/animation";

const FotoTeks = () => {
  return (
    <section className="bg-[#F2F1E8]">
      <div className="py-[120px] lg:py-[240px] flex flex-col items-center justify-center gap-[5.13vw] lg:gap-[60px]">
        {/* YOUR */}
        <div className="flex items-center gap-[5.13vw] lg:gap-[48px] ml-[7.18vw] lg:ml-[4vw]">
          <motion.p
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="font-montreal font-medium text-[3.59vw] lg:text-[36px] text-[#191A2A] pt-[5.64vw] lg:pt-[45px]"
          >
            YOUR
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="w-[31.28vw] h-[20.51vw] lg:w-[305px] lg:h-[199px] shrink-0"
          >
            <img
              src="/images/fototeks/Couple1.webp"
              alt="Couple1"
              className="w-full h-full object-cover block"
            />
          </motion.div>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="font-montreal font-medium text-[3.59vw] lg:text-[36px] text-[#191A2A] pt-[5.64vw] lg:pt-[45px]"
          >
            PRESENCE
          </motion.p>
        </div>

        {/* IS OUR */}
        <div className="flex items-center gap-[4.62vw] lg:gap-[44px] -ml-[4.62vw] lg:-ml-[3.5vw]">
          <motion.p
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="font-montreal font-medium text-[3.59vw] lg:text-[36px] text-[#191A2A]"
          >
            IS OUR
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="w-[31.28vw] h-[20.51vw] lg:w-[305px] lg:h-[199px] shrink-0"
          >
            <img
              src="/images/fototeks/Couple2.webp"
              alt="Couple2"
              className="w-full h-full object-cover block"
            />
          </motion.div>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="font-montreal font-medium text-[3.59vw] lg:text-[36px] text-[#191A2A]"
          >
            BLESSING
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FotoTeks;

// SEBELUM DI VW KAN
// import React from 'react'

// const FotoTeks = () => {
//   return (
//     <section className='bg-[#F2F1E8]'>
//         <div className="py-[120px] lg:py-[240px] flex flex-col items-center justify-center gap-[20px]">

//             {/* YOUR */}
//             <div className="flex items-center gap-[20px] lg:gap-[49px] ml-[28px]">
//                 <p className='font-montreal font-medium text-[14px] lg:text-[36px] text-[#191A2A] pt-[22px] lg:pt-[45px]'>YOUR</p>
//                 <div className="w-[122px] h-[80px] lg:w-[305px] lg:h-[199px]">
//                     <img src="/images/fototeks/Couple1.webp" alt="Couple1" className='w-full h-full object-cover block' />
//                 </div>
//                 <p className='font-montreal font-medium text-[14px] lg:text-[36px] text-[#191A2A] pt-[22px] lg:pt-[45px]'>PRESENCE</p>
//             </div>

//             {/* ISYOUR */}
//             <div className="flex items-center gap-[18px] lg:gap-[44px] -ml-[18px]">
//                 <p className='font-montreal font-medium text-[14px] lg:text-[36px] text-[#191A2A]'>IS OUR</p>
//                 <div className="w-[122px] h-[80px] lg:w-[305px] lg:h-[199px]">
//                     <img src="/images/fototeks/Couple2.webp" alt="Couple2" className='w-full h-full object-cover block' />
//                 </div>
//                 <p className='font-montreal font-medium text-[14px] lg:text-[36px] text-[#191A2A]'>BLESSING</p>
//             </div>

//         </div>
//     </section>
//   )
// }

// export default FotoTeks
