const Hero = ({ start }: { start: boolean }) => {
  return (
    <section
      id="hero"
      className="bg-[#F2F1E8] flex items-center justify-center leading-none min-h-screen"
    >
      <div className="relative lg:pt-[113px] lg:pb-[83px] flex flex-col w-[85.38vw] lg:w-[526px]">
        {/* Foto */}
        <div className="absolute w-[61.54vw] h-[92.31vw] top-[4.5vw] lg:w-[370px] lg:h-[556px] lg:top-[141px] left-1/2 -translate-x-1/2 -ml-[0.72vw] lg:-ml-[0.2vw] z-0">
          <img
            src="/images/hero/Aset-Heroo.webp"
            alt="Nicholas & Clara"
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-[3.08vw] lg:text-[18px] font-helvetica font-bold z-10 text-[#191A2A] lg:ml-[0.3vw]">
            The Wedding of
          </p>
          <h1 className="text-[12.31vw] lg:text-[76px] font-montreal font-regular mt-[0.5vw] lg:mt-[6px] whitespace-nowrap -ml-[0.51vw] lg:-ml-[0vw] z-10 relative [mix-blend-mode:exclusion] text-[#F2F1E8]">
            Nicholas & Clara
          </h1>

          <p className="text-[4.10vw] lg:text-[28px] font-helvetica font-bold mt-[66.15vw] lg:mt-[390px] z-10 relative [mix-blend-mode:exclusion] text-[#F2F1E8]">
            Saturday, 29 August 2026
          </p>

          <p className="text-[3.08vw] lg:text-[18px] font-helvetica font-bold text-[#191A2A] mt-[11.99vw] lg:mt-[79px] self-end">
            Ecclesiastes 4:9-10
          </p>
          <p className="text-[3.08vw] lg:text-[18px] font-helvetica font-medium text-[#191A2A] mt-[4.10vw] lg:mt-[24px] tracking-[0.05vw] lg:tracking-[0vw] text-justify leading-[3.85vw] lg:leading-[30px]">
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