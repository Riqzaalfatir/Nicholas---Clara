"use client";

import { dummyPesan } from "@/components/data/wishes";
import { useState, useEffect } from "react";
import Image from "next/image";
import WishesCard from "@/components/popup/WishesCard";
import NotifModal from "@/components/popup/NotifModal";
import { motion } from "framer-motion";
import { fadeUp, fadeIn} from "@/lib/animation";

type PesanItem = {
  id: number;
  nama: string;
  pesan: string;
};

type ModalType = string | null;

const Wishes = () => {
  const [nama, setNama] = useState<string>("");
  const [pesan, setPesan] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedMessage, setSelectedMessage] = useState<PesanItem | null>(
    null,
  );
  const [pesanList, setPesanList] = useState<PesanItem[]>(() => {
    if (typeof window === "undefined") return dummyPesan;
    const saved = localStorage.getItem("pesan");
    return saved ? JSON.parse(saved) : dummyPesan;
  });
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleSubmit = (): void => {
    if (!nama || !pesan) {
      setModalType("incomplete_wishes");
      return;
    }

    const newPesan: PesanItem = {
      id: Date.now(),
      nama,
      pesan,
    };

    setPesanList((prev) => [newPesan, ...prev]);
    setShowPopup(true);
    setNama("");
    setPesan("");
  };

  useEffect(() => {
    localStorage.setItem("pesan", JSON.stringify(pesanList));
  }, [pesanList]);

  return (
    <>
      <section
        id="wishes"
        className="bg-[#F2F1E8] w-full flex flex-col items-center px-[0.5vw] pt-[120px] pb-[120px] lg:pt-[236px] lg:pb-[35px] leading-none"
      >
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="font-montreal font-medium text-[6.15vw] lg:text-[64px] text-[#191A2A]"
        >
          Share Your Wishes
        </motion.h2>

        <div className="w-full max-w-[72.82vw] lg:max-w-[583px] mx-auto mt-[50px] lg:mt-[65px]">
          <div className="flex flex-col gap-[20px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
            >
              <input
                type="text"
                value={nama}
                placeholder="Desy (Tester)"
                onChange={(e) => setNama(e.target.value)}
                className="w-full text-[#191A2A] font-montreal font-regular text-[3.08vw] lg:text-[18px] bg-transparent border border-[#191A2A]/40 px-[3.33vw] lg:px-[23px] h-[8.46vw] lg:h-[40px] rounded-full outline-none placeholder:text-[#191A2A]/50"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
            >
              <textarea
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                className="w-full text-[#191A2A] font-montreal font-regular text-[3.08vw] lg:text-[18px] bg-transparent border border-[#191A2A]/40 px-[3.33vw] lg:px-[23px] py-[2.56vw] lg:py-[10px] h-[15.38vw] lg:h-[261px] rounded-xl outline-none placeholder:text-[#191A2A]/50 resize-none"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
            >
              <button
                onClick={handleSubmit}
                className="group bg-[#B7B7B7] hover:bg-[#191A2A] active:scale-95 transition-all duration-200 w-full rounded-full h-[8.46vw] lg:h-[40px] text-[3.08vw] lg:text-[18px] font-montreal font-regular uppercase flex items-center justify-center gap-0.5 lg:gap-1 text-[#191A2A] hover:text-white tracking-widest"
              >
                <Image
                  src="/images/wishes/Panah.svg"
                  alt="Kirim"
                  width={20}
                  height={20}
                  className="object-contain w-[18px] lg:w-[25px] group-hover:invert transition-all duration-200"
                />
                Send
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className={`w-full rounded-2xl h-[84.36vw] lg:h-[519px] overflow-y-auto scrollbar-hide ${
                showAll ? "bg-transparent rounded-none" : "bg-[#B7B7B7]"
              }`}
            >
              {!showAll ? (
                <div>
                  <div className="sticky top-0 w-full h-[12px] lg:h-[15px] bg-[#B7B7B7] z-10" />

                  <div className="px-[3.33vw] py-[0.51vw] lg:px-[23px] lg:py-[5px]">
                    {pesanList.slice(0, 8).map((item, index, array) => (
                      <div key={item.id}>
                        <p className="text-[#191A2A] font-montreal font-bold text-[3.08vw] mb-[1.03vw] lg:text-[18px] lg:mb-[17px]">
                          {item.nama}
                        </p>

                        <p className="text-[#191A2A] font-montreal font-regular text-[2.56vw] lg:text-[18px] tracking-[0.13vw] tracking-wide mb-[2.56vw] lg:mb-[17px] break-words">
                          {item.pesan}
                        </p>

                        {index !== array.length - 1 && (
                          <div className="border-t border-[#191A2A] mt-[2.05vw] mb-[3.85vw] lg:mt-[0px] lg:mb-[20px]" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="sticky bottom-0 w-full h-[12px] lg:h-[5px] bg-[#B7B7B7] z-10" />
                </div>
              ) : (
  <div className="w-full">
    <div className="grid grid-cols-2 lg:grid-cols-2 gap-[2.05vw] lg:gap-[20px] items-stretch">
      {pesanList.map((item, index) => (
        <motion.div
          key={item.id}
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: index * 0.1,
          }}
          onClick={() => setSelectedMessage(item)}
          className="rounded-xl overflow-hidden border border-[#191A2A]/20 bg-[#E0DFDA] flex flex-col cursor-pointer active:scale-95 transition-transform duration-150"
        >
          <div className="p-[2.56vw] lg:p-[20px] relative flex-1 flex flex-col justify-center">
            <p className="absolute top-[1.54vw] left-[2.05vw] lg:top-[12px] lg:left-[16px] text-[6.15vw] lg:text-[38px] font-montreal text-[#191A2A]/30">
              "
            </p>

            <p className="font-montreal font-regular text-[2.56vw] lg:text-[16px] text-[#191A2A] text-left mt-5 mb-2 line-clamp-4 leading-[3.85vw] lg:leading-[24px]">
              {item.pesan}
            </p>
          </div>

          <div className="bg-[#191A2A] h-[7.69vw] lg:h-[48px] flex items-center justify-center px-4">
            <p className="text-white text-center line-clamp-1 text-[2.56vw] lg:text-[16px] font-montreal">
              {item.nama}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
)}
            </motion.div>

            <WishesCard
              data={selectedMessage}
              onClose={() => setSelectedMessage(null)}
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="group bg-[#B7B7B7] hover:bg-[#191A2A] active:scale-95 transition-all duration-200 w-full rounded-full h-[8.46vw] lg:h-[40px] text-[3.08vw] lg:text-[18px] font-montreal font-regular uppercase flex items-center justify-center gap-1.5 text-[#191A2A] hover:text-white tracking-widest"
              >
                <Image
                  src="/images/wishes/Pesan.png"
                  alt="Pesan"
                  width={20}
                  height={20}
                  className="object-cover w-[20px] lg:w-[25px] group-hover:invert transition-all duration-200"
                />
                {showAll ? "BACK" : "VIEW ALL MESSAGES"}
              </button>
            </motion.div>
          </div>
        </div>

        {showPopup && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-[4px] px-[6.15vw]">
            <div className="relative overflow-hidden rounded-[28px] border border-[#191A2A]/20 bg-[#F2F1E8] shadow-lg w-full max-w-[84.62vw]">
              <div className="absolute top-0 left-0 w-full h-[1.54vw] bg-[#191A2A]" />

              <div className="px-[7.18vw] pt-[9.23vw] pb-[7.18vw] flex flex-col items-center text-center">
                <div className="w-[18.46vw] h-[18.46vw] rounded-full bg-[#B7B7B7]/30 border border-[#191A2A]/10 flex items-center justify-center mb-[5.13vw]">
                  <Image
                    src="/images/wishes/Pesan.svg"
                    alt="Success"
                    width={0}
                    height={0}
                    className="object-contain w-[8.72vw] h-[8.72vw]"
                  />
                </div>

                <h3 className="font-montreal font-medium text-[6.15vw] text-[#191A2A]">
                  Thank You
                </h3>

                <div className="w-[17.95vw] h-[1px] bg-[#191A2A]/30 my-[4.10vw]" />

                <p className="font-montreal font-regular text-[3.08vw] leading-[5.64vw] text-[#191A2A]/85 max-w-[61.54vw]">
                  Your wishes and prayers mean so much to us. Thank you for
                  sharing your kind words on our special day.
                </p>

                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-[7.18vw] bg-[#191A2A] hover:bg-[#191A2A]/80 active:scale-95 transition-all duration-300 text-white font-montreal font-regular uppercase text-[2.82vw] px-[8.21vw] h-[9.74vw] rounded-full"
                >
                  Close
                </button>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#191A2A]" />
            </div>
          </div>
        )}
      </section>

      {modalType && (
        <NotifModal
          type={modalType}
          onClose={() => setModalType(null)}
          onConfirm={() => setModalType(null)}
          waNumber="6281234567890"
        />
      )}
    </>
  );
};

export default Wishes;

// SEBELUM DI VW KAN
// "use client";

// import { dummyPesan } from "@/components/data/wishes";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import WishesCard from "@/components/popup/WishesCard";
// import NotifModal from "@/components/popup/NotifModal";

// type PesanItem = {
//   id: number;
//   nama: string;
//   pesan: string;
// };

// type ModalType = string | null;

// const Wishes = () => {
//   const [nama, setNama] = useState<string>("");
//   const [pesan, setPesan] = useState<string>("");
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [showAll, setShowAll] = useState<boolean>(false);
//   const [selectedMessage, setSelectedMessage] = useState<PesanItem | null>(null);
//   const [pesanList, setPesanList] = useState<PesanItem[]>(() => {
//     if (typeof window === "undefined") return dummyPesan;
//     const saved = localStorage.getItem("pesan");
//     return saved ? JSON.parse(saved) : dummyPesan;
//   });
//   const [modalType, setModalType] = useState<ModalType>(null);

//   const handleSubmit = (): void => {
//     if (!nama || !pesan) {
//       setModalType("incomplete_wishes");
//       return;
//     }

//     const newPesan: PesanItem = {
//       id: Date.now(),
//       nama,
//       pesan,
//     };

//     setPesanList((prev) => [newPesan, ...prev]);
//     setShowPopup(true);
//     setNama("");
//     setPesan("");
//   };

//   useEffect(() => {
//     localStorage.setItem("pesan", JSON.stringify(pesanList));
//   }, [pesanList]);

//   return (
//     <>
//       <section
//         id="wishes"
//         className="bg-[#F2F1E8] w-full flex flex-col items-center px-8 pt-[120px] pb-[120px] leading-none"
//       >
//         <h2 className="font-montreal font-medium text-[24px] text-[#191A2A]">
//           Share Your Wishes
//         </h2>

//         <div className="w-full max-w-[284px] mx-auto mt-[60px]">
//           <div className="flex flex-col gap-[20px]">

//             <input
//               type="text"
//               value={nama}
//               placeholder="Desy (Tester)"
//               onChange={(e) => setNama(e.target.value)}
//               className="w-full text-[#191A2A] font-montreal font-regular text-[12px] bg-transparent border border-[#191A2A]/40 px-[13px] h-[33px] rounded-full outline-none placeholder:text-[#191A2A]/50"
//             />

//             <textarea
//               value={pesan}
//               onChange={(e) => setPesan(e.target.value)}
//               className="w-full text-[#191A2A] font-montreal font-regular text-[12px] bg-transparent border border-[#191A2A]/40 px-[13px] py-[10px] h-[60px] rounded-xl outline-none placeholder:text-[#191A2A]/50 resize-none"
//             />

//             <button
//               onClick={handleSubmit}
//               className="bg-[#B7B7B7] transition-colors duration-200 w-full rounded-full h-[33px] text-[12px] font-montreal font-regular uppercase flex items-center justify-center gap-1 text-[#191A2A] tracking-widest"
//             >
//               <Image
//                 src="/images/wishes/Panah.svg"
//                 alt="Kirim"
//                 width={17}
//                 height={17}
//                 className="object-contain"
//               />
//               Send
//             </button>

//             <div
//               className={`w-full rounded-2xl h-[329px] overflow-y-auto scrollbar-hide ${
//                 showAll
//                   ? "bg-transparent rounded-none"
//                   : "bg-[#E0DFDA]"
//               }`}
//             >
//               {!showAll ? (
//                 <div>
//                   <div className="sticky top-0 w-full h-[18px] bg-[#E0DFDA] z-10" />

//                   <div className="px-[13px] py-[2px]">
//                     {pesanList.slice(0, 8).map((item, index, array) => (
//                       <div key={item.id}>
//                         <p className="text-[#191A2A] font-montreal font-bold text-[12px] mb-[4px]">
//                           {item.nama}
//                         </p>

//                         <p className="text-[#191A2A] font-montreal font-regular text-[10px] tracking-[0.5px] mb-[10px]">
//                           {item.pesan}
//                         </p>

//                         {index !== array.length - 1 && (
//                           <div className="border-t border-[#191A2A] mt-[8px] mb-[15px]" />
//                         )}
//                       </div>
//                     ))}
//                   </div>

//                   <div className="sticky bottom-0 w-full h-[18px] bg-[#E0DFDA] z-10" />
//                 </div>
//               ) : (
//                 <div className="w-full">
//                   <div className="grid grid-cols-2 gap-[8px] items-stretch">
//                     {pesanList.map((item) => (
//                       <div
//                         key={item.id}
//                         onClick={() => setSelectedMessage(item)}
//                         className="rounded-xl overflow-hidden border border-[#191A2A]/20 bg-[#E0DFDA] flex flex-col cursor-pointer active:scale-95 transition-transform duration-150"
//                       >
//                         <div className="p-[10px] relative flex-1 flex flex-col justify-center">
//                           <p className="absolute top-[6px] left-[8px] text-[24px] font-montreal text-[#191A2A]/30">
//                             "
//                           </p>

//                           <p className="font-montreal font-regular text-[10px] text-[#191A2A] text-left mt-5 mb-2 line-clamp-4 leading-[15px]">
//                             {item.pesan}
//                           </p>
//                         </div>

//                         <div className="bg-[#191A2A] h-[30px] flex items-center justify-center px-4">
//                           <p className="text-white text-center line-clamp-1 text-[10px] font-montreal">
//                             {item.nama}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             <WishesCard
//               data={selectedMessage}
//               onClose={() => setSelectedMessage(null)}
//             />

//             <button
//               onClick={() => setShowAll(!showAll)}
//               className="bg-[#B7B7B7] transition-colors duration-200 w-full rounded-full h-[33px] text-[12px] font-montreal font-regular uppercase flex items-center justify-center gap-1.5 text-[#191A2A] tracking-widest"
//             >
//               <Image
//                 src="/images/wishes/Pesan.png"
//                 alt="Pesan"
//                 width={15}
//                 height={19}
//                 className="object-cover"
//               />

//               {showAll ? "BACK" : "VIEW ALL MESSAGES"}
//             </button>
//           </div>
//         </div>

//         {showPopup && (
//           <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-[4px] px-6">
//             <div className="relative overflow-hidden rounded-[28px] border border-[#191A2A]/20 bg-[#F2F1E8] shadow-lg w-full max-w-[330px]">
//               <div className="absolute top-0 left-0 w-full h-[6px] bg-[#191A2A]" />

//               <div className="px-7 pt-9 pb-7 flex flex-col items-center text-center">
//                 <div className="w-[72px] h-[72px] rounded-full bg-[#B7B7B7]/30 border border-[#191A2A]/10 flex items-center justify-center mb-5">
//                   <Image
//                     src="/images/wishes/Pesan.svg"
//                     alt="Success"
//                     width={34}
//                     height={34}
//                     className="object-contain"
//                   />
//                 </div>

//                 <h3 className="font-montreal font-medium text-[24px] text-[#191A2A]">
//                   Thank You
//                 </h3>

//                 <div className="w-[70px] h-[1px] bg-[#191A2A]/30 my-4" />

//                 <p className="font-montreal font-regular text-[12px] leading-[22px] text-[#191A2A]/85 max-w-[240px]">
//                   Your wishes and prayers mean so much to us. Thank you for
//                   sharing your kind words on our special day.
//                 </p>

//                 <button
//                   onClick={() => setShowPopup(false)}
//                   className="mt-7 bg-[#191A2A] hover:bg-[#191A2A]/80 active:scale-95 transition-all duration-300 text-white font-montreal font-regular uppercase text-[11px] px-8 h-[38px] rounded-full"
//                 >
//                   Close
//                 </button>
//               </div>

//               <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#191A2A]" />
//             </div>
//           </div>
//         )}
//       </section>

//       {modalType && (
//         <NotifModal
//           type={modalType}
//           onClose={() => setModalType(null)}
//           onConfirm={() => setModalType(null)}
//           waNumber="6281234567890"
//         />
//       )}
//     </>
//   );
// };

// export default Wishes;
