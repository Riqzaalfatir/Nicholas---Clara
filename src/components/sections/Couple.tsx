import React from 'react'

const About = () => {
  return (
    <section className='bg-[#F2F1E8] flex flex-col items-center'>
      <div className="relative w-full h-[614px] overflow-hidden">
         <img
          src="/images/couple/Bg-Couple.webp"
          alt="Nicholas & Clara"
          className="w-full h-full object-cover block"
        />

        {/* GRADIENT ATAS */}
        <div className="absolute top-0 left-0 w-full h-[209px] bg-gradient-to-b from-[#F2F1E8] to-transparent" />
        {/* GRADIENT BAWAH */}
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#F2F1E8] to-transparent" />

        <div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[200px] h-[120px] z-10">
         <img
            src="/images/couple/Logo-nc.webp"
            alt="NC Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="mt-[56px] mb-[108px] text-center">
        <p className='text-[16px] font-helvetica font-medium w-[197px] text-justify leading-[18px] text-[#191A2A]'>
          Together With Our Families, We You Invite To Celebrate Our Marriage
        </p>
      </div>
    </section>
  )
}

export default About