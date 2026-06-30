import React from 'react'

const Profile = () => {
  return (
    <section className='bg-[#F2F1E8] flex flex-col items-center'>
      <div className="relative w-full aspect-[390/614] overflow-hidden">
        <img
          src="/images/profile/Bg-Couple.webp"
          alt="Nicholas & Clara"
          className="w-full h-full object-cover block"
        />

        {/* GRADIENT ATAS */}
        <div className="absolute top-0 left-0 w-full h-[53.59vw] bg-gradient-to-b from-[#F2F1E8] to-transparent" />
        {/* GRADIENT BAWAH */}
        <div className="absolute bottom-0 left-0 w-full h-[76.92vw] bg-gradient-to-t from-[#F2F1E8] to-transparent" />

        <div className="absolute top-[18.46vw] left-1/2 -translate-x-1/2 w-[51.28vw] h-[30.77vw] z-10">
          <img
            src="/images/profile/Logo-nc.webp"
            alt="NC Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="mt-[14.36vw] mb-[27.69vw]">
        <p className='text-[4.10vw] font-helvetica font-medium tracking-[0.03vw] leading-[5.13vw] text-[#191A2A] text-justify w-[50.51vw]'>
          Together With Our Families,
          We You Invite To Celebrate
          Our Marriage
        </p>
      </div>
    </section>
  )
}

export default Profile

// SEBELUM DI CONVERT KE VW
// import React from 'react'

// const Profile = () => {
//   return (
//     <section className='bg-[#F2F1E8] flex flex-col items-center'>
//       <div className="relative w-full h-[614px] overflow-hidden">
//          <img
//           src="/images/profile/Bg-Couple.webp"
//           alt="Nicholas & Clara"
//           className="w-full h-full object-cover block"
//         />

//         {/* GRADIENT ATAS */}
//         <div className="absolute top-0 left-0 w-full h-[209px] bg-gradient-to-b from-[#F2F1E8] to-transparent" />
//         {/* GRADIENT BAWAH */}
//         <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#F2F1E8] to-transparent" />

//         <div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[200px] h-[120px] z-10">
//          <img
//             src="/images/profile/Logo-nc.webp"
//             alt="NC Logo"
//             className="w-full h-full object-contain"
//           />
//         </div>
//       </div>

//       <div className="mt-[56px] mb-[108px]">
//         <p className='text-[16px] font-helvetica font-medium  tracking-[0.1px] leading-[20px] text-[#191A2A] text-justify w-[197px]'>
//           Together With Our Families,
//            We You Invite To Celebrate  
//            Our Marriage
//         </p>
//       </div>
//     </section>
//   )
// }

// export default Profile