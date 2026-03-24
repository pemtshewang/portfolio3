"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-full w-full absolute inset-0 bg-neutral-950",
        className
      )}
    >
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <svg
          ref={svgRef}
          className="absolute h-full w-full inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <BackgroundBeamsCore />
    </div>
  );
};

const BackgroundBeamsCore = () => {
  const beams = [
    {
      top: 10,
      left: 10,
      duration: 3,
      delay: 0,
    },
    {
      top: 20,
      left: 50,
      duration: 4,
      delay: 2,
    },
    {
      top: 60,
      left: 20,
      duration: 5,
      delay: 1,
    },
    {
      top: 80,
      left: 80,
      duration: 4,
      delay: 3,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {beams.map((beam, index) => (
        <div
          key={index}
          className="absolute h-px w-[300px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-beam"
          style={{
            top: `${beam.top}%`,
            left: `${beam.left}%`,
            animationDuration: `${beam.duration}s`,
            animationDelay: `${beam.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
