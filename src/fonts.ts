import localFont from "next/font/local";

export const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/helvetica/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export const neueMontreal = localFont({
  src: [
    {
      path: "../public/fonts/neueMontreal/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/neueMontreal/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/neueMontreal/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/neueMontreal/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});