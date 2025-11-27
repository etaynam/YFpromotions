import type { Metadata } from "next";
import { Assistant, Space_Grotesk } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-assistant",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YELLOW FRIDAY 2025 | מחסני השוק",
  description:
    "כל 90+ המבצעים של Yellow Friday 2025 בדף אחד סופר מהיר, מותאם לעומסים ונטען ישירות מ-Cloudinary.",
  icons: {
    icon: "/FAV.png",
  },
  keywords: [
    "Yellow Friday",
    "Black Friday",
    "מבצעים",
    "Cloudinary",
    "דפי נחיתה",
  ],
  openGraph: {
    title: "YELLOW FRIDAY 2025 | מחסני השוק",
    description:
      "דף הנחיתה הרשמי – טעינה מיידית, תמונות אופטימליות ויציבות ב-300K מבקרים ביום.",
    type: "website",
    locale: "he_IL",
    images: [
      {
        url: "https://res.cloudinary.com/dggk53pzv/image/upload/v1764250917/cover_landing_ctmomi.png",
        width: 1600,
        height: 900,
        alt: "Yellow Friday 2025 Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YELLOW FRIDAY 2025 | מחסני השוק",
    description: "האירוע הצהוב הגדול של השנה.",
    images: [
      "https://res.cloudinary.com/dggk53pzv/image/upload/v1764250917/cover_landing_ctmomi.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${assistant.variable} ${grotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
