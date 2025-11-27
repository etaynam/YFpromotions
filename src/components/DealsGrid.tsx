"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { deals } from "@/data/deals";
import { buildCloudinaryUrl } from "@/lib/cloudinary";

const INITIAL_EAGER = 12;
const BATCH_SIZE = 10;
const COVER_IMAGE_URL =
  "https://res.cloudinary.com/dggk53pzv/image/upload/f_auto,q_auto:good,w_1280,c_limit,dpr_auto/v1764250917/cover_landing_ctmomi";
const SKELETON_PLACEHOLDERS = Array.from({ length: BATCH_SIZE }).map(
  (_, index) => `skeleton-${index}`,
);
const PREFETCH_DELAY_MS = 160;

export function DealsGrid() {
  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(deals.length, INITIAL_EAGER + BATCH_SIZE)
  );
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const fallbackTimeoutRef = useRef<number | null>(null);

  const hasMore = visibleCount < deals.length;
  const visibleDeals = useMemo(
    () => deals.slice(0, visibleCount),
    [visibleCount],
  );

  useEffect(() => {
    if (!hasMore) {
      return;
    }

    const sentinel = sentinelRef.current;
    if (!sentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisibleCount((prev) =>
            Math.min(prev + BATCH_SIZE, deals.length)
          );
        }
      },
      { rootMargin: "0px 0px 600px 0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore]);

  useEffect(() => {
    if (!hasMore) {
      return;
    }

    if (fallbackTimeoutRef.current) {
      window.clearTimeout(fallbackTimeoutRef.current);
    }

    fallbackTimeoutRef.current = window.setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + Math.ceil(BATCH_SIZE / 2), deals.length)
      );
    }, 4000);

    return () => {
      if (fallbackTimeoutRef.current) {
        window.clearTimeout(fallbackTimeoutRef.current);
      }
    };
  }, [hasMore, visibleCount]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const controller = new AbortController();
    const urls = deals.map((deal) => buildCloudinaryUrl(deal.filename));
    let index = 0;

    const prefetchNext = () => {
      if (controller.signal.aborted || index >= urls.length) {
        return;
      }

      const preloadImage = new window.Image();
      preloadImage.decoding = "async";
      preloadImage.loading = "eager";
      preloadImage.src = urls[index];

      const handleDone = () => {
        index += 1;
        window.setTimeout(prefetchNext, PREFETCH_DELAY_MS);
      };

      preloadImage.onload = handleDone;
      preloadImage.onerror = handleDone;
    };

    prefetchNext();

    return () => controller.abort();
  }, []);

  const skeletonNeeded = hasMore;

  return (
    <section id="deals-grid" className="min-h-screen w-full text-right">
      <div className="grid min-h-screen w-full grid-cols-1 gap-2 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <picture className="col-span-1 w-full sm:col-span-2 lg:col-span-2 xl:col-span-2">
          <source srcSet={COVER_IMAGE_URL} type="image/avif" />
          <source srcSet={COVER_IMAGE_URL} type="image/webp" />
          <img
            src={COVER_IMAGE_URL}
            loading="eager"
            className="block h-auto w-full"
            alt="Yellow Friday Cover"
          />
        </picture>
        {visibleDeals.map((deal, index) => {
          const imageUrl = buildCloudinaryUrl(deal.filename);
          const shouldLazyLoad = index >= INITIAL_EAGER;

          return (
            <picture
              key={deal.id}
              className="block aspect-square w-full bg-white"
            >
              <source srcSet={imageUrl} type="image/avif" />
              <source srcSet={imageUrl} type="image/webp" />
              <img
                src={imageUrl}
                width={1080}
                height={1080}
                loading={shouldLazyLoad ? "lazy" : "eager"}
                className="h-full w-full object-cover"
                alt={deal.alt}
              />
            </picture>
          );
        })}
        {skeletonNeeded
          ? SKELETON_PLACEHOLDERS.map((placeholder) => (
              <div
                key={placeholder}
                aria-hidden
                className="flex aspect-square w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#f4f4f4] via-[#ececec] to-[#dfdfdf]"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="animate-spin text-[#c6c6c6]"
                  aria-hidden
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="60"
                    strokeDashoffset="20"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-xs font-semibold text-[#777]">
                  טוען מבצע נוסף...
                </span>
              </div>
            ))
          : null}
      </div>
      {hasMore ? (
        <div
          aria-hidden
          ref={sentinelRef}
          className="mb-6 mt-3 flex flex-col items-center gap-2 text-sm font-semibold text-[#444]"
        >
          <span>טוען עוד מבצעים...</span>
          <div className="h-1 w-24 animate-pulse rounded-full bg-[#f4f4f4]" />
        </div>
      ) : null}
    </section>
  );
}

