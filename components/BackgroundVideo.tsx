"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface BackgroundVideoProps {
  src?: string;
  webmSrc?: string;
  mp4Src?: string;
  poster: string;
  className?: string;
  overlayClassName?: string;
  videoScale?: number;
  videoOpacity?: number;
}

export default function BackgroundVideo({
  src,
  webmSrc,
  mp4Src = "/videos/hero-cgi.mp4",
  poster,
  className = "",
  overlayClassName = "",
  videoScale = 1,
  videoOpacity = 1,
}: BackgroundVideoProps) {
  const effectiveWebmSrc = webmSrc || src || "/videos/hero-dgenz.webm";
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    // IntersectionObserver to pause video when outside viewport to optimize performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Silently handle browser autoplay policy blocks if any
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    // Force play on load
    video.play().catch(() => {});

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none pointer-events-none ${className}`}
    >
      {/* Fallback & Poster Image with smooth fade out when video is ready */}
      <Image
        src={poster}
        alt=""
        fill
        unoptimized
        priority
        referrerPolicy="no-referrer"
        aria-hidden="true"
        className={`object-cover object-center md:object-[70%_center] transition-opacity duration-1000 ${
          isVideoReady ? "opacity-20" : "opacity-100"
        }`}
      />

      {/* Main Cinematic 3D CGI Video Element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        onPlaying={() => setIsVideoReady(true)}
        onCanPlay={() => setIsVideoReady(true)}
        style={{
          transform: `scale(${videoScale})`,
          opacity: isVideoReady ? videoOpacity : 0,
        }}
        className="absolute inset-0 w-full h-full object-cover object-center md:object-[70%_center] transition-all duration-700 ease-out z-10"
      >
        {effectiveWebmSrc && <source src={effectiveWebmSrc} type="video/webm" />}
        {mp4Src && <source src={mp4Src} type="video/mp4" />}
      </video>

      {/* Subtle Film Grain Noise Texture Layer */}
      <div className="absolute inset-0 z-20 opacity-[0.035] pointer-events-none mix-blend-overlay bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Layer 2: Subtle Black Edge Vignette */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(3,3,3,0.85)_100%)]" />

      {/* Layer 3: Soft Left-to-Right & Bottom-to-Top Typography Gradient */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-[#030303]/90 via-[#030303]/50 to-transparent" />
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/60" />

      {/* Custom Overlay Class overrides if passed */}
      {overlayClassName && (
        <div className={`absolute inset-0 z-20 pointer-events-none ${overlayClassName}`} />
      )}
    </div>
  );
}
