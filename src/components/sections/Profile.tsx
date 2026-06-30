import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation";

const Profile = () => {
  return (
    <section id="profile" className="bg-[#F2F1E8] flex flex-col items-center">
      <div className="relative w-full aspect-[390/550] lg:aspect-[1514/1100] overflow-hidden">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/images/profile/Bg-CoupleD.webp"
          />
          <img
            src="/images/profile/Bg-Couple.webp"
            alt="Nicholas & Clara"
            className="w-full h-full object-cover object-top block"
          />
        </picture>

        {/* GRADIENT ATAS */}
        <div className="absolute top-0 left-0 w-full h-[53.59vw] lg:h-[340px] bg-gradient-to-b from-[#F2F1E8] to-transparent" />
        {/* GRADIENT BAWAH */}
        <div className="absolute bottom-0 left-0 w-full h-[46.92vw] lg:h-[370px] bg-gradient-to-t from-[#F2F1E8] to-transparent" />

        <div className="absolute top-[18.46vw] lg:top-[80px] left-1/2 -translate-x-1/2 w-[51.28vw] h-[30.77vw] lg:w-[350px] lg:h-[210px] z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src="/images/profile/Logo-nc.webp"
              alt="NC Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>

      <div className="mt-[103px] mb-[108px] lg:mt-[40px] lg:mb-[216px]">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
          className="text-[4.10vw] lg:text-[28px] font-helvetica font-medium leading-[22px] lg:tracking-[0px] lg:leading-[30px] text-[#191A2A] text-justify w-[50.51vw] lg:w-[368px]"
        >
          Together With Our Families, We You Invite To Celebrate Our Marriage
        </motion.p>
      </div>
    </section>
  );
};

export default Profile;

// SEBELUM DI CONVERT KE VW
// import React from 'react'

// const Profile = () => {
//   return (
//     <section id='profile' className='bg-[#F2F1E8] flex flex-col items-center'>
//       <div className="relative w-full h-[614px] lg:aspect-[1514/1100] overflow-hidden">
//         <img
//           src="/images/profile/Bg-Couple.webp"
//           alt="Nicholas & Clara"
//           className="w-full h-full object-cover block lg:hidden"
//         />

//         <img
//           src="/images/profile/Bg-CoupleD.webp"
//           alt="Nicholas & Clara"
//           className="w-full h-full object-cover block object-top hidden lg:block"
//         />

//         {/* GRADIENT ATAS */}
//         <div className="absolute top-0 left-0 w-full h-[209px] lg:h-[340px] bg-gradient-to-b from-[#F2F1E8] to-transparent" />
//         {/* GRADIENT BAWAH */}
//         <div className="absolute bottom-0 left-0 w-full h-[300px] lg:h-[400px] bg-gradient-to-t from-[#F2F1E8] to-transparent" />

//         <div className="absolute top-[72px] lg:top-[80px] left-1/2 -translate-x-1/2 w-[200px] h-[120px] lg:w-[350px] lg:h-[210px] z-10">
//           <img
//             src="/images/profile/Logo-nc.webp"
//             alt="NC Logo"
//             className="w-full h-full object-contain"
//           />
//         </div>
//       </div>

//       <div className="mt-[56px] mb-[108px] lg:mt-[40px] lg:mb-[216px]">
//         <p className='text-[16px] lg:text-[28px] font-helvetica font-medium tracking-[0.1px] lg:tracking-[0px] leading-[20px] lg:leading-[30px] text-[#191A2A] text-justify w-[197px] lg:w-[368px]'>
//           Together With Our Families,
//           We You Invite To Celebrate
//           Our Marriage
//         </p>
//       </div>
//     </section>
//   )
// }

// export default Profile
