const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Cairo Circuit Futurism — Work (portfolio)
*/

import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import { site } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { clients } from "@/lib/content";
import { getCaseStudies } from "@/lib/contentLocalized";
import { useI18n } from "@/contexts/I18nContext";
import { ArrowRight } from "lucide-react";

export default function Work() {
  const { lang } = useI18n();
  const caseStudies = getCaseStudies(lang);
  return (
    _jsxDEV(SiteLayout, {
      title: "Work",
      subtitle: "A starter set showing how we ship: clarity, systems, premium execution. Includes a composite case study and selected clients."                  ,
 children: [
      _jsxDEV(SeoHead, {
        title: `Work | ${site.name}`,
        description: "Examples of DFY outcomes: premium websites, turnkey launches, and AI visibility foundations."           ,
        path: "/work",
        type: "website",}, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this
      )
      , _jsxDEV('section', { className: "pt-10", children: [
        _jsxDEV('div', { className: "glass premium-card rounded-2xl border border-white/10 bg-white/2 p-6"      , children: [
          _jsxDEV('div', { className: "text-sm font-medium" , children: "Selected clients" }, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this)
          , _jsxDEV('div', { className: "mt-3 flex flex-wrap gap-2"   , children: 
            clients.map((c) => (
              _jsxDEV('a', {

                href: c.url,
                target: "_blank",
                rel: "noreferrer",
                className: "text-xs rounded-full bg-white/6 border border-white/10 px-3 py-1.5 hover:bg-white/10 transition-colors"        ,
 children: 
                c.name
              }, c.id, false, {fileName: _jsxFileName, lineNumber: 36}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 32}, this)
        , _jsxDEV('div', { className: "grid gap-4 lg:grid-cols-3"  , children: 
          caseStudies.map((c) => (
            _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-6"   , children: [
              _jsxDEV('div', { className: "flex items-center justify-between"  , children: [
                _jsxDEV(Badge, { className: "bg-white/6 border border-white/10 text-foreground"   , children: c.category}, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this)
                , _jsxDEV('span', { className: "text-xs text-primary" , children: c.highlightMetric}, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 51}, this)
              , _jsxDEV('div', { className: "mt-3 text-lg font-semibold"  , children: c.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this)
              , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: c.summary}, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this)
              , _jsxDEV('div', { className: "mt-4 flex flex-wrap gap-2"   , children: 
                c.tools.slice(0, 3).map((t) => (
                  _jsxDEV('span', { className: "text-xs rounded-full bg-white/6 border border-white/10 px-2.5 py-1"      , children: 
                    t
                  }, t, false, {fileName: _jsxFileName, lineNumber: 59}, this)
                ))
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 57}, this)
              , _jsxDEV('div', { className: "mt-5", children: 
                _jsxDEV(Button, { asChild: true, children: 
                  _jsxDEV(Link, { href: `/work/${c.slug}`, children: ["View case study "
                       , _jsxDEV(ArrowRight, { className: "ml-2 h-4 w-4"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 67}, this )
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 66}, this)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this)
            ]}, c.slug, true, {fileName: _jsxFileName, lineNumber: 50}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 31}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 21}, this)
  );
}
