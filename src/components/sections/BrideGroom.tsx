import React from 'react'

const BrideGroom = () => {
  return (
    <section className='relative w-full h-[592px]'>
        <img 
            src="/images/brideroom/Bg-Brideroom.svg" alt="Nicholas & Clara"
            className='w-full h-full object-cover block' />

            <div className="absolute top-[77px] left-0 w-full px-[34px] flex justify-between">

                {/* KIRI */}
                <div className="flex flex-col">
                    <p className='text-[10px] font-helvetica text-white font-medium'>THE GROOM</p>
                    <p className='text-[22px] font-helvetica text-white font-regular'>Nicholas Glenn</p>

                    <div className="flex flex-col">
                        <p className='font-helvetica font-medium text-[9px] text-white'>The Son Of</p>
                        <p className='font-helvetica font-medium text-[10px] text-white'>Mr. Hengky Bunnarto &</p>
                        <p className='font-helvetica font-medium text-[10px] text-white'>Mrs. Nancy Veronika Koswara</p>
                    </div>
                </div>

                {/* KANAN */}
                <div className="flex flex-col items-end text-right">
                    <p className='text-[10px] font-helvetica text-white font-medium'>THE BRIDE</p>
                    <p className='text-[22px] font-helvetica text-white font-regular'>Clara Claudia</p>

                    <div className="flex flex-col">
                        <p className='font-helvetica font-medium text-[9px] text-white'>The Daughter Of</p>
                        <p className='font-helvetica font-medium text-[10px] text-white'>Mr. Law Saw Sin &</p>
                        <p className='font-helvetica font-medium text-[10px] text-white'>Mrs. Lim Giok Hwat</p>
                    </div>
                </div>

                {/* KANAN */}
            </div>
    </section>
  )
}

export default BrideGroom