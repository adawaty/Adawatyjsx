const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Cairo Circuit Futurism — Case Study detail (updated)
*/

import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import { site } from "@/lib/content";
import { getCaseStudyBySlug } from "@/lib/contentLocalized";
import { useI18n } from "@/contexts/I18nContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CaseStudyDetail({ slug }) {
  const { lang } = useI18n();
  const c = getCaseStudyBySlug(lang, slug);

  if (!c) {
    return (
      _jsxDEV(SiteLayout, { title: "Case study not found"   , subtitle: "The link may be outdated."    , children: 
        _jsxDEV('div', { className: "pt-10", children: 
          _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
            _jsxDEV(Link, { href: "/work", children: [
              _jsxDEV(ArrowLeft, { className: "mr-2 h-4 w-4"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this ), " Back to work"
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 25}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 24}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 23}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 22}, this)
    );
  }

  return (
    _jsxDEV(SiteLayout, { title: c.title, subtitle: c.summary, children: [
      _jsxDEV(SeoHead, {
        title: `${c.title} | ${site.name}`,
        description: c.summary,
        path: `/work/${c.slug}`,
        type: "article",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: c.title,
          description: c.summary,
          mainEntityOfPage: new URL(`/work/${c.slug}`, site.url).toString(),
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
        },}, void 0, false, {fileName: _jsxFileName, lineNumber: 36}, this
      )
      , _jsxDEV('section', { className: "pt-10", children: [
        _jsxDEV('div', { className: "flex flex-wrap items-center gap-2"   , children: [
          _jsxDEV(Badge, { className: "bg-white/6 border border-white/10 text-foreground"   , children: c.category}, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this)
          , _jsxDEV('span', { className: "text-sm text-primary" , children: c.highlightMetric}, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 52}, this)

        , _jsxDEV('div', { className: "mt-6 grid gap-4 lg:grid-cols-3"   , children: [
          _jsxDEV(Card, { className: "glass rounded-2xl p-6 lg:col-span-2"   , children: [
            _jsxDEV('div', { className: "text-sm font-medium" , children: "Challenge"}, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this)
            , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: c.challenge}, void 0, false, {fileName: _jsxFileName, lineNumber: 60}, this)

            , _jsxDEV('div', { className: "mt-6 text-sm font-medium"  , children: "Solution"}, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)
            , _jsxDEV('ul', { className: "mt-2 grid gap-2 text-sm text-muted-foreground"    , children: 
              c.solution.map((s) => (
                _jsxDEV('li', { className: "flex gap-2" , children: [
                  _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-primary"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this )
                  , _jsxDEV('span', { children: s}, void 0, false, {fileName: _jsxFileName, lineNumber: 67}, this)
                ]}, s, true, {fileName: _jsxFileName, lineNumber: 65}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)

            , _jsxDEV('div', { className: "mt-6 text-sm font-medium"  , children: "Results"}, void 0, false, {fileName: _jsxFileName, lineNumber: 72}, this)
            , _jsxDEV('ul', { className: "mt-2 grid gap-2 text-sm text-muted-foreground"    , children: 
              c.results.map((r) => (
                _jsxDEV('li', { className: "flex gap-2" , children: [
                  _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-accent"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 76}, this )
                  , _jsxDEV('span', { children: r}, void 0, false, {fileName: _jsxFileName, lineNumber: 77}, this)
                ]}, r, true, {fileName: _jsxFileName, lineNumber: 75}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 58}, this)

          , _jsxDEV(Card, { className: "glass rounded-2xl p-6"  , children: [
            _jsxDEV('div', { className: "text-sm font-medium" , children: "Themes"}, void 0, false, {fileName: _jsxFileName, lineNumber: 84}, this)
            , _jsxDEV('div', { className: "mt-3 flex flex-wrap gap-2"   , children: 
              c.tools.map((t) => (
                _jsxDEV('span', { className: "text-xs rounded-full bg-white/6 border border-white/10 px-2.5 py-1"      , children: 
                  t
                }, t, false, {fileName: _jsxFileName, lineNumber: 87}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 85}, this)

            , _jsxDEV('div', { className: "mt-6 circuit-divider" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 93}, this )

            , _jsxDEV('div', { className: "mt-6 text-sm font-medium"  , children: "Want a similar outcome?"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 95}, this)
            , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: "We can propose a turnkey DFY scope with a sprint timeline."

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 96}, this)
            , _jsxDEV('div', { className: "mt-4 grid gap-2"  , children: [
              _jsxDEV(Button, { asChild: true, children: 
                _jsxDEV(Link, { href: "/contact", children: ["Book a call "
                     , _jsxDEV(ArrowRight, { className: "ml-2 h-4 w-4"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 102}, this )
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 101}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 100}, this)
              , _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
                _jsxDEV(Link, { href: "/work", children: [
                  _jsxDEV(ArrowLeft, { className: "mr-2 h-4 w-4"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 107}, this ), " Back"
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 106}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 105}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 99}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 83}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 57}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 51}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 35}, this)
  );
}
