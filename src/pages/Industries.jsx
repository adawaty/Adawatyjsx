const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Cairo Circuit Futurism — Industries (programmatic SEO index)
- Lists target sectors and links to detailed pages
*/

import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { site } from "@/lib/content";
import { getIndustries } from "@/lib/contentLocalized";
import { useI18n } from "@/contexts/I18nContext";
import { ArrowRight, Building2 } from "lucide-react";

export default function Industries() {
  const { lang } = useI18n();
  const industries = getIndustries(lang);
  return (
    _jsxDEV(SiteLayout, {
      title: "Industries",
      subtitle: "Programmatic pages designed to rank: sector-specific pains, outcomes, and the DFY pillars that solve them."              ,
 children: [
      _jsxDEV(SeoHead, {
        title: `Industries | ${site.name}`,
        description: "Industry landing pages for e-commerce, SaaS, and real estate—built for Google search and AI Overviews with clear, cite-worthy content."                  ,
        path: "/industries",
        type: "website",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Industries",
          url: new URL("/industries", site.url).toString(),
          isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
        },}, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this
      )

      , _jsxDEV('section', { className: "pt-10", children: 
        _jsxDEV('div', { className: "grid gap-4 lg:grid-cols-3"  , children: 
          industries.map((i) => (
            _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-7"   , children: [
              _jsxDEV('div', { className: "flex items-center justify-between gap-3"   , children: [
                _jsxDEV(Badge, { className: "bg-white/6 border border-white/10 text-foreground"   , children: "Industry page" }, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this)
                , _jsxDEV(Building2, { className: "h-4 w-4 text-primary"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 43}, this)
              , _jsxDEV('div', { className: "mt-3 text-xl font-semibold"  , children: i.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)
              , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: i.summary}, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this)
              , _jsxDEV('div', { className: "mt-5", children: 
                _jsxDEV(Button, { asChild: true, children: 
                  _jsxDEV(Link, { href: `/industries/${i.id}`, children: ["View page "
                      , _jsxDEV(ArrowRight, { className: "ml-2 h-4 w-4"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this )
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 51}, this)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this)
            ]}, i.id, true, {fileName: _jsxFileName, lineNumber: 42}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this)

      , _jsxDEV('section', { className: "mt-12 pb-6" , children: 
        _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-7"   , children: [
          _jsxDEV('div', { className: "text-lg font-semibold" , children: "Why industry pages help you own results"      }, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)
          , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground max-w-3xl"   , children: "Google and AI Overviews reward pages that answer specific questions with clear structure. Each industry page is built to match sector intent: pains, outcomes, and the exact DFY deliverables."


          }, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this)
          , _jsxDEV('div', { className: "mt-5", children: 
            _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
              _jsxDEV(Link, { href: "/ai-visibility-audit", children: "Start with an AI Visibility Audit"     }, void 0, false, {fileName: _jsxFileName, lineNumber: 70}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 68}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 62}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 61}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 21}, this)
  );
}
