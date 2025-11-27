"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

const SHARE_TEXT =
  "וואו! איזה מבצעים מטורפים במחסני השוק – תעבירו הלאה לפני שנגמר!";
const SHARE_THUMBNAIL_URL =
  "https://res.cloudinary.com/dggk53pzv/image/upload/v1764250917/cover_landing_ctmomi.png";
const STATUS_TIMEOUT = 4000;

const createWhatsappMessage = (pageUrl: string) =>
  `${SHARE_TEXT}\n\n${pageUrl}\nתמונה מקדימה: ${SHARE_THUMBNAIL_URL}`;

export function ShareBanner() {
  const [status, setStatus] = useState<string | null>(null);

  const handleShare = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    const url = window.location.href;
    const message = createWhatsappMessage(url);
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message,
    )}`;

    const popup = window.open(whatsappShareUrl, "_blank", "noopener,noreferrer");

    if (!popup) {
      window.location.href = whatsappShareUrl;
    }

    setStatus("פותחים את וואטסאפ עם הקישור והתמונה");
    window.setTimeout(() => setStatus(null), STATUS_TIMEOUT);
  }, []);

  return (
    <section className="sticky bottom-0 z-20 mt-4 flex flex-col items-center gap-2 bg-[#25d366] px-5 py-4 text-center text-white shadow-[0_-10px_25px_rgba(0,0,0,0.18)] sm:flex-row sm:justify-between sm:text-right">
      <p className="text-base font-semibold text-white">
        תעזרו לחברים ולמשפחה לחסוך &gt;
      </p>
      <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-3">
        <button
          type="button"
          onClick={handleShare}
          className="flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-black uppercase tracking-wide text-[#25d366] transition hover:scale-105 hover:bg-white/90"
        >
          <Image
            src="/whatsapp.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden
            className="h-5 w-5"
          />
          שתפו את המבצעים בווטסאפ
        </button>
        {status ? (
          <span className="text-xs font-semibold text-white/90">{status}</span>
        ) : (
          <span className="text-xs text-white/80">
            לחיצה אחת פותחת שיתוף בווטסאפ עם קישור ותמונה
          </span>
        )}
      </div>
    </section>
  );
}

