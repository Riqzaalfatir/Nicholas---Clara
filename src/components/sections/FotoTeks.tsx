import React from 'react'

const FotoTeks = () => {
  return (
    <section className='bg-[#F2F1E8]'>
      <div className="py-[30.77vw] flex flex-col items-center justify-center gap-[5.13vw]">

        {/* YOUR */}
        <div className="flex items-center gap-[5.13vw] ml-[7.18vw]">
          <p className='font-montreal font-medium text-[3.59vw] text-[#191A2A] pt-[5.64vw]'>
            YOUR
          </p>
          <div className="w-[31.28vw] h-[20.51vw] shrink-0">
            <img src="/images/fototeks/Couple1.webp" alt="Couple1" className='w-full h-full object-cover block' />
          </div>
          <p className='font-montreal font-medium text-[3.59vw] text-[#191A2A] pt-[5.64vw]'>
            PRESENCE
          </p>
        </div>

        {/* IS OUR */}
        <div className="flex items-center gap-[4.62vw] -ml-[4.62vw]">
          <p className='font-montreal font-medium text-[3.59vw] text-[#191A2A]'>
            IS OUR
          </p>
          <div className="w-[31.28vw] h-[20.51vw] shrink-0">
            <img src="/images/fototeks/Couple2.webp" alt="Couple2" className='w-full h-full object-cover block' />
          </div>
          <p className='font-montreal font-medium text-[3.59vw] text-[#191A2A]'>
            BLESSING
          </p>
        </div>

      </div>
    </section>
  )
}

export default FotoTeks


// SEBELUM DI VW KAN
// import React from 'react'

// const FotoTeks = () => {
//   return (
//     <section className='bg-[#F2F1E8]'>
//         <div className="py-[120px] flex flex-col items-center justify-center gap-[20px]">

//             {/* YOUR */}
//             <div className="flex items-center gap-[20px] ml-[28px]">
//                 <p className='font-montreal font-medium text-[14px] text-[#191A2A] pt-[22px]'>YOUR</p>
//                 <div className="w-[122px] h-[80px]">
//                     <img src="/images/fototeks/Couple1.webp" alt="Couple1" className='w-full h-full object-cover block' />
//                 </div>
//                 <p className='font-montreal font-medium text-[14px] text-[#191A2A] pt-[22px]'>PRESENCE</p>
//             </div>

//             {/* ISYOUR */}
//             <div className="flex items-center gap-[18px] -ml-[18px]">
//                 <p className='font-montreal font-medium text-[14px] text-[#191A2A]'>IS OUR</p>
//                 <div className="w-[122px] h-[80px]">
//                     <img src="/images/fototeks/Couple2.webp" alt="Couple2" className='w-full h-full object-cover block' />
//                 </div>
//                 <p className='font-montreal font-medium text-[14px] text-[#191A2A]'>BLESSING</p>
//             </div>

//         </div>
//     </section>
//   )
// }

// export default FotoTeks