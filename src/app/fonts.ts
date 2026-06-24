import { GeistSans } from "geist/font/sans";
import type { FontFamilyKey } from "~/lib/data";


const SYSTEM_LOADER = { variable: "", className: "" };

type FontEntry = { loader: { variable: string; className: string }; cssVar: string };

export const fontCatalog: Partial<Record<FontFamilyKey, FontEntry>> = {
  geist: { loader: GeistSans, cssVar: "var(--font-geist-sans)" },
  helvetica: { loader: SYSTEM_LOADER, cssVar: "\"Helvetica Neue\", Helvetica, Arial, sans-serif" },
};

export const allFontVariables = Object.values(fontCatalog)
  .filter((entry): entry is FontEntry => Boolean(entry))
  .map((entry) => entry.loader.variable)
  .join(" ");
