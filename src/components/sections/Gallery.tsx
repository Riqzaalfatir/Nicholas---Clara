import React from "react";

const Gallery = () => {
  return (
    <section id="gallery" className="relative w-full h-[390px] lg:h-[759px] flex">
      <picture className="block w-full h-full lg:hidden">
        <img
          src="/images/gallery/Aset-Gallery.webp"
          alt="Nicholas & Clara"
          className="w-full h-full object-cover pointer-events-none"
        />
      </picture>

      <div
        className="hidden lg:block w-1/2 h-full bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/gallery/Aset-GalleryD.webp')" }}
        role="img"
        aria-label="Nicholas & Clara"
      />
      <div
        className="hidden lg:block w-1/2 h-full bg-cover bg-center -ml-px pointer-events-none"
        style={{ backgroundImage: "url('/images/gallery/Aset-GalleryD.webp')" }}
        role="img"
        aria-label="Nicholas & Clara"
      />
    </section>
  );
};

export default Gallery;

// import React from "react";

// const Gallery = () => {
//   return (
//     <section id="gallery" className="relative w-full h-[390px] lg:h-[759px] flex">
//       {/* Mobile - 1 gambar */}
//       <img
//         src="/images/gallery/Aset-Gallery.webp"
//         alt="Nicholas & Clara"
//         className="w-full h-full object-cover lg:hidden"
//       />

//       <div className="hidden lg:flex w-full h-full">
//         <img
//           src="/images/gallery/Aset-GalleryD.webp"
//           alt="Nicholas & Clara"
//           className="block w-1/2 h-full object-cover"
//         />
//         <img
//           src="/images/gallery/Aset-GalleryD.webp"
//           alt="Nicholas & Clara"
//           className="block w-1/2 h-full object-cover -ml-px"
//         />
//       </div>
//     </section>
//   );
// };

// export default Gallery;