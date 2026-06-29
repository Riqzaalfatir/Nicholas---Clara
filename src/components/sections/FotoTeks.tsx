import React from 'react'

const FotoTeks = () => {
  return (
    <section className='bg-[#F2F1E8]'>
        <div className="py-[120px] flex flex-col items-center justify-center gap-[20px]">

            <div className="flex items-center gap-[20px]">
                <p className='font-montreal font-medium text-[14px] text-[#191A2A] pt-[22px]'>YOUR</p>
                <div className="w-[122px] h-[80px]">
                    <img src="/images/fototeks/Couple1.webp" alt="Couple1" className='w-full h-full object-cover block' />
                </div>
                <p className='font-montreal font-medium text-[14px] text-[#191A2A] pt-[22px]'>PRESENCE</p>
            </div>

            <div className="flex items-center gap-[18px]">
                <p className='font-montreal font-medium text-[14px] text-[#191A2A]'>IS OUR</p>
                <div className="w-[122px] h-[80px]">
                    <img src="/images/fototeks/Couple2.webp" alt="Couple2" className='w-full h-full object-cover block' />
                </div>
                <p className='font-montreal font-medium text-[14px] text-[#191A2A]'>BLESSING</p>
            </div>

        </div>
    </section>
  )
}

export default FotoTeks