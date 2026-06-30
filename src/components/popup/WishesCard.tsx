"use client";

type PesanItem = {
  id: number;
  nama: string;
  pesan: string;
};

type WishesCardProps = {
  data: PesanItem | null;
  onClose: () => void;
};

const WishesCard = ({ data, onClose }: WishesCardProps) => {
  if (!data) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm z-50 px-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#F2F1E8] rounded-2xl p-8 w-full max-w-[330px] text-center shadow-xl border border-[#191A2A]/10"
      >
        <p className="font-montreal text-[40px] text-[#191A2A]/15 leading-none italic select-none -mb-2">
          "
        </p>

        <h3 className="text-[18px] text-[#191A2A] font-montreal font-bold tracking-wide">
          {data.nama}
        </h3>

        <div className="w-[40px] h-[1px] bg-[#191A2A]/30 mx-auto my-4" />

        <p className="text-[13px] font-montreal font-regular leading-relaxed text-[#191A2A]/85 line-clamp-6">
          {data.pesan}
        </p>
      </div>

      <button
        onClick={onClose}
        className="mt-5 w-full max-w-[330px] bg-[#191A2A] hover:bg-[#191A2A]/80 active:scale-95 transition-all duration-200 text-white px-6 py-3 rounded-full text-[12px] font-montreal font-medium tracking-widest uppercase"
      >
        BACK
      </button>
    </div>
  );
};

export default WishesCard;