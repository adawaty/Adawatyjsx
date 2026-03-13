const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime"; function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }/*
Cairo Circuit Futurism — Bio Page (generated)
- Lightweight, shareable personal hub
- Supports query params for quick previews from Pricing Calculator
*/

import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/contexts/I18nContext";
import { Link2, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

function qp(url) {
  try {
    const u = new URL(url);
    return u.searchParams;
  } catch (e) {
    // relative
    return new URL(url, "https://example.com").searchParams;
  }
}

export default function BioPage() {
  const { t } = useI18n();
  const params = qp(window.location.href);

  const name = (params.get("name") || "Your Name").trim();
  const headline = (params.get("headline") || "Brand → Build → Demand").trim();
  const city = (params.get("city") || "Cairo").trim();
  const phone = (params.get("phone") || "").trim();
  const email = (params.get("email") || "").trim();
  const primaryCta = (params.get("cta") || "Book a call").trim();
  const primaryHref = (params.get("href") || "/contact").trim();

  // simple link list (comma separated pairs): label|url,label|url
  const linksRaw = (params.get("links") || "Website|/ , WhatsApp|https://wa.me/").trim();
  const links = linksRaw
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean)
    .map((x) => {
      const [label, url] = x.split("|").map((p) => (_nullishCoalesce(p, () => ( ""))).trim());
      return { label: label || "Link", url: url || "/" };
    })
    .slice(0, 8);

  return (
    _jsxDEV(SiteLayout, { children: [
      _jsxDEV(SeoHead, {
        title: `${name} | Bio Page`,
        description: `Bio page for ${name}: ${headline}.`,
        path: "/bio",
        type: "website",}, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this
      )

      , _jsxDEV('section', { className: "pt-10 pb-16" , children: 
        _jsxDEV('div', { className: "mx-auto max-w-2xl" , children: [
          _jsxDEV(Card, { className: "glass rounded-3xl p-7 sm:p-10 overflow-hidden"    , children: [
            _jsxDEV('div', { className: "flex items-start justify-between gap-4"   , children: [
              _jsxDEV('div', { className: "min-w-0", children: [
                _jsxDEV(Badge, { className: "bg-primary/20 text-primary border border-primary/40"   , children: "Bio Page" }, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)
                , _jsxDEV('h1', { className: "mt-3 text-3xl sm:text-5xl font-semibold leading-[1.08] break-words"     , children: name}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this)
                , _jsxDEV('p', { className: "mt-3 text-base sm:text-lg text-muted-foreground"   , children: headline}, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this)

                , _jsxDEV('div', { className: "mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground"     , children: [
                  _jsxDEV('span', { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1.5"        , children: [
                    _jsxDEV(MapPin, { className: "h-3.5 w-3.5" , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this ), " " , city
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 68}, this)
                  , phone ? (
                    _jsxDEV('a', {
                      className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1.5 hover:bg-white/6"         ,
                      href: `tel:${phone}`,
 children: [
                      _jsxDEV(Phone, { className: "h-3.5 w-3.5" , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 76}, this ), " " , phone
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 72}, this)
                  ) : null
                  , email ? (
                    _jsxDEV('a', {
                      className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1.5 hover:bg-white/6"         ,
                      href: `mailto:${email}`,
 children: [
                      _jsxDEV(Mail, { className: "h-3.5 w-3.5" , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 84}, this ), " " , email
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 80}, this)
                  ) : null
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 67}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 62}, this)

              , _jsxDEV('div', { className: "hidden sm:block h-12 w-12 rounded-2xl bg-primary/15 ring-1 ring-primary/35 grid place-items-center"         , children: 
                _jsxDEV('div', { className: "h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_22px_oklch(0.73_0.16_190/0.55)]"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this )
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 90}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 61}, this)

            , _jsxDEV('div', { className: "mt-7 grid gap-3"  , children: 
              links.map((l) => (
                _jsxDEV('a', {

                  className: "group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 py-3 hover:bg-white/6 premium-focus"            ,
                  href: l.url,
                  target: l.url.startsWith("http") ? "_blank" : "_self",
                  rel: l.url.startsWith("http") ? "noreferrer" : undefined,
 children: [
                  _jsxDEV('span', { className: "inline-flex items-center gap-2 min-w-0"   , children: [
                    _jsxDEV(Link2, { className: "h-4 w-4 text-primary"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 105}, this )
                    , _jsxDEV('span', { className: "font-medium truncate" , children: l.label}, void 0, false, {fileName: _jsxFileName, lineNumber: 106}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 104}, this)
                  , _jsxDEV(ArrowRight, { className: "h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1"    , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 108}, this )
                ]}, `${l.label}-${l.url}`, true, {fileName: _jsxFileName, lineNumber: 97}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 95}, this)

            , _jsxDEV('div', { className: "mt-7", children: [
              _jsxDEV(Button, { asChild: true, size: "lg", className: "w-full shadow-[0_0_40px_oklch(0.73_0.16_190/0.25)]" , children: 
                _jsxDEV('a', { href: primaryHref, children: primaryCta}, void 0, false, {fileName: _jsxFileName, lineNumber: 115}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 114}, this)
              , _jsxDEV('div', { className: "mt-3 text-xs text-muted-foreground text-center"   , children: [
                t("cta.requestScope"), " • "  , t("hero.badge")
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 117}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 113}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 60}, this)

          , _jsxDEV('div', { className: "mt-6 text-xs text-muted-foreground text-center"   , children: "Tip: this is a preview template. We’ll customize copy, proof, offers, tracking, and booking."

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 123}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 59}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 58}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 50}, this)
  );
}
