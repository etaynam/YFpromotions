export type Deal = {
  id: string;
  filename: string;
  alt: string;
};

type DealEntry = string | { filename: string; alt?: string };

/**
 * הכניסו לכאן את כל שמות הקבצים בדיוק כפי שהם בתקייה public/images
 * כולל הסיומת (.jpeg).
 *
 * דוגמה לשורה:
 * "1080x1080-1.jpeg",
 *
 * רוצים לשלוט ב-alt? השתמשו באובייקט:
 * { filename: "1080x1080-1.jpeg", alt: "מבצע מטורף 70% הנחה" },
 */
const DEAL_ENTRIES: DealEntry[] = [
  "1080x1080.jpeg",
  "1080x1080-1.jpeg",
  "1080x1080-2.jpeg",
  "1080x1080-3.jpeg",
  "1080x1080-4.jpeg",
  "1080x1080-5.jpeg",
  "1080x1080-6.jpeg",
  "1080x1080-7.jpeg",
  "1080x1080-8.jpeg",
  "1080x1080-9.jpeg",
  "1080x1080-10.jpeg",
  "1080x1080-11.jpeg",
  "1080x1080-12.jpeg",
  "1080x1080-13.jpeg",
  "1080x1080-14.jpeg",
  "1080x1080-15.jpeg",
  "1080x1080-16.jpeg",
  "1080x1080-17.jpeg",
  "1080x1080-18.jpeg",
  "1080x1080-19.jpeg",
  "1080x1080-20.jpeg",
  "1080x1080-21.jpeg",
  "1080x1080-22.jpeg",
  "1080x1080-23.jpeg",
  "1080x1080-24.jpeg",
  "1080x1080-25.jpeg",
  "1080x1080-26.jpeg",
  "1080x1080-27.jpeg",
  "1080x1080-28.jpeg",
  "1080x1080-29.jpeg",
  "1080x1080-30.jpeg",
  "1080x1080-31.jpeg",
  "1080x1080-32.jpeg",
  "1080x1080-33.jpeg",
  "1080x1080-34.jpeg",
  "1080x1080-35.jpeg",
  "1080x1080-36.jpeg",
  "1080x1080-37.jpeg",
  "1080x1080-38.jpeg",
  "1080x1080-39.jpeg",
  "1080x1080-40.jpeg",
  "1080x1080-41.jpeg",
  "1080x1080-42.jpeg",
  "1080x1080-43.jpeg",
  "1080x1080-44.jpeg",
  "1080x1080-45.jpeg",
  "1080x1080-46.jpeg",
  "1080x1080-47.jpeg",
  "1080x1080-48.jpeg",
  "1080x1080-49.jpeg",
  "1080x1080-50.jpeg",
  "1080x1080-51.jpeg",
  "1080x1080-52.jpeg",
  "1080x1080-53.jpeg",
  "1080x1080-54.jpeg",
  "1080x1080-55.jpeg",
  "1080x1080-56.jpeg",
  "1080x1080-57.jpeg",
  "1080x1080-58.jpeg",
  "1080x1080-59.jpeg",
  "1080x1080-60.jpeg",
  "1080x1080-61.jpeg",
  "1080x1080-62.jpeg",
  "1080x1080-63.jpeg",
  "1080x1080-64.jpeg",
  "1080x1080-65.jpeg",
  "1080x1080-66.jpeg",
  "1080x1080-67.jpeg",
  "1080x1080-68.jpeg",
  "1080x1080-69.jpeg",
  "1080x1080-70.jpeg",
  "1080x1080-71.jpeg",
  "1080x1080-72.jpeg",
  "1080x1080-73.jpeg",
  "1080x1080-74.jpeg",
  "1080x1080-75.jpeg",
  "1080x1080-76.jpeg",
  "1080x1080-77.jpeg",
  "1080x1080-78.jpeg",
  "1080x1080-79.jpeg",
  "1080x1080-80.jpeg",
  "1080x1080-81.jpeg",
  "1080x1080-82.jpeg",
  "1080x1080-83.jpeg",
  "1080x1080-84.jpeg",
];

export const deals: Deal[] = DEAL_ENTRIES.map((entry, index) => {
  const normalized =
    typeof entry === "string" ? { filename: entry } : entry ?? {};
  const filename = normalized.filename?.trim();

  if (!filename) {
    throw new Error(
      `Deal entry מספר ${index + 1} חסר שם קובץ. ודאו שכל ערך מכיל filename.`
    );
  }

  return {
    id: `yf25-${index + 1}`,
    filename,
    alt: normalized.alt ?? `מבצע Yellow Friday ${index + 1}`,
  };
});

