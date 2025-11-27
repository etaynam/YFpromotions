"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { deals } from "@/data/deals";
import { buildCloudinaryUrl } from "@/lib/cloudinary";

const INITIAL_EAGER = 8;
const BATCH_SIZE = 12;
const COVER_IMAGE_URL =
  "https://res.cloudinary.com/dggk53pzv/image/upload/f_auto,q_auto,w_auto:100,c_limit,dpr_auto/v1764250917/cover_landing_ctmomi";

export function DealsGrid() {
  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(deals.length, INITIAL_EAGER + BATCH_SIZE)
  );
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const hasMore = visibleCount < deals.length;
  const visibleDeals = useMemo(
    () => deals.slice(0, visibleCount),
    [visibleCount]
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
      { rootMargin: "0px 0px 240px 0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <section id="deals-grid" className="min-h-screen w-full text-right">
      <div className="grid min-h-screen w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
              className="block aspect-square w-full bg-[#fff2a1]"
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
      </div>
      {hasMore ? (
        <div aria-hidden ref={sentinelRef} className="h-1 w-full" />
      ) : null}
    </section>
  );
}

