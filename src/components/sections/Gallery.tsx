import React from "react";

const Gallery = () => {
  return (
    <section className="relative w-full h-[390px] lg:h-[759px] flex">
      {/* Mobile - 1 gambar */}
      <img
        src="/images/gallery/Aset-Gallery.webp"
        alt="Nicholas & Clara"
        className="w-full h-full object-cover lg:hidden"
      />

      <div className="hidden lg:flex w-full h-full">
        <img
          src="/images/gallery/Aset-GalleryD.webp"
          alt="Nicholas & Clara"
          className="block w-1/2 h-full object-cover"
        />
        <img
          src="/images/gallery/Aset-GalleryD.webp"
          alt="Nicholas & Clara"
          className="block w-1/2 h-full object-cover -ml-px"
        />
      </div>
    </section>
  );
};

export default Gallery;