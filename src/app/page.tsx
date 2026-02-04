"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import {
  HeartSVG,
  FlowerSVG,
  StarSVG,
  CoupleWalkingSVG,
  CandleSVG,
  RoseSVG,
  ChocolateSVG,
} from "@/components/svgs";

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonText, setNoButtonText] = useState("Nej");
  const [escapeCount, setEscapeCount] = useState(0);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  const noButtonTexts = [
    "Nej",
    "Säker?",
    "Tänk igen!",
    "Verkligen?",
    "Hmm...",
    "Hehe",
    "Kan inte!",
    "Nope!",
    "♥",
  ];

  const handleNoHover = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();

    const container = buttonContainerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const maxX = Math.min(100, containerRect.width / 3);
    const maxY = Math.min(80, containerRect.height / 3);

    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;

    setNoButtonPosition({ x: newX, y: newY });
    setEscapeCount((prev) => prev + 1);
    setNoButtonText(noButtonTexts[Math.min(escapeCount + 1, noButtonTexts.length - 1)]);
  }, [escapeCount, noButtonTexts]);

  if (answer === "yes") {
    return (
      <div className="min-h-screen bg-white overflow-x-hidden flex flex-col items-center justify-center px-4">
        <div className="text-center animate-[fade-in-up_0.5s_ease-out]">
          <div className="relative w-80 h-80 sm:w-[26rem] sm:h-[26rem] md:w-[36rem] md:h-[36rem] mx-auto mb-8">
            <Image
              src="/image_7.png"
              alt="Bild 7"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl text-pink-400 font-light">
            Mer info kommer när det närmar sig
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6">
        <FadeInSection>
          <Image
            src="/logo.png"
            alt="Logo"
            width={800}
            height={800}
            className="w-[22rem] h-[22rem] sm:w-[32rem] sm:h-[32rem] md:w-[42rem] md:h-[42rem] mx-auto mb-6 sm:mb-8 animate-float object-contain"
            priority
          />
        </FadeInSection>
        <FadeInSection delay={600}>
          <p className="text-gray-400 text-base sm:text-lg text-center">
            scrolla ner
          </p>
          <div className="mt-4 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </FadeInSection>
      </section>

      {/* Section 1 - Image Left */}
      <section className="min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl w-full">
          <FadeInSection>
            <div className="relative w-80 h-80 sm:w-[26rem] sm:h-[26rem] md:w-[36rem] md:h-[36rem]">
              <Image
                src="/image_1.png"
                alt="Bild 1"
                fill
                className="object-contain"
              />
            </div>
          </FadeInSection>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <FadeInSection delay={200}>
              <HeartSVG className="w-12 h-12 sm:w-14 sm:h-14 mb-4 animate-pulse-soft" />
            </FadeInSection>
            <FadeInSection delay={300}>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-light leading-relaxed">
                Jag är så glad
              </p>
            </FadeInSection>
            <FadeInSection delay={400}>
              <p className="text-xl sm:text-2xl md:text-3xl text-pink-400 font-light leading-relaxed mt-2">
                att jag träffade dig
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Section 3 - Image Left */}
      <section className="min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl w-full">
          <FadeInSection>
            <div className="relative w-80 h-80 sm:w-[26rem] sm:h-[26rem] md:w-[36rem] md:h-[36rem]">
              <Image
                src="/image_3.png"
                alt="Bild 3"
                fill
                className="object-contain"
              />
            </div>
          </FadeInSection>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <FadeInSection delay={200}>
              <CoupleWalkingSVG className="w-20 h-16 sm:w-24 sm:h-20 mb-4 animate-float" />
            </FadeInSection>
            <FadeInSection delay={300}>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-light leading-relaxed">
                Tänk vad mycket kul
              </p>
            </FadeInSection>
            <FadeInSection delay={400}>
              <p className="text-xl sm:text-2xl md:text-3xl text-pink-400 font-light leading-relaxed mt-2">
                vi ska hitta på
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Section 4 - Image 6 Centered */}
      <section className="min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <FadeInSection>
          <div className="relative w-80 h-80 sm:w-[26rem] sm:h-[26rem] md:w-[36rem] md:h-[36rem] mx-auto">
            <Image
              src="/image_6.png"
              alt="Bild 6"
              fill
              className="object-contain"
            />
          </div>
        </FadeInSection>
        <FadeInSection delay={200}>
          <p className="text-xl sm:text-2xl md:text-3xl text-pink-400 text-center font-light mt-6">
            Typ som något sånt här bla
          </p>
        </FadeInSection>
      </section>

      {/* Final Section - The Question */}
      <section className="min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <FadeInSection>
          <div className="flex gap-1 sm:gap-2 mb-6 sm:mb-8">
            <HeartSVG className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse-soft" />
            <HeartSVG className="w-12 h-12 sm:w-14 sm:h-14 animate-pulse-soft" style={{ animationDelay: "0.2s" }} />
            <HeartSVG className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse-soft" style={{ animationDelay: "0.4s" }} />
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 text-center font-light mb-4 px-2">
            Så jag undrar...
          </h2>
        </FadeInSection>

        <FadeInSection delay={500}>
          <p className="text-2xl sm:text-3xl md:text-5xl text-pink-400 text-center font-light mb-8 sm:mb-12 px-2">
            Vill du fira alla hjärtans dag med mig?
          </p>
        </FadeInSection>

        <FadeInSection delay={600}>
          <div className="relative w-80 h-80 sm:w-[26rem] sm:h-[26rem] md:w-[36rem] md:h-[36rem] mx-auto mb-8 sm:mb-12">
            <Image
              src="/image_4.png"
              alt="Bild 4"
              fill
              className="object-contain"
            />
          </div>
        </FadeInSection>

        {!answer && (
          <FadeInSection delay={800}>
            <div
              ref={buttonContainerRef}
              className="relative flex gap-4 sm:gap-6 items-center justify-center w-full min-h-[120px] sm:min-h-[150px]"
            >
              <button
                onClick={() => setAnswer("yes")}
                className="px-8 py-3 sm:px-10 sm:py-4 bg-pink-400 text-white text-lg sm:text-xl font-light rounded-full hover:bg-pink-500 active:bg-pink-500 transition-all hover:scale-105 active:scale-105 shadow-lg z-10"
              >
                Ja
              </button>
              <button
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                  transition: "transform 0.2s ease-out",
                }}
                className="px-8 py-3 sm:px-10 sm:py-4 border-2 border-pink-300 text-pink-400 text-lg sm:text-xl font-light rounded-full hover:bg-pink-50 active:bg-pink-50 select-none"
              >
                {noButtonText}
              </button>
            </div>
          </FadeInSection>
        )}

        {answer === "no" && (
          <div className="text-center animate-[fade-in-up_0.5s_ease-out] px-4">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-500 font-light mb-4">
              Okej... men jag kommer alltid vara här
            </p>
            <HeartSVG className="w-12 h-12 sm:w-16 sm:h-16 mx-auto opacity-50" />
          </div>
        )}
      </section>

      {/* Footer spacer */}
      <div className="h-16 sm:h-20" />
    </div>
  );
}
