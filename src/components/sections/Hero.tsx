import React from "react";

const Hero = ({ start }: { start : boolean }) => {
  return (
    <section className="bg-[#F2F1E8] flex items-center justify-center leading-none">
      <div className="relative pt-[46.41vw] pb-[46.92vw] flex flex-col w-[85.38vw]">
        {/* Foto */}
        <div className="absolute w-[61.54vw] h-[92.31vw] top-[51.28vw] left-1/2 -translate-x-1/2 -ml-[0.72vw] z-0">
          <img
            src="/images/hero/Aset-Heroo.webp"
            alt="Nicholas & Clara"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-[3.08vw] font-helvetica font-bold z-10 text-[#191A2A]">
            The Wedding of
          </p>
          <h1 className="text-[12.31vw] font-montreal font-regular mt-[1.28vw] whitespace-nowrap -ml-[0.51vw] z-10 relative [mix-blend-mode:exclusion] text-[#F2F1E8]">
            Nicholas & Clara
          </h1>

          <p className="text-[4.10vw] font-helvetica font-bold mt-[66.15vw] z-10 relative [mix-blend-mode:exclusion] text-[#F2F1E8]">
            Saturday, 29 August 2026
          </p>

          <p className="text-[3.08vw] font-helvetica font-bold text-[#191A2A] mt-[11.54vw] self-end">
            Ecclesiastes 4:9-10
          </p>
          <p className="text-[3.08vw] font-helvetica font-medium text-[#191A2A] mt-[4.10vw] tracking-[0.05vw] text-justify leading-[3.85vw]">
            Two are better than one, because they have a good return for their
            labor: 10 If either of them falls down, one can help the other up.
            But pity anyone who falls and has no one to help them up.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;


// SEBELUM DI CONVERT KE VW
// import React from "react";

// const Hero = () => {
//   return (
//     <section className="bg-[#F2F1E8] flex items-center justify-center leading-none">
//       <div className="relative pt-[181px] pb-[183px] flex flex-col w-[333px]">
//         {/* Foto */}
//         <div className="absolute w-[240px] h-[360px] top-[200px] left-1/2 -translate-x-1/2 -ml-[2.8px] z-0">
//           <img
//             src="/images/hero/Aset-Heroo.webp"
//             alt="Nicholas & Clara"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="flex flex-col">
//           <p className="text-[12px] font-helvetica font-bold z-10 text-[#191A2A]">
//             The Wedding of
//           </p>
//           <h1 className="text-[48px] font-montreal font-regular mt-[5px] whitespace-nowrap -ml-0.5 z-10 relative [mix-blend-mode:exclusion] text-[#F2F1E8]">
//             Nicholas & Clara
//           </h1>

//           <p className="text-[16px] font-helvetica font-bold mt-[258px] z-10 relative [mix-blend-mode:exclusion] text-[#F2F1E8]">
//             Saturday, 29 August 2026
//           </p>

//           <p className="text-[12px] font-helvetica font-bold text-[#191A2A] mt-[45px] self-end">
//             Ecclesiastes 4:9-10
//           </p>
//           <p className="text-[12px] font-helvetica font-medium text-[#191A2A] mt-[16px] tracking-[0.2px] text-justify leading-[15px]">
//             Two are better than one, because they have a good return for their
//             labor: 10 If either of them falls down, one can help the other up.
//             But pity anyone who falls and has no one to help them up.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
