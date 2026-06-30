import React from "react";

const BrideGroom = () => {
  return (
    <section className="relative w-full overflow-hidden aspect-[390/592]">
      <img
        src="/images/brideroom/Bg-Brideroom.svg"
        alt="Nicholas & Clara"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      <div className="absolute top-[21.28vw] left-0 w-full px-[8.21vw] flex justify-between">
        {/* KIRI */}
        <div className="flex flex-col leading-none">
          <p className="text-[2.56vw] font-helvetica text-white font-medium">
            THE GROOM
          </p>
          <p className="text-[5.64vw] font-helvetica text-white font-regular mt-[0.51vw]">
            Nicholas Glenn
          </p>

          <div className="flex flex-col mt-[6.67vw]">
            <p className="font-helvetica font-medium text-[2.31vw] text-white">
              The Son Of
            </p>
            <p className="font-helvetica font-medium text-[2.56vw] text-white mt-[1.54vw]">
              Mr. Hengky Bunnarto &
            </p>
            <p className="font-helvetica font-medium text-[2.56vw] text-white mt-[0.77vw]">
              Mrs. Nancy Veronika Koswara
            </p>
          </div>
        </div>

        {/* KANAN */}
        <div className="flex flex-col items-end text-right leading-none">
          <p className="text-[2.56vw] font-helvetica text-white font-medium">
            THE BRIDE
          </p>
          <p className="text-[5.64vw] font-helvetica text-white font-regular mt-[0.51vw]">
            Clara Claudia
          </p>

          <div className="flex flex-col items-end mt-[6.67vw]">
            <p className="font-helvetica font-medium text-[2.31vw] text-white">
              The Daughter Of
            </p>
            <p className="font-helvetica font-medium text-[2.56vw] text-white mt-[1.54vw]">
              Mr. Law Saw Sin &
            </p>
            <p className="font-helvetica font-medium text-[2.56vw] text-white mt-[0.77vw]">
              Mrs. Lim Giok Hwat
            </p>
          </div>
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
//     <section className="relative w-full h-[592px]">
//       <img
//         src="/images/brideroom/Bg-Brideroom.svg"
//         alt="Nicholas & Clara"
//         className="w-full h-full object-cover object-top block"
//       />

//       <div className="absolute top-[83px] left-0 w-full px-[32px] flex justify-between">
//         {/* KIRI */}
//         <div className="flex flex-col leading-none">
//           <p className="text-[10px] font-helvetica text-white font-medium">
//             THE GROOM
//           </p>
//           <p className="text-[22px] font-helvetica text-white font-regular mt-[2px]">
//             Nicholas Glenn
//           </p>

//           <div className="flex flex-col mt-[26px]">
//             <p className="font-helvetica font-medium text-[9px] text-white">
//               The Son Of
//             </p>
//             <p className="font-helvetica font-medium text-[10px] text-white mt-[6px]">
//               Mr. Hengky Bunnarto &
//             </p>
//             <p className="font-helvetica font-medium text-[10px] text-white mt-[3px]">
//               Mrs. Nancy Veronika Koswara
//             </p>
//           </div>
//         </div>

//         {/* KANAN */}
//         <div className="flex flex-col items-end text-right leading-none">
//           <p className="text-[10px] font-helvetica text-white font-medium">
//             THE BRIDE
//           </p>
//           <p className="text-[22px] font-helvetica text-white font-regular mt-[2px]">
//             Clara Claudia
//           </p>

//           <div className="flex flex-col mt-[26px]">
//             <p className="font-helvetica font-medium text-[9px] text-white">
//               The Daughter Of
//             </p>
//             <p className="font-helvetica font-medium text-[10px] text-white mt-[6px]">
//               Mr. Law Saw Sin &
//             </p>
//             <p className="font-helvetica font-medium text-[10px] text-white mt-[3px]">
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
