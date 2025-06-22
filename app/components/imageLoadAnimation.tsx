"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ImageLoadAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
      const apply = () => img.classList.add("loaded");

      if (img.complete && img.naturalHeight !== 0) {
        apply();
      } else {
        img.addEventListener("load", apply, { once: true });
      }
    });
  }, [pathname]);

  return null;
}
