const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Cairo Circuit Futururism — Solutions hub
- pSEO-friendly hub page for high-intent “deliverable” queries
*/

import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import { site } from "@/lib/content";
import { getSolutions } from "@/lib/contentLocalized";
import { useI18n } from "@/contexts/I18nContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Solutions() {
  const { lang, t } = useI18n();
  const solutions = getSolutions(lang);
  return (
    _jsxDEV(SiteLayout, { children: [
      _jsxDEV(SeoHead, {
        title: `${site.name} | ${t("nav.solutions")}`,
        description: t("solutions.subtitle"),
        path: "/solutions",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: t("nav.solutions"),
          url: `${site.url}/solutions`,
        },}, void 0, false, {fileName: _jsxFileName, lineNumber: 20}, this
      )

      , _jsxDEV('main', { className: "mx-auto max-w-6xl px-4 sm:px-6 py-12"    , children: [
        _jsxDEV('div', { className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"     , children: [
          _jsxDEV('div', { children: [
            _jsxDEV('div', { className: "text-xs tracking-[0.24em] uppercase text-primary/90"   , children: t("solutions.eyebrow")}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this)
            , _jsxDEV('h1', { className: "mt-3 text-3xl sm:text-5xl font-semibold leading-[1.05] text-balance"     , children: [
              t("solutions.title")
              , _jsxDEV('span', { className: "text-muted-foreground", children: [" " , t("solutions.dfytag"), "."]}, void 0, true, {fileName: _jsxFileName, lineNumber: 38}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 36}, this)
            , _jsxDEV('p', { className: "mt-3 max-w-2xl text-muted-foreground"  , children: 
              t("solutions.subtitle")
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 34}, this)
          , _jsxDEV(Button, { asChild: true, size: "lg", className: "shadow-[0_0_40px_oklch(0.73_0.16_190/0.25)]", children: 
            _jsxDEV(Link, { href: "/contact", children: t("solutions.cta")}, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 33}, this)

        , _jsxDEV('div', { className: "mt-10 grid gap-4 md:grid-cols-2"   , children: 
          solutions.map((s) => (
            _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-6"   , children: [
              _jsxDEV('div', { className: "flex items-start justify-between gap-4"   , children: [
                _jsxDEV('div', { children: [
                  _jsxDEV('div', { className: "text-lg font-semibold" , children: 
                    _jsxDEV(Link, { href: `/solutions/${s.slug}`, className: "hover:text-primary transition-colors" , children: 
                      s.title
                    }, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this)
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this)
                  , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: s.summary}, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 53}, this)
                , _jsxDEV('span', { className: "text-[11px] shrink-0 rounded-full bg-white/6 border border-white/10 px-2 py-1 text-muted-foreground"        , children: "DFY"

                }, void 0, false, {fileName: _jsxFileName, lineNumber: 61}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 52}, this)

              , _jsxDEV('div', { className: "mt-4 flex flex-wrap gap-2"   , children: 
                s.whoItsFor.slice(0, 3).map((x) => (
                  _jsxDEV('span', { className: "text-xs rounded-full bg-white/6 border border-white/10 px-2.5 py-1"      , children: 
                    x
                  }, x, false, {fileName: _jsxFileName, lineNumber: 68}, this)
                ))
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this)

              , _jsxDEV('div', { className: "mt-5", children: 
                _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
                  _jsxDEV(Link, { href: `/solutions/${s.slug}`, children: t("solutions.view")}, void 0, false, {fileName: _jsxFileName, lineNumber: 76}, this)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 75}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this)
            ]}, s.id, true, {fileName: _jsxFileName, lineNumber: 51}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this)

        , _jsxDEV('div', { className: "mt-14 rounded-3xl border border-white/10 bg-white/3 p-6 sm:p-10"      , children: [
          _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold"  , children: t("solutions.steps.title")}, void 0, false, {fileName: _jsxFileName, lineNumber: 84}, this)
          , _jsxDEV('p', { className: "mt-2 text-muted-foreground max-w-3xl"  , children: 
            t("solutions.steps.subtitle")
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 85}, this)

          , _jsxDEV('div', { className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3"    , children: 
            [
              {
                t: t("solutions.step0.t"),
                d: t("solutions.step0.d"),
              },
              {
                t: t("solutions.step1.t"),
                d: t("solutions.step1.d"),
              },
              {
                t: t("solutions.step2.t"),
                d: t("solutions.step2.d"),
              },
              {
                t: t("solutions.step3.t"),
                d: t("solutions.step3.d"),
              },
              {
                t: t("solutions.step4.t"),
                d: t("solutions.step4.d"),
              },
              {
                t: t("solutions.stepPost.t"),
                d: t("solutions.stepPost.d"),
              },
            ].map((x) => (
              _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-6"   , children: [
                _jsxDEV('div', { className: "text-sm font-semibold" , children: x.t}, void 0, false, {fileName: _jsxFileName, lineNumber: 117}, this)
                , _jsxDEV('div', { className: "mt-2 text-sm text-muted-foreground"  , children: x.d}, void 0, false, {fileName: _jsxFileName, lineNumber: 118}, this)
              ]}, x.t, true, {fileName: _jsxFileName, lineNumber: 116}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 89}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 83}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 32}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 19}, this)
  );
}
