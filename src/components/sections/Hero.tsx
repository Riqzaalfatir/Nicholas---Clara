import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#F2F1E8] flex items-center justify-center leading-none">
      <div className="relative pt-[179px] pb-[183px] px-4 flex flex-col">

        {/* Foto dipindah ke paling atas di DOM */}
        <div className="absolute w-[240px] h-[360px] top-[200px] left-1/2 -translate-x-1/2">
          <img
            src="/images/hero/Aset-Hero.webp"
            alt="Nicholas & Clara"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col z-10">
          <p className="text-[12px] font-helvetica font-bold text-[#191A2A] self-start">
            The Wedding of
          </p>
          <h1 className="text-[48px] font-montreal font-regular text-[#191A2A] self-start mt-[5px]">
            Nicholas & Clara
          </h1>

          <p className="text-[16px] font-helvetica font-bold text-[#191A2A] mt-[260px] self-start">
            Saturday, 29 August 2026
          </p>

          <p className="text-[12px] font-helvetica font-bold text-[#191A2A] mt-[45px] self-end">
            Ecclesiastes 4:9-10
          </p>
          <p className="text-[12px] font-helvetica font-medium text-[#191A2A] mt-[16px] self-end text-justify w-[326px] leading-[15px]">
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