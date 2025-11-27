export type Deal = {
  id: string;
  filename: string;
  alt: string;
};

type DealEntry = string | { filename: string; alt?: string };

/**
 * הכניסו לכאן את כל שמות הקבצים בדיוק כפי שהם ב-Cloudinary
 * בלי הסיומת (.png וכד').
 *
 * דוגמה לשורה:
 * "1080x1080-YF25-LAST-1_frcju1",
 *
 * רוצים לשלוט ב-alt? השתמשו באובייקט:
 * { filename: "1080x1080-YF25-LAST-1_frcju1", alt: "מבצע מטורף 70% הנחה" },
 */
const DEAL_ENTRIES: DealEntry[] = [
  "1080x1080-YF25-LAST-1_frcju1",
  "1080x1080-YF25-LAST-11_a765pc",
  "1080x1080-YF25-LAST-12_vb2lgf",
  "1080x1080-YF25-LAST-13_scr4oi",
  "1080x1080-YF25-LAST-14_i63mvy",
  "1080x1080-YF25-LAST-15_lfdrbm",
  "1080x1080-YF25-LAST-16_fjajid",
  "1080x1080-YF25-LAST-17_g2rux8",
  "1080x1080-YF25-LAST-18_zbs1ji",
  "1080x1080-YF25-LAST-19_e9wqxh",
  "1080x1080-YF25-LAST-20_p3wop9",
  "1080x1080-YF25-LAST-21_m5bezh",
  "1080x1080-YF25-LAST-22_aikhvd",
  "1080x1080-YF25-LAST-23_zg9mxa",
  "1080x1080-YF25-LAST-24_yrkqyk",
  "1080x1080-YF25-LAST-25_l4bioz",
  "1080x1080-YF25-LAST-26_vzmkfn",
  "1080x1080-YF25-LAST-27_j5qrkb",
  "1080x1080-YF25-LAST-28_mak7lt",
  "1080x1080-YF25-LAST-29_fxsay9",
  "1080x1080-YF25-LAST-30_qj8er9",
  "1080x1080-YF25-LAST-31_hxngqh",
  "1080x1080-YF25-LAST-32_vt9ukn",
  "1080x1080-YF25-LAST-33_elgm5t",
  "1080x1080-YF25-LAST-34_yj2ssm",
  "1080x1080-YF25-LAST-35_lm8m52",
  "1080x1080-YF25-LAST-36_t0id4u",
  "1080x1080-YF25-LAST-37_iwaotg",
  "1080x1080-YF25-LAST-38_iqbpkm",
  "1080x1080-YF25-LAST-39_vqaezc",
  "1080x1080-YF25-LAST-40_to5c64",
  "1080x1080-YF25-LAST-41_izhtcq",
  "1080x1080-YF25-LAST-42_srlphc",
  "1080x1080-YF25-LAST-43_b9gemc",
  "1080x1080-YF25-LAST-44_gnfsbr",
  "1080x1080-YF25-LAST-45_sk8yyh",
  "1080x1080-YF25-LAST-46_a0pwxh",
  "1080x1080-YF25-LAST-47_kignjr",
  "1080x1080-YF25-LAST-48_ahtyit",
  "1080x1080-YF25-LAST-49_b5gtg1",
  "1080x1080-YF25-LAST-50_lp0x1l",
  "1080x1080-YF25-LAST-51_yrvz7e",
  "1080x1080-YF25-LAST-52_n1zgyq",
  "1080x1080-YF25-LAST-53_vqlbbv",
  "1080x1080-YF25-LAST-54_if3kqw",
  "1080x1080-YF25-LAST-55_mvl7gv",
  "1080x1080-YF25-LAST-56_ybh5ul",
  "1080x1080-YF25-LAST-57_pjnzra",
  "1080x1080-YF25-LAST-58_usjwc1",
  "1080x1080-YF25-LAST-59_ee2vry",
  "1080x1080-YF25-LAST-60_kgs6dx",
  "1080x1080-YF25-LAST-61_t2jyyq",
  "1080x1080-YF25-LAST-62_dv8vb2",
  "1080x1080-YF25-LAST-63_urjrxe",
  "1080x1080-YF25-LAST-64_ludamz",
  "1080x1080-YF25-LAST-65_sdkgld",
  "1080x1080-YF25-LAST-66_bs7xkc",
  "1080x1080-YF25-LAST-67_em08pz",
  "1080x1080-YF25-LAST-68_oms7fm",
  "1080x1080-YF25-LAST-69_kz21yo",
  "1080x1080-YF25-LAST-70_jqxlan",
  "1080x1080-YF25-LAST-71_ebyqhv",
  "1080x1080-YF25-LAST-72_vzehsl",
  "1080x1080-YF25-LAST-73_hwlcz7",
  "1080x1080-YF25-LAST-74_dskxmk",
  "1080x1080-YF25-LAST-75_u9f2gw",
  "1080x1080-YF25-LAST-76_ea9sjw",
  "1080x1080-YF25-LAST-77_kutsgo",
  "1080x1080-YF25-LAST-78_jynajz",
  "1080x1080-YF25-LAST-79_nrufkh",
  "1080x1080-YF25-LAST-80_n9cucm",
  "1080x1080-YF25-LAST-81_waffle",
  "1080x1080-YF25-LAST-82_ck06tk",
  "1080x1080-YF25-LAST-83_lv4qtp",
  "1080x1080-YF25-LAST-84_p2ldg6",
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

