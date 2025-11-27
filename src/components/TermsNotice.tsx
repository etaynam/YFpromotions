const TERMS_PDF_PATH = encodeURI(
  "/תקנון מבצעים Yellow Friday 28.11.2025.pdf",
);

export function TermsNotice() {
  return (
    <section className="bg-white px-5 pb-36 pt-6 text-xs leading-relaxed text-[#222] sm:text-sm sm:pb-40">
      <p>
        המבצעים תקפים ביום אחד בלבד-28.11.2025-עד גמר המלאי. חלק מהמוצרים
        בהגבלת רכישה ובקנייה מעל 99 ₪. ייתכנו הבדלים במחיר המקורי בין הסניפים.
        הפרסום בסניף הוא הקובע. כל המבצעים כפופים לתקנון המלא המופיע בקישור כאן{" "}
        <a
          href={TERMS_PDF_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#25d366] underline underline-offset-2"
        >
          הקישור כאן &gt;
        </a>
      </p>
    </section>
  );
}

