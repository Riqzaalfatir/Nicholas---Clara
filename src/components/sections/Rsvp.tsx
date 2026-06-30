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
      <section id="rsvp" className="bg-[#F2F1E8]">
        <div className="pt-[120px] pb-[120px] lg:pt-[236px] lg:pb-[247px] px-[0.5vw]">
          <div className="flex flex-col items-center justify-center leading-none">
            <h2 className="font-montreal font-medium text-[6.15vw] lg:text-[64px] text-[#191A2A]">
              RSVP
            </h2>
            <p className="font-montreal font-regular text-[3.08vw] lg:text-[18px] text-[#191A2A] mt-[60px] lg:mt-[65px]">
              Dear Mr. /Mrs. / Ms.
            </p>
            <p className="font-montreal font-regular text-[3.08vw] lg:text-[18px] text-[#191A2A] mt-[26px] lg:mt-[48px]">
              Sela
            </p>
            <p className="font-montreal font-regular text-[3.08vw] lg:text-[18px] text-[#191A2A] text-center mt-[24px] lg:mt-[48px] tracking-wide leading-[5.13vw] lg:leading-[25px]">
              Kindly confirm your attendance before <br />
              27 June 2026
            </p>

            <div className="flex items-center justify-center gap-[16px] mt-[34px] lg:mt-[47px] lg:gap-[24px]">
              <button
                onClick={() => setPilihan(pilihan === "hadir" ? null : "hadir")}
                className={`w-[26.41vw] h-[8.46vw] lg:w-[171px] lg:h-[40px] rounded-[71px] lg:rounded-[38px] font-montreal font-regular text-[3.08vw] lg:text-[18px] transition-all duration-200
                ${
                  pilihan === "hadir"
                    ? "bg-[#191A2A] text-white"
                    : "bg-[#B7B7B7] text-white hover:bg-[#191A2A]"
                }`}
              >
                ATTEND
              </button>
              <button
                onClick={() =>
                  setPilihan(pilihan === "tidak_hadir" ? null : "tidak_hadir")
                }
                className={`w-[41.28vw] h-[8.46vw] lg:w-[171px] lg:h-[40px] rounded-[71px] lg:rounded-[38px] font-montreal font-regular text-[3.08vw] lg:text-[18px] transition-all duration-200
                ${
                  pilihan === "tidak_hadir"
                    ? "bg-[#191A2A] text-white border-transparent"
                    : "bg-transparent border border-[#B7B7B7] text-[#191A2A] hover:border-[#191A2A]"
                }`}
              >
                NOT ATTEND
              </button>
            </div>

            <p className="font-montreal font-regular text-[3.08vw] lg:text-[18px] text-[#191A2A] mt-[37px] lg:mt-[43px]">
              {pilihan === "tidak_hadir"
                ? "ARE YOU SURE?"
                : "Confirm your selection?"}
            </p>

            <button
              onClick={handleConfirm}
              className="w-[56.92vw] h-[8.46vw] lg:w-[368px] lg:h-[40px] bg-[#B7B7B7] hover:bg-[#191A2A] transition-colors duration-200 rounded-[71px] lg:rounded-[38px] font-montreal font-regular text-[3.08vw] lg:text-[18px] text-white flex items-center justify-center mt-[28px] lg:mt-[42px]"
            >
              {pilihan === "hadir"
                ? "CONFIRM ATTEND"
                : pilihan === "tidak_hadir"
                  ? "CONFIRM NOT ATTEND"
                  : "CONFIRM"}
            </button>

            <p className="font-montreal font-regular text-[2.56vw] lg:text-[18px] text-[#191A2A] mt-[54px] lg:mt-[81px] text-center tracking-wide leading-[4.36vw] lg:leading-[25px]">
              If you need assistance with your RSVP, <br />
              please contact our support team.
            </p>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[8.46vw] w-[41.03vw] lg:w-[212px] lg:h-[40px] bg-[#12877B] hover:bg-[#0F6B61] active:bg-[#0A4F47] transition-colors duration-200 text-[#FEF8EF] flex items-center justify-center font-montreal font-regular text-[3.08vw] lg:text-[18px] rounded-full gap-[1.54vw] lg:gap-2 mt-[24px] lg:mt-[44px]"
            >
              <Image
                src="/images/Rsvp/Wa.png"
                alt="Logo Wa"
                width={0}
                height={0}
                className="object-contain w-[4.62vw] h-[4.62vw] lg:w-[20px] lg:h-[20px]"
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
//         <div className="pt-[120px] pb-[120px] lg:pt-[236px] lg:pb-[247px] px-4">
//           <div className="flex flex-col items-center justify-center leading-none">
//             <h2 className="font-montreal font-medium text-[24px] lg:text-[64px] text-[#191A2A]">
//               RSVP
//             </h2>
//             <p className="font-montreal font-regular text-[12px] lg:text-[18px] text-[#191A2A] mt-[60px] lg:mt-[65px]">
//               Dear Mr. /Mrs. / Ms.
//             </p>
//             <p className="font-montreal font-regular text-[12px] lg:text-[18px] text-[#191A2A] mt-[26px] lg:mt-[48px]">
//               Sela
//             </p>
//             <p className="font-montreal font-regular text-[12px] lg:text-[18px] text-[#191A2A] text-center mt-[24px] lg:mt-[48px] tracking-widest leading-[20px] lg:leading-[25px]">
//               Kindly confirm your attendance before <br />
//               27 June 2026
//             </p>

//             <div className="flex items-center justify-center gap-[16px] lg:gap-[24px] mt-[34px] lg:mt-[47px]">
//               <button
//                 onClick={() => setPilihan(pilihan === "hadir" ? null : "hadir")}
//                 className={`w-[103px] h-[33px] lg:w-[171px] lg:h-[40px] rounded-[71px] lg:rounded-[38px] font-montreal font-regular text-[12px] lg:text-[18px] transition-all duration-200
//                 ${pilihan === "hadir"
//                   ? "bg-[#191A2A] text-white"
//                   : "bg-[#B7B7B7] text-white hover:bg-[#191A2A]"
//                 }`}
//               >
//                 ATTEND
//               </button>
//               <button
//                 onClick={() => setPilihan(pilihan === "tidak_hadir" ? null : "tidak_hadir")}
//                 className={`w-[161px] h-[33px] lg:w-[171px] lg:h-[40px] rounded-[71px] lg:rounded-[38px] font-montreal font-regular text-[12px] lg:text-[18px] transition-all duration-200
//                 ${pilihan === "tidak_hadir"
//                   ? "bg-[#191A2A] text-white border-transparent"
//                   : "bg-transparent border border-[#B7B7B7] text-[#191A2A] hover:border-[#191A2A]"
//                 }`}
//               >
//                 NOT ATTEND
//               </button>
//             </div>

//             <p className="font-montreal font-regular text-[12px] lg:text-[18px] text-[#191A2A] mt-[37px] lg:mt-[43px]">
//               {pilihan === "tidak_hadir" ? "ARE YOU SURE?" : "Confirm your selection?"}
//             </p>

//             <button
//               onClick={handleConfirm}
//               className="w-[222px] h-[33px] lg:w-[368px] lg:h-[40px] bg-[#B7B7B7] hover:bg-[#191A2A] transition-colors duration-200 rounded-[71px] lg:rounded-[38px] font-montreal font-regular text-[12px] lg:text-[18px] text-white flex items-center justify-center mt-[28px] lg:mt-[42px]"
//             >
//               {pilihan === "hadir"
//                 ? "CONFIRM ATTEND"
//                 : pilihan === "tidak_hadir"
//                 ? "CONFIRM NOT ATTEND"
//                 : "CONFIRM"}
//             </button>

//             <p className="font-montreal font-regular text-[10px] lg:text-[18px] text-[#191A2A] mt-[54px] lg:mt-[81px] text-center tracking-wide leading-[17px] lg:leading-[25px]">
//               If you need assistance with your RSVP, <br />
//               please contact our support team.
//             </p>

//
//               href="https://wa.me/6281234567890"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="h-[33px] w-[160px] lg:h-[40px] lg:w-[212px] bg-[#12877B] hover:bg-[#0F6B61] active:bg-[#0A4F47] transition-colors duration-200 text-[#FEF8EF] flex items-center justify-center font-montreal font-regular text-[12px] lg:text-[18px] rounded-full gap-[6px] lg:gap-2 mt-[24px] lg:mt-[44px]"
//             >
//               <Image
//                 src="/images/Rsvp/Wa.png"
//                 alt="Logo Wa"
//                 width={18}
//                 height={18}
//                 className="object-contain lg:w-[20px] lg:h-[20px]"
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
