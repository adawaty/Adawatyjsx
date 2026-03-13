const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Cairo Circuit Futurism — Solution detail page
- High-intent landing pages: deliverables, timeline, integrations, FAQ schema
*/

import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import { site } from "@/lib/content";
import { getSolutions } from "@/lib/contentLocalized";
import { useI18n } from "@/contexts/I18nContext";
import appHero from "@/assets/generated/solution-apps-hero.png";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function SolutionDetail({ slug }) {
  const { lang } = useI18n();
  const solutions = getSolutions(lang);
  const s = solutions.find((x) => x.slug === slug);

  if (!s) {
    return (
      _jsxDEV(SiteLayout, { children: [
        _jsxDEV(SeoHead, { title: `${site.name} | Solution not found`, description: "Solution not found"  , noindex: true, path: `/solutions/${slug}`,}, void 0, false, {fileName: _jsxFileName, lineNumber: 24}, this )
        , _jsxDEV('main', { className: "mx-auto max-w-4xl px-4 sm:px-6 py-12"    , children: [
          _jsxDEV('h1', { className: "text-3xl font-semibold" , children: "Solution not found"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this)
          , _jsxDEV('p', { className: "mt-2 text-muted-foreground" , children: "Try the solutions hub."   }, void 0, false, {fileName: _jsxFileName, lineNumber: 27}, this)
          , _jsxDEV('div', { className: "mt-6", children: 
            _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
              _jsxDEV(Link, { href: "/solutions", children: "Back to solutions"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 28}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 25}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 23}, this)
    );
  }

  const hero = s.slug === "app-development" ? appHero : undefined;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.summary,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: "EG",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${site.url}/solutions` },
      { "@type": "ListItem", position: 3, name: s.title, item: `${site.url}/solutions/${s.slug}` },
    ],
  };

  return (
    _jsxDEV(SiteLayout, { children: [
      _jsxDEV(SeoHead, {
        title: s.seo.title,
        description: s.seo.description,
        path: `/solutions/${s.slug}`,
        type: "article",
        jsonLd: [serviceJsonLd, faqJsonLd, breadcrumbJsonLd],}, void 0, false, {fileName: _jsxFileName, lineNumber: 71}, this
      )

      , _jsxDEV('main', { className: "mx-auto max-w-6xl px-4 sm:px-6 py-12"    , children: [
        _jsxDEV('section', { className: "relative overflow-hidden rounded-3xl border border-white/10 bg-white/3"     , children: [
          hero ? (
            _jsxDEV('div', { className: "absolute inset-0" , children: [
              _jsxDEV('img', { src: hero, alt: "Solution hero background"  , className: "h-full w-full object-cover opacity-70"   , loading: "eager",}, void 0, false, {fileName: _jsxFileName, lineNumber: 83}, this )
              , _jsxDEV('div', { className: "absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 84}, this )
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 82}, this)
          ) : null
          , _jsxDEV('div', { className: "relative p-6 sm:p-10"  , children: 
            _jsxDEV('div', { className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"     , children: [
          _jsxDEV('div', { children: [
            _jsxDEV('div', { className: "text-xs tracking-[0.24em] uppercase text-primary/90"   , children: "Solution"}, void 0, false, {fileName: _jsxFileName, lineNumber: 90}, this)
            , _jsxDEV('h1', { className: "mt-3 text-3xl sm:text-5xl font-semibold leading-[1.05] text-balance"     , children: s.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this)
            , _jsxDEV('p', { className: "mt-3 max-w-2xl text-muted-foreground"  , children: s.summary}, void 0, false, {fileName: _jsxFileName, lineNumber: 92}, this)
            , _jsxDEV('div', { className: "mt-4 flex flex-wrap gap-2"   , children: 
              s.whoItsFor.map((x) => (
                _jsxDEV('span', { className: "text-xs rounded-full bg-white/6 border border-white/10 px-2.5 py-1"      , children: 
                  x
                }, x, false, {fileName: _jsxFileName, lineNumber: 95}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 93}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 89}, this)

          , _jsxDEV('div', { className: "flex gap-3" , children: [
            _jsxDEV(Button, { asChild: true, size: "lg", className: "shadow-[0_0_40px_oklch(0.73_0.16_190/0.25)]", children: 
              _jsxDEV(Link, { href: "/contact", children: "Request scope" }, void 0, false, {fileName: _jsxFileName, lineNumber: 104}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 103}, this)
            , _jsxDEV(Button, { asChild: true, size: "lg", variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
              _jsxDEV(Link, { href: "/solutions", children: "All solutions" }, void 0, false, {fileName: _jsxFileName, lineNumber: 107}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 106}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 102}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 88}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 87}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 80}, this)

        , _jsxDEV('div', { className: "mt-10 grid gap-4 lg:grid-cols-3"   , children: [
          _jsxDEV(Card, { className: "glass rounded-2xl p-6 lg:col-span-2"   , children: [
            _jsxDEV('div', { className: "text-sm font-semibold" , children: "Deliverables"}, void 0, false, {fileName: _jsxFileName, lineNumber: 116}, this)
            , _jsxDEV('ul', { className: "mt-3 grid gap-2 text-sm text-muted-foreground"    , children: 
              s.deliverables.map((d) => (
                _jsxDEV('li', { className: "flex gap-2" , children: [
                  _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-accent"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 120}, this )
                  , _jsxDEV('span', { children: d}, void 0, false, {fileName: _jsxFileName, lineNumber: 121}, this)
                ]}, d, true, {fileName: _jsxFileName, lineNumber: 119}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 117}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 115}, this)

          , _jsxDEV(Card, { className: "glass rounded-2xl p-6"  , children: [
            _jsxDEV('div', { className: "text-sm font-semibold" , children: "Timeline"}, void 0, false, {fileName: _jsxFileName, lineNumber: 128}, this)
            , _jsxDEV('ul', { className: "mt-3 grid gap-2 text-sm text-muted-foreground"    , children: 
              s.timeline.map((t) => (
                _jsxDEV('li', { className: "flex gap-2" , children: [
                  _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-primary"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 132}, this )
                  , _jsxDEV('span', { children: t}, void 0, false, {fileName: _jsxFileName, lineNumber: 133}, this)
                ]}, t, true, {fileName: _jsxFileName, lineNumber: 131}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 129}, this)
            , _jsxDEV('div', { className: "mt-6 circuit-divider" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 137}, this )
            , _jsxDEV('div', { className: "mt-6 text-sm font-semibold"  , children: "Integrations"}, void 0, false, {fileName: _jsxFileName, lineNumber: 138}, this)
            , _jsxDEV('div', { className: "mt-3 flex flex-wrap gap-2"   , children: 
              s.integrations.map((i) => (
                _jsxDEV('span', { className: "text-xs rounded-full bg-white/6 border border-white/10 px-2.5 py-1"      , children: 
                  i
                }, i, false, {fileName: _jsxFileName, lineNumber: 141}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 139}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 127}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 114}, this)

        , s.faqs.length ? (
          _jsxDEV('section', { className: "mt-12", children: [
            _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold"  , children: "FAQs"}, void 0, false, {fileName: _jsxFileName, lineNumber: 151}, this)
            , _jsxDEV('div', { className: "mt-6 grid gap-4 lg:grid-cols-2"   , children: 
              s.faqs.map((f) => (
                _jsxDEV(Card, { className: "glass rounded-2xl p-6"  , children: [
                  _jsxDEV('div', { className: "text-sm font-semibold" , children: f.q}, void 0, false, {fileName: _jsxFileName, lineNumber: 155}, this)
                  , _jsxDEV('div', { className: "mt-2 text-sm text-muted-foreground"  , children: f.a}, void 0, false, {fileName: _jsxFileName, lineNumber: 156}, this)
                ]}, f.q, true, {fileName: _jsxFileName, lineNumber: 154}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 152}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 150}, this)
        ) : null

        , _jsxDEV('section', { className: "mt-12 rounded-3xl border border-white/10 bg-white/3 p-6 sm:p-10"      , children: [
          _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold"  , children: "Want this built for your exact workflow?"      }, void 0, false, {fileName: _jsxFileName, lineNumber: 164}, this)
          , _jsxDEV('p', { className: "mt-2 text-muted-foreground max-w-3xl"  , children: "We’ll map your current process, remove bottlenecks, then build the smallest system that works—fast. No chaos, no handoffs."

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 165}, this)
          , _jsxDEV('div', { className: "mt-6", children: 
            _jsxDEV(Button, { asChild: true, size: "lg", className: "shadow-[0_0_40px_oklch(0.73_0.16_190/0.25)]", children: 
              _jsxDEV(Link, { href: "/contact", children: "Book a call"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 170}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 169}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 168}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 163}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 79}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 70}, this)
  );
}
