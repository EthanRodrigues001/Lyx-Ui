"use client";

import { useEffect, useRef } from "react";
import { animate, createTimeline, stagger, utils } from "animejs";

const animeSet = utils.set;

export const SphereAnimation = () => {
  const sphereRef = useRef<HTMLDivElement>(null);

  const fitToParent = (el: HTMLElement, pad = 0) => {
    let t: NodeJS.Timeout;
    const resize = () => {
      clearTimeout(t);
      animeSet(el, { scale: 1 });
      const parent = el.parentElement!;
      const ratio = parent.offsetWidth / (el.offsetWidth - pad);
      t = setTimeout(() => animeSet(el, { scale: ratio }), 10);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  };

  useEffect(() => {
    const el = sphereRef.current;
    if (!el) return;

    const paths = el.querySelectorAll<SVGPathElement>(".sphere path");
    const clean = fitToParent(el);

    const breathAnim = animate(el, {
      duration: Infinity,
      autoplay: true,
      onBegin: () => {
        paths.forEach((p) => {
          animate(p, {
            stroke: { to: "rgba(80,80,80,0.35)", duration: 500 },
            translateX: [2, -4],
            translateY: [2, -4],
            easing: "outQuad",
            autoplay: false,
          });
        });
      },
      onUpdate: (ins) => {
        paths.forEach((p, i) => {
          // Your per-path animation logic here
        });
      },
    });

    const introAnim = createTimeline({ autoplay: false }).add({
      targets: paths,
      strokeDashoffset: [{ to: 0 }],
      duration: 3900,
      ease: "inOutCirc",
      delay: stagger(190, { from: "last" }),
    });

    const shadowAnim = animate("#sphereGradient", {
      x1: "25%",
      x2: "25%",
      y1: "0%",
      y2: "75%",
      duration: 30000,
      ease: "outQuint",
      autoplay: true,
    });

    // Play the timelines
    introAnim.play();

    return () => {
      clean();
      breathAnim.pause();
      introAnim.pause();
      shadowAnim.pause();
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="relative w-1/2 pb-[50%]">
        <div
          ref={sphereRef}
          className="absolute left-1/2 top-1/2 -ml-[290px] -mt-[290px] h-[580px] w-[580px]"
        >
          {/* SVG here */}
        </div>
      </div>
    </div>
  );
};
