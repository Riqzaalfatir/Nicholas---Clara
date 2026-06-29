import Hero from "@/components/sections/Hero";
import Couple from "@/components/sections/Couple";
import BrideGroom from "@/components/sections/BrideGroom";
import FotoTeks from "@/components/sections/FotoTeks";
import Gallery from "@/components/sections/Gallery";
import TanggalLokasi from "@/components/sections/TanggalLokasi";
import Rsvp from "@/components/sections/Rsvp";
import WeddingGift from "@/components/sections/WeddingGift";
import Wishes from "@/components/sections/Wishes";

export default function Home() {
  return (
    <>
     <Hero />
     <Couple />
     <BrideGroom />
     <FotoTeks />
     <Gallery />
     <TanggalLokasi />
     <Rsvp />
     <WeddingGift />
     <Wishes />
    </>
  );
}
