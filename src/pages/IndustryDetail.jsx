const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Cairo Circuit Futurism — Industry detail (programmatic SEO)
- One page per industry with pains/outcomes and recommended pillars
*/

import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { site } from "@/lib/content";
import { getIndustries, getServices } from "@/lib/contentLocalized";
import { useI18n } from "@/contexts/I18nContext";
import NotFound from "@/pages/NotFound";
import { ArrowRight, Target, TrendingUp } from "lucide-react";

export default function IndustryDetail({ id }) {
  const { lang } = useI18n();
  const industries = getIndustries(lang);
  const services = getServices(lang);
  const industry = industries.find((x) => x.id === id);
  if (!industry) return _jsxDEV(NotFound, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 23}, this );

  const recommended = industry.recommendedServices
    .map((sid) => services.find((s) => s.id === sid))
    .filter(Boolean) ;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: industry.seo.title,
    description: industry.seo.description,
    url: new URL(`/industries/${industry.id}`, site.url).toString(),
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
  };

  return (
    _jsxDEV(SiteLayout, { title: industry.title, subtitle: industry.summary, children: [
      _jsxDEV(SeoHead, {
        title: industry.seo.title,
        description: industry.seo.description,
        path: `/industries/${industry.id}`,
        type: "article",
        jsonLd: jsonLd,}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this
      )

      , _jsxDEV('section', { className: "pt-10", children: 
        _jsxDEV('div', { className: "grid gap-4 lg:grid-cols-3"  , children: [
          _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-7 lg:col-span-2"    , children: [
            _jsxDEV('div', { className: "flex items-center justify-between gap-3"   , children: [
              _jsxDEV(Badge, { className: "bg-white/6 border border-white/10 text-foreground"   , children: "Sector"}, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this)
              , _jsxDEV('span', { className: "text-xs text-primary" , children: "Programmatic landing" }, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 51}, this)

            , _jsxDEV('div', { className: "mt-6 grid gap-4 lg:grid-cols-2"   , children: [
              _jsxDEV(Card, { className: "rounded-2xl border border-white/10 bg-white/3 p-6"    , children: [
                _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
                  _jsxDEV(Target, { className: "h-5 w-5 text-primary"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this )
                  , _jsxDEV('div', { className: "text-lg font-semibold" , children: "Common pains" }, void 0, false, {fileName: _jsxFileName, lineNumber: 60}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 58}, this)
                , _jsxDEV('ul', { className: "mt-3 grid gap-2 text-sm text-muted-foreground"    , children: 
                  industry.pains.map((p) => (
                    _jsxDEV('li', { className: "flex gap-2" , children: [
                      _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-accent"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this )
                      , _jsxDEV('span', { children: p}, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this)
                    ]}, p, true, {fileName: _jsxFileName, lineNumber: 64}, this)
                  ))
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 57}, this)

              , _jsxDEV(Card, { className: "rounded-2xl border border-white/10 bg-white/3 p-6"    , children: [
                _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
                  _jsxDEV(TrendingUp, { className: "h-5 w-5 text-primary"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this )
                  , _jsxDEV('div', { className: "text-lg font-semibold" , children: "Outcomes"}, void 0, false, {fileName: _jsxFileName, lineNumber: 75}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 73}, this)
                , _jsxDEV('ul', { className: "mt-3 grid gap-2 text-sm text-muted-foreground"    , children: 
                  industry.outcomes.map((o) => (
                    _jsxDEV('li', { className: "flex gap-2" , children: [
                      _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-primary"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 80}, this )
                      , _jsxDEV('span', { children: o}, void 0, false, {fileName: _jsxFileName, lineNumber: 81}, this)
                    ]}, o, true, {fileName: _jsxFileName, lineNumber: 79}, this)
                  ))
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 77}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 72}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 56}, this)

            , _jsxDEV('div', { className: "mt-6 circuit-divider" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 88}, this )

            , _jsxDEV('div', { className: "mt-6 text-lg font-semibold"  , children: "Recommended pillars" }, void 0, false, {fileName: _jsxFileName, lineNumber: 90}, this)
            , _jsxDEV('div', { className: "mt-4 grid gap-4 lg:grid-cols-2"   , children: 
              recommended.map((s) => (
                _jsxDEV(Card, { className: "rounded-2xl border border-white/10 bg-white/3 p-6"    , children: [
                  _jsxDEV('div', { className: "flex items-center justify-between gap-3"   , children: [
                    _jsxDEV('div', { className: "text-base font-semibold" , children: s.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 95}, this)
                    , _jsxDEV('span', { className: "text-[11px] rounded-full bg-white/6 border border-white/10 px-2 py-1 text-muted-foreground"       , children: 
                      s.pillar
                    }, void 0, false, {fileName: _jsxFileName, lineNumber: 96}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 94}, this)
                  , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: s.summary}, void 0, false, {fileName: _jsxFileName, lineNumber: 100}, this)
                  , _jsxDEV('div', { className: "mt-4", children: 
                    _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
                      _jsxDEV(Link, { href: `/services/${s.id}`, children: ["View deliverables "
                          , _jsxDEV(ArrowRight, { className: "ml-2 h-4 w-4"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 104}, this )
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 103}, this)
                    }, void 0, false, {fileName: _jsxFileName, lineNumber: 102}, this)
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 101}, this)
                ]}, s.id, true, {fileName: _jsxFileName, lineNumber: 93}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 50}, this)

          , _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-7"   , children: [
            _jsxDEV('div', { className: "text-sm font-medium" , children: "Best starting point"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 114}, this)
            , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: "If you want to own Google + AI results in this sector, start with an AI Visibility Audit, then execute pillar upgrades."

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 115}, this)
            , _jsxDEV('div', { className: "mt-5 grid gap-2"  , children: [
              _jsxDEV(Button, { asChild: true, children: 
                _jsxDEV(Link, { href: "/ai-visibility-audit", children: ["View audit page "
                     , _jsxDEV(ArrowRight, { className: "ml-2 h-4 w-4"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 121}, this )
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 120}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 119}, this)
              , _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
                _jsxDEV(Link, { href: "/industries", children: "Back to industries"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 125}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 124}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 118}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 113}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 49}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this)

      , _jsxDEV('section', { className: "mt-12 pb-6" , children: 
        _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-7"   , children: [
          _jsxDEV('div', { className: "text-lg font-semibold" , children: ["Ready to build demand in "     , industry.title, "?"]}, void 0, true, {fileName: _jsxFileName, lineNumber: 134}, this)
          , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground max-w-2xl"   , children: "Tell us your current stage and targets. We’ll propose a DFY scope and sprint plan aligned to the buyer intent in your sector."

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 135}, this)
          , _jsxDEV('div', { className: "mt-5", children: 
            _jsxDEV(Button, { asChild: true, size: "lg", className: "shadow-[0_0_40px_oklch(0.73_0.16_190/0.25)]", children: 
              _jsxDEV(Link, { href: "/contact", children: "Request scope" }, void 0, false, {fileName: _jsxFileName, lineNumber: 140}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 139}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 138}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 133}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 132}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 39}, this)
  );
}
