"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface BackgroundVideoProps {
  src: string;
  poster: string;
  className?: string;
  overlayClassName?: string;
}

export default function BackgroundVideo({
  src,
  poster,
  className = "",
  overlayClassName = "",
}: BackgroundVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    // IntersectionObserver to pause when out of viewport & play when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Handle autoplay restrictions gracefully
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Poster Image (always rendered, fades down slightly when video is ready) */}
      <Image
        src={poster}
        alt=""
        fill
        unoptimized
        referrerPolicy="no-referrer"
        aria-hidden="true"
        className={`object-cover transition-opacity duration-1000 ${
          isVideoReady ? "opacity-30" : "opacity-100"
        }`}
      />

      {/* Video element with smooth opacity fade once playing */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        onPlaying={() => setIsVideoReady(true)}
        onCanPlay={() => setIsVideoReady(true)}
        className={`relative z-10 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={src} type="video/webm" />
      </video>

      {/* Optional Overlay gradient */}
      {overlayClassName && <div className={`z-20 ${overlayClassName}`} />}
    </div>
  );
}
