"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  alt: string;
}

export function ImageSlider({ images, alt }: ImageSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    }
  };

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  }, [selectedIndex]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  }, [selectedIndex, images.length]);

  // キーボードナビゲーション
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext]);

  return (
    <>
      <div className="w-full">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="shrink-0 snap-start cursor-pointer transition-transform hover:scale-105"
              style={{ width: "180px" }}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image}
                alt={`${alt} - ${index + 1}`}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </div>
        {/* スクロールインジケーター */}
        <div className="flex justify-center mt-4">
          <div className="relative flex items-center w-32">
            {/* 背景の線 */}
            <div className="absolute w-full h-px bg-border" />
            {/* アクティブな線 */}
            <div
              className="absolute h-px bg-primary transition-all duration-150 ease-out"
              style={{
                width: `${scrollProgress * 100}%`,
              }}
            />
            {/* 始点の丸 */}
            <div className="absolute left-0 -translate-x-1/2 h-2 w-2 rounded-full bg-primary" />
            {/* 終点の丸 */}
            <div
              className={`absolute right-0 translate-x-1/2 h-2 w-2 rounded-full transition-colors duration-150 ${
                scrollProgress >= 0.99 ? "bg-primary" : "bg-border"
              }`}
            />
            {/* 現在位置の丸（始点と終点以外で表示） */}
            {scrollProgress > 0.01 && scrollProgress < 0.99 && (
              <div
                className="absolute h-3 w-3 rounded-full bg-primary border-2 border-white shadow-sm transition-all duration-150 ease-out"
                style={{
                  left: `${scrollProgress * 100}%`,
                  transform: "translateX(-50%)",
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* 拡大モーダル */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setSelectedIndex(null)}
        >
          {/* 前へボタン */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            disabled={selectedIndex === 0}
            className={`absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-all ${
              selectedIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-white hover:scale-110"
            }`}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* 画像 */}
          <div
            className="relative max-h-[90vh] max-w-[70vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedIndex]}
              alt={`${alt} - ${selectedIndex + 1}`}
              className="max-h-[90vh] max-w-[70vw] object-contain rounded-lg"
            />
            {/* 閉じるボタン */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-gray-100"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            {/* カウンター */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>

          {/* 次へボタン */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            disabled={selectedIndex === images.length - 1}
            className={`absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-all ${
              selectedIndex === images.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-white hover:scale-110"
            }`}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
