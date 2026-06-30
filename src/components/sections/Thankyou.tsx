import React from "react";
import Image from "next/image";

const Thankyou = () => {
  return (
    <section className="bg-[#F2F1E8]">
      <div className="pt-[36.41vw] pb-[4.62vw] lg:pt-[300px] lg:pb-[5px]">
        <div className="relative flex flex-col items-center justify-center">
          {/* Foto */}
          <div className="absolute w-[61.54vw] h-[92.31vw] top-[12.82vw] lg:w-[371px] lg:h-[557px] lg:top-[70px] left-1/2 -translate-x-1/2 z-0">
            <img
              src="/images/thankyou/Aset-Thankyou.webp"
              alt="Nicholas & Clara"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-montreal font-regular text-[16.41vw] lg:text-[102px] z-10 relative [mix-blend-mode:exclusion] text-[#F2F1E8]">
            Thank You
          </h1>
          <p className="font-helvetica font-medium text-[3.08vw] lg:text-[18px] text-[#191A2A] pt-[85.90vw] lg:pt-[505px] -ml-[1.28vw] lg:-ml-0 lg:tracking-wide">
            For being part of our journey. <br />
            We look forward to celebrating love, laughter, <br />
            and happily ever after with you!
          </p>
          <Image
            src="/images/thankYou/Logo-Provite.webp"
            alt="Provite Logo"
            width={89}
            height={65}
            className="object-contain mt-[37.18vw] w-[22.82vw] h-[16.67vw] lg:mt-[36px] lg:w-[89px] lg:h-[89px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Thankyou;








// SEBELUM DI KE VW KAN
// import React from "react";
// import Image from "next/image";

// const Thankyou = () => {
//   return (
//     <section className="bg-[#F2F1E8]">
//       <div className="pt-[142px] pb-[18px]">
//         <div className="relative flex flex-col items-center justify-center">
//           {/* Foto */}
//           <div className="absolute w-[240px] h-[360px] top-[50px] left-1/2 -translate-x-1/2 z-0">
//             <img
//               src="/images/thankyou/Aset-Thankyou.webp"
//               alt="Nicholas & Clara"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <h1 className="font-montreal font-regular text-[64px] z-10 relative [mix-blend-mode:exclusion] text-[#F2F1E8]">
//             Thank You
//           </h1>
//           <p className="font-helvetica font-medium text-[12px] text-[#191A2A] pt-[335px] -ml-[5px]">
//             For being part of our journey. <br />
//             We look forward to celebrating love, laughter, <br />
//             and happily ever after with you!
//           </p>
//           <Image
//             src="/images/thankYou/Logo-Provite.webp"
//             alt="Provite Logo"
//             width={89}
//             height={65}
//             className="object-contain mt-[145px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Thankyou;
