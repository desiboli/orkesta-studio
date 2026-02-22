/** Map of locale codes to their display names. Used by the language picker and elsewhere. */
export const languages = {
  "sv-se": "Svenska",
  en: "English",
};

/** The default locale when the URL has no locale prefix. Must match astro.config.mjs defaultLocale. */
export const defaultLang = "sv-se";

/** UI string translations per locale. Use with useTranslations() to get locale-specific strings. */
export const ui = {
  "sv-se": {
    "nav.home": "Start",
    "nav.about": "Om oss",
    "nav.twitter": "Twitter",
    "home.title": "Astro + TailwindCSS",
    "home.button": "Tailwind Knapp i Astro!",
    "home.markdownLink": "Markdown stöds också...",

    // Hero
    "hero.title": "AI och digitalisering som faktiskt skapar affärsvärde.",
    "hero.description":
      "Vi hjälper företag att modernisera sina system, effektivisera arbetssätt och bygga stabila lösningar för långsiktig tillväxt.",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.twitter": "Twitter",
    "home.title": "Astro + TailwindCSS",
    "home.button": "Tailwind Button in Astro!",
    "home.markdownLink": "Markdown is also supported...",

    // Hero
    "hero.title": "AI and digitalization that actually creates business value.",
    "hero.description":
      "We help businesses modernize their systems, streamline workflows, and build sustainable solutions for long-term growth.",
  },
} as const;
