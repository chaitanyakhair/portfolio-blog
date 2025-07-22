import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "tab-icon.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "tab-icon.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "tab-icon.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
      {
        src: "/images/ss-mobile-dark.png",
        type: "png",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "/images/ss-mobile-light.png",
        type: "png",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "/images/ss-pc-dark.png",
        type: "png",
        sizes: "1920x1080",
        form_factor: "wide",
      },
      {
        src: "/images/ss-pc-light.png",
        type: "png",
        sizes: "1920x1080",
        form_factor: "wide",
      },
    ],
  };
}
