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
        <div className="pt-[120px] pb-[120px] px-4">
          <div className="flex flex-col items-center justify-center leading-none">
            <h2 className="font-montreal font-medium text-[24px] text-[#191A2A]">
              RSVP
            </h2>
            <p className="font-montreal font-regular text-[12px] text-[#191A2A] mt-[60px]">
              Dear,
            </p>
            <p className="font-montreal font-regular text-[12px] text-[#191A2A] mt-[26px]">
              Sela
            </p>
            <p className="font-montreal font-regular text-[12px] text-[#191A2A] text-center mt-[24px]">
              Kindly confirm your attendance <br /> before 27 June 2026
            </p>

            <div className="flex items-center justify-center gap-[16px] mt-[34px]">
              <button
                onClick={() => setPilihan(pilihan === "hadir" ? null : "hadir")}
                className={`w-[103px] h-[33px] rounded-[71px] font-montreal font-regular text-[12px] transition-all duration-200
                ${pilihan === "hadir"
                  ? "bg-[#191A2A] text-white"
                  : "bg-[#B7B7B7] text-white hover:bg-[#191A2A]"
                }`}
              >
                ATTEND
              </button>
              <button
                onClick={() => setPilihan(pilihan === "tidak_hadir" ? null : "tidak_hadir")}
                className={`w-[161px] h-[33px] rounded-[71px] font-montreal font-regular text-[12px] transition-all duration-200
                ${pilihan === "tidak_hadir"
                  ? "bg-[#191A2A] text-white border-transparent"
                  : "bg-transparent border border-[#B7B7B7] text-[#191A2A] hover:border-[#191A2A]"
                }`}
              >
                UNABLE TO ATTEND
              </button>
            </div>

            <p className="font-montreal font-regular text-[12px] text-[#191A2A] mt-[37px]">
              {pilihan === "tidak_hadir" ? "ARE YOU SURE?" : "Confirm your selection?"}
            </p>

            <button
              onClick={handleConfirm}
              className="w-[222px] h-[33px] bg-[#B7B7B7] hover:bg-[#191A2A] transition-colors duration-200 rounded-[71px] font-montreal font-regular text-[12px] text-white flex items-center justify-center mt-[28px]"
            >
              {pilihan === "hadir"
                ? "CONFIRM ATTEND"
                : pilihan === "tidak_hadir"
                ? "CONFIRM NOT ATTEND"
                : "CONFIRM"}
            </button>

            <p className="font-montreal font-regular text-[10px] text-[#191A2A] mt-[54px] text-center">
              If you need assistance with your RSVP, <br />
              please contact our support team.
            </p>
            
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[33px] w-[160px] lg:h-[40px] lg:w-[212px] bg-[#12877B] hover:bg-[#0F6B61] active:bg-[#0A4F47] transition-colors duration-200 text-[#FEF8EF] flex items-center justify-center font-montreal font-regular text-[12px] lg:text-[18px] rounded-full gap-[6px] mt-[24px] lg:mt-[44px]"
            >
              <Image
                src="/images/Rsvp/Logo-Wa.svg"
                alt="Logo Wa"
                width={18}
                height={18}
                className="object-contain"
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