import { ui, defaultLang } from "./ui";

/**
 * Derives the current locale from a URL path.
 * Use in layouts and components when you need the page's locale (e.g. for <html lang>, translations, or active state).
 * Returns defaultLang when the path has no locale prefix (e.g. / or /markdown-page/).
 */
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

/**
 * Returns a translation function for the given locale.
 * Use in pages and components: const t = useTranslations(lang); then t("home.title").
 * Falls back to defaultLang when a key is missing for the requested locale.
 */
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
