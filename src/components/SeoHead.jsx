const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime"; function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }/*
Cairo Circuit Futurism — SEO Head helper
- Generates crawlable meta, canonical, OpenGraph, and JSON-LD
- Used per route to improve classic SEO + AI Overviews eligibility
*/

import { Helmet } from "react-helmet-async";
import { site } from "@/lib/content";
import { useI18n } from "@/contexts/I18nContext";

 









export default function SeoHead({
  title,
  description,
  path = "/",
  image,
  type = "website",
  noindex,
  jsonLd,
}) {
  const { lang } = useI18n();
  const urlObj = new URL(path, site.url);
  urlObj.searchParams.set("lang", lang);
  const url = urlObj.toString();
  const ogImage = _nullishCoalesce(image, () => ( new URL("/og.png", site.url).toString()));

  return (
    _jsxDEV(Helmet, { children: [
      _jsxDEV('title', { children: title}, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)
      , _jsxDEV('meta', { name: "description", content: description,}, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this )
      , _jsxDEV('link', { rel: "canonical", href: url,}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this )
      , _jsxDEV('link', { rel: "alternate", hrefLang: "en", href: new URL(path, site.url).toString() + "?lang=en",}, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this )
      , _jsxDEV('link', { rel: "alternate", hrefLang: "fr", href: new URL(path, site.url).toString() + "?lang=fr",}, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this )
      , _jsxDEV('link', { rel: "alternate", hrefLang: "es", href: new URL(path, site.url).toString() + "?lang=es",}, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this )
      , _jsxDEV('link', { rel: "alternate", hrefLang: "de", href: new URL(path, site.url).toString() + "?lang=de",}, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this )
      , _jsxDEV('link', { rel: "alternate", hrefLang: "ar", href: new URL(path, site.url).toString() + "?lang=ar",}, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this )
      , _jsxDEV('link', { rel: "alternate", hrefLang: "x-default", href: new URL(path, site.url).toString() + "?lang=en",}, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this )

      , noindex ? _jsxDEV('meta', { name: "robots", content: "noindex, nofollow" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this ) : null

      , _jsxDEV('meta', { property: "og:title", content: title,}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this )
      , _jsxDEV('meta', { property: "og:description", content: description,}, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this )
      , _jsxDEV('meta', { property: "og:type", content: type,}, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this )
      , _jsxDEV('meta', { property: "og:url", content: url,}, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this )
      , _jsxDEV('meta', { property: "og:site_name", content: site.name,}, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this )
      , _jsxDEV('meta', { property: "og:locale", content: site.locale,}, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this )
      , _jsxDEV('meta', { property: "og:image", content: ogImage,}, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this )

      , _jsxDEV('meta', { name: "twitter:card", content: "summary_large_image",}, void 0, false, {fileName: _jsxFileName, lineNumber: 58}, this )
      , _jsxDEV('meta', { name: "twitter:title", content: title,}, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this )
      , _jsxDEV('meta', { name: "twitter:description", content: description,}, void 0, false, {fileName: _jsxFileName, lineNumber: 60}, this )
      , _jsxDEV('meta', { name: "twitter:image", content: ogImage,}, void 0, false, {fileName: _jsxFileName, lineNumber: 61}, this )

      , jsonLd ? (
        _jsxDEV('script', { type: "application/ld+json", children: JSON.stringify(jsonLd)}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this)
      ) : null
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 37}, this)
  );
}
