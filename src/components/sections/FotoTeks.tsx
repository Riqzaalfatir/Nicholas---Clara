"use client";
import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { fadeUp, fadeRight, fadeLeft } from "@/lib/animation";

const AUTOPLAY_DELAY = 3500;

const AutoSlideImage = ({
  images,
  alt,
  onImageClick,
  startDelay = 0,
}: {
  images: string[];
  alt: string;
  onImageClick: (images: string[], index: number) => void;
  startDelay?: number;
}) => {
  const plugins = useMemo(
    () => [Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false })],
    [],
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins()?.autoplay;
    if (!autoplay) return;

    // stop dulu pas mount, baru jalan lagi setelah startDelay
    autoplay.stop();
    const timer = setTimeout(() => {
      autoplay.play();
    }, startDelay);

    return () => clearTimeout(timer);
  }, [emblaApi, startDelay]);

  return (
    <div className="overflow-hidden w-full h-full" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative flex-none w-full h-full cursor-pointer"
            onClick={() => onImageClick(images, index)}
          >
            <img
              src={src}
              alt={`${alt} ${index + 1}`}
              className="w-full h-full object-cover block pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const photosYour: string[] = [
  "/images/fototeks/Couple1.webp",
  "/images/fototeks/Couple3.webp",
];

const photosIsOur: string[] = [
  "/images/fototeks/Couple2.webp",
  "/images/fototeks/Couple4.webp",
];

const FotoTeks = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxSlides, setLightboxSlides] = useState<string[]>([]);
  const scrollPosRef = useRef<number>(0);

  const handleImageClick = useCallback((images: string[], index: number) => {
    scrollPosRef.current = window.scrollY;
    setLightboxSlides(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const handleClose = () => {
    setLightboxOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: scrollPosRef.current, behavior: "instant" });
    }, 10);
  };

  return (
    <>
      <section className="bg-[#F2F1E8]">
        <div className="py-[120px] lg:py-[240px] flex flex-col items-center justify-center gap-[5.13vw] lg:gap-[60px]">
          {/* YOUR */}
          <div className="flex items-center gap-[5.13vw] lg:gap-[48px] ml-[7.18vw] lg:ml-[4vw]">
            <motion.p
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="font-montreal font-medium text-[3.59vw] lg:text-[36px] text-[#191A2A] pt-[5.64vw] lg:pt-[45px]"
            >
              YOUR
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
              className="w-[31.28vw] h-[20.51vw] lg:w-[305px] lg:h-[199px] shrink-0 overflow-hidden"
            >
              <AutoSlideImage
                images={photosYour}
                alt="Couple1"
                onImageClick={handleImageClick}
                startDelay={200}
              />
            </motion.div>
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="font-montreal font-medium text-[3.59vw] lg:text-[36px] text-[#191A2A] pt-[5.64vw] lg:pt-[45px]"
            >
              PRESENCE
            </motion.p>
          </div>

          {/* IS OUR */}
          <div className="flex items-center gap-[4.62vw] lg:gap-[44px] -ml-[4.62vw] lg:-ml-[3.5vw]">
            <motion.p
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="font-montreal font-medium text-[3.59vw] lg:text-[36px] text-[#191A2A]"
            >
              IS OUR
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
              className="w-[31.28vw] h-[20.51vw] lg:w-[305px] lg:h-[199px] shrink-0 overflow-hidden"
            >
              <AutoSlideImage
                images={photosIsOur}
                alt="Couple2"
                onImageClick={handleImageClick}
                startDelay={400}
              />
            </motion.div>
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="font-montreal font-medium text-[3.59vw] lg:text-[36px] text-[#191A2A]"
            >
              BLESSING
            </motion.p>
          </div>
        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={handleClose}
        index={lightboxIndex}
        slides={lightboxSlides.map((src) => ({ src }))}
        plugins={[Thumbnails, Zoom, Counter]}
        noScroll={{ disabled: true }}
      />
    </>
  );
};

export default FotoTeks;
