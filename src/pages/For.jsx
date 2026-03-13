const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Cairo Circuit Futurism — Personas hub (/for)
*/

import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import { site } from "@/lib/content";
import { getPersonas } from "@/lib/contentLocalized";
import { useI18n } from "@/contexts/I18nContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function For() {
  const { lang, t } = useI18n();
  const personas = getPersonas(lang);
  return (
    _jsxDEV(SiteLayout, { children: [
      _jsxDEV(SeoHead, {
        title: `${site.name} | ${t("nav.for")}`,
        description: t("for.subtitle"),
        path: "/for",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: t("nav.for"),
          url: `${site.url}/for`,
        },}, void 0, false, {fileName: _jsxFileName, lineNumber: 19}, this
      )

      , _jsxDEV('main', { className: "mx-auto max-w-6xl px-4 sm:px-6 py-12"    , children: [
        _jsxDEV('div', { className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"     , children: [
          _jsxDEV('div', { children: [
            _jsxDEV('div', { className: "text-xs tracking-[0.24em] uppercase text-primary/90"   , children: t("nav.for")}, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this)
            , _jsxDEV('h1', { className: "mt-3 text-3xl sm:text-5xl font-semibold leading-[1.05] text-balance"     , children: 
              t("for.title")
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this)
            , _jsxDEV('p', { className: "mt-3 max-w-2xl text-muted-foreground"  , children: 
              t("for.subtitle")
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 33}, this)
          , _jsxDEV(Button, { asChild: true, size: "lg", className: "shadow-[0_0_40px_oklch(0.73_0.16_190/0.25)]", children: 
            _jsxDEV(Link, { href: "/contact", children: t("for.cta")}, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 32}, this)

        , _jsxDEV('div', { className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"    , children: 
          personas.map((p) => (
            _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-6"   , children: [
              _jsxDEV('div', { className: "text-lg font-semibold" , children: 
                _jsxDEV(Link, { href: `/for/${p.slug}`, className: "hover:text-primary transition-colors" , children: 
                  p.title
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this)
              , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: p.summary}, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this)
              , _jsxDEV('div', { className: "mt-5", children: 
                _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
                  _jsxDEV(Link, { href: `/for/${p.slug}`, children: t("for.button")}, void 0, false, {fileName: _jsxFileName, lineNumber: 58}, this)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 57}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this)
            ]}, p.id, true, {fileName: _jsxFileName, lineNumber: 49}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 31}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 18}, this)
  );
}
