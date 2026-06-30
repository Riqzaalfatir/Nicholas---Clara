"use client";

import { useState } from "react";
import Image from "next/image";
import NotifModal from "@/components/popup/NotifModal";

type Pilihan = "hadir" | "tidak_hadir" | null;
type ModalType = string | null;

const Rsvp = () => {
  const [pilihan, setPilihan] = useState<Pilihan>(null);
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleConfirm = (): void => {
    if (!pilihan) {
      setModalType("incomplete_rsvp");
      return;
    }
    setModalType("confirm_rsvp");
  };

  const handleFinalConfirm = (): void => {
    setModalType(null);
    if (pilihan === "hadir") {
      setModalType("rsvp_confirmed_hadir");
    } else {
      setModalType("rsvp_confirmed_tidak_hadir");
    }
  };

  return (
    <>
      <section className="bg-[#F2F1E8]">
        <div className="pt-[30.77vw] pb-[30.77vw] px-[4.10vw]">
          <div className="flex flex-col items-center justify-center leading-none">
            <h2 className="font-montreal font-medium text-[6.15vw] text-[#191A2A]">
              RSVP
            </h2>
            <p className="font-montreal font-regular text-[3.08vw] text-[#191A2A] mt-[15.38vw]">
              Dear,
            </p>
            <p className="font-montreal font-regular text-[3.08vw] text-[#191A2A] mt-[6.67vw]">
              Sela
            </p>
            <p className="font-montreal font-regular text-[3.08vw] text-[#191A2A] text-center mt-[6.15vw] tracking-widest leading-[5.13vw]">
              Kindly confirm your attendance before <br />
              27 June 2026
            </p>

            <div className="flex items-center justify-center gap-[4.10vw] mt-[8.72vw]">
              <button
                onClick={() => setPilihan(pilihan === "hadir" ? null : "hadir")}
                className={`w-[26.41vw] h-[8.46vw] rounded-[71px] font-montreal font-regular text-[3.08vw] transition-all duration-200
                ${pilihan === "hadir"
                  ? "bg-[#191A2A] text-white"
                  : "bg-[#B7B7B7] text-white hover:bg-[#191A2A]"
                }`}
              >
                ATTEND
              </button>
              <button
                onClick={() => setPilihan(pilihan === "tidak_hadir" ? null : "tidak_hadir")}
                className={`w-[41.28vw] h-[8.46vw] rounded-[71px] font-montreal font-regular text-[3.08vw] transition-all duration-200
                ${pilihan === "tidak_hadir"
                  ? "bg-[#191A2A] text-white border-transparent"
                  : "bg-transparent border border-[#B7B7B7] text-[#191A2A] hover:border-[#191A2A]"
                }`}
              >
                UNABLE TO ATTEND
              </button>
            </div>

            <p className="font-montreal font-regular text-[3.08vw] text-[#191A2A] mt-[9.49vw]">
              {pilihan === "tidak_hadir" ? "ARE YOU SURE?" : "Confirm your selection?"}
            </p>

            <button
              onClick={handleConfirm}
              className="w-[56.92vw] h-[8.46vw] bg-[#B7B7B7] hover:bg-[#191A2A] transition-colors duration-200 rounded-[71px] font-montreal font-regular text-[3.08vw] text-white flex items-center justify-center mt-[7.18vw]"
            >
              {pilihan === "hadir"
                ? "CONFIRM ATTEND"
                : pilihan === "tidak_hadir"
                ? "CONFIRM NOT ATTEND"
                : "CONFIRM"}
            </button>

            <p className="font-montreal font-regular text-[2.56vw] text-[#191A2A] mt-[13.85vw] text-center tracking-wide leading-[4.36vw]">
              If you need assistance with your RSVP, <br />
              please contact our support team.
            </p>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[8.46vw] w-[41.03vw] bg-[#12877B] hover:bg-[#0F6B61] active:bg-[#0A4F47] transition-colors duration-200 text-[#FEF8EF] flex items-center justify-center font-montreal font-regular text-[3.08vw] rounded-full gap-[1.54vw] mt-[6.15vw]"
            >
              <Image
                src="/images/Rsvp/Wa.png"
                alt="Logo Wa"
                width={0}
                height={0}
                className="object-contain w-[4.62vw] h-[4.62vw]"
              />
              CHAT SUPPORT
            </a>
          </div>
        </div>
      </section>

      {modalType && (
        <NotifModal
          type={modalType}
          onClose={() => setModalType(null)}
          onConfirm={handleFinalConfirm}
          waNumber="6281234567890"
        />
      )}
    </>
  );
};

export default Rsvp;




// SEBELUM DI CONVERT KE VW
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import NotifModal from "@/components/popup/NotifModal";

// type Pilihan = "hadir" | "tidak_hadir" | null;
// type ModalType = string | null;

// const Rsvp = () => {
//   const [pilihan, setPilihan] = useState<Pilihan>(null);
//   const [modalType, setModalType] = useState<ModalType>(null);

//   const handleConfirm = (): void => {
//     if (!pilihan) {
//       setModalType("incomplete_rsvp");
//       return;
//     }
//     setModalType("confirm_rsvp");
//   };

//   const handleFinalConfirm = (): void => {
//     setModalType(null);
//     if (pilihan === "hadir") {
//       setModalType("rsvp_confirmed_hadir");
//     } else {
//       setModalType("rsvp_confirmed_tidak_hadir");
//     }
//   };

//   return (
//     <>
//       <section className="bg-[#F2F1E8]">
//         <div className="pt-[120px] pb-[120px] px-4">
//           <div className="flex flex-col items-center justify-center leading-none">
//             <h2 className="font-montreal font-medium text-[24px] text-[#191A2A]">
//               RSVP
//             </h2>
//             <p className="font-montreal font-regular text-[12px] text-[#191A2A] mt-[60px]">
//               Dear,
//             </p>
//             <p className="font-montreal font-regular text-[12px] text-[#191A2A] mt-[26px]">
//               Sela
//             </p>
//             <p className="font-montreal font-regular text-[12px] text-[#191A2A] text-center mt-[24px] tracking-widest leading-[20px]">
//               Kindly confirm your attendance before <br /> 
//               27 June 2026
//             </p>

//             <div className="flex items-center justify-center gap-[16px] mt-[34px]">
//               <button
//                 onClick={() => setPilihan(pilihan === "hadir" ? null : "hadir")}
//                 className={`w-[103px] h-[33px] rounded-[71px] font-montreal font-regular text-[12px] transition-all duration-200
//                 ${pilihan === "hadir"
//                   ? "bg-[#191A2A] text-white"
//                   : "bg-[#B7B7B7] text-white hover:bg-[#191A2A]"
//                 }`}
//               >
//                 ATTEND
//               </button>
//               <button
//                 onClick={() => setPilihan(pilihan === "tidak_hadir" ? null : "tidak_hadir")}
//                 className={`w-[161px] h-[33px] rounded-[71px] font-montreal font-regular text-[12px] transition-all duration-200
//                 ${pilihan === "tidak_hadir"
//                   ? "bg-[#191A2A] text-white border-transparent"
//                   : "bg-transparent border border-[#B7B7B7] text-[#191A2A] hover:border-[#191A2A]"
//                 }`}
//               >
//                 UNABLE TO ATTEND
//               </button>
//             </div>

//             <p className="font-montreal font-regular text-[12px] text-[#191A2A] mt-[37px]">
//               {pilihan === "tidak_hadir" ? "ARE YOU SURE?" : "Confirm your selection?"}
//             </p>

//             <button
//               onClick={handleConfirm}
//               className="w-[222px] h-[33px] bg-[#B7B7B7] hover:bg-[#191A2A] transition-colors duration-200 rounded-[71px] font-montreal font-regular text-[12px] text-white flex items-center justify-center mt-[28px]"
//             >
//               {pilihan === "hadir"
//                 ? "CONFIRM ATTEND"
//                 : pilihan === "tidak_hadir"
//                 ? "CONFIRM NOT ATTEND"
//                 : "CONFIRM"}
//             </button>

//             <p className="font-montreal font-regular text-[10px] text-[#191A2A] mt-[54px] text-center tracking-wide leading-[17px]">
//               If you need assistance with your RSVP, <br />
//               please contact our support team.
//             </p>
            
//             <a
//               href="https://wa.me/6281234567890"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="h-[33px] w-[160px] lg:h-[40px] lg:w-[212px] bg-[#12877B] hover:bg-[#0F6B61] active:bg-[#0A4F47] transition-colors duration-200 text-[#FEF8EF] flex items-center justify-center font-montreal font-regular text-[12px] lg:text-[18px] rounded-full gap-[6px] mt-[24px] lg:mt-[44px]"
//             >
//               <Image
//                 src="/images/Rsvp/Wa.png"
//                 alt="Logo Wa"
//                 width={18}
//                 height={18}
//                 className="object-contain"
//               />
//               CHAT SUPPORT
//             </a>
//           </div>
//         </div>
//       </section>

//       {modalType && (
//         <NotifModal
//           type={modalType}
//           onClose={() => setModalType(null)}
//           onConfirm={handleFinalConfirm}
//           waNumber="6281234567890"
//         />
//       )}
//     </>
//   );
// };

// export default Rsvp;