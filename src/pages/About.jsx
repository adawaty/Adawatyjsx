const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Cairo Circuit Futurism — About (updated)
*/

import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import { site } from "@/lib/content";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    _jsxDEV(SiteLayout, {
      title: "Studio",
      subtitle: "Adawaty is a DFY branding, website development, and solutions studio—your consultancy partner beyond digital transformation."              ,
 children: [
      _jsxDEV(SeoHead, {
        title: `Studio | ${site.name}`,
        description: "About Adawaty: an elite DFY studio delivering Brand → Build → Demand with sprint delivery, systems, templates, and AI visibility."                   ,
        path: "/about",
        type: "website",}, void 0, false, {fileName: _jsxFileName, lineNumber: 16}, this
      )
      , _jsxDEV('section', { className: "pt-10", children: 
        _jsxDEV('div', { className: "grid gap-4 lg:grid-cols-3"  , children: [
          _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-7 lg:col-span-2"    , children: [
            _jsxDEV('div', { className: "text-lg font-semibold" , children: "What we do"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this)
            , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: "We build premium brand and web systems end-to-end. That means we can define positioning and messaging, create the identity, design and develop the website, and deliver a launch kit—without handoffs."


            }, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this)
            , _jsxDEV('p', { className: "mt-4 text-sm text-muted-foreground"  , children: "On top of that, we bring AI enablement in a friendly, practical way: voice kits, workflows, and guardrails so you can scale output without losing quality."


            }, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this)

            , _jsxDEV('div', { className: "mt-6 circuit-divider" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this )

            , _jsxDEV('div', { className: "mt-6 text-lg font-semibold"  , children: "How we work"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)
            , _jsxDEV('div', { className: "mt-3 grid gap-3 sm:grid-cols-2"   , children: 
              [
                {
                  t: "Clarity first",
                  d: "Positioning and messaging before visuals.",
                },
                {
                  t: "Systems, not assets",
                  d: "We deliver reusable templates and rules.",
                },
                {
                  t: "Sprint delivery",
                  d: "Fast progress with stakeholder alignment.",
                },
                {
                  t: "Enablement",
                  d: "AI workflows + handover so you keep momentum.",
                },
              ].map((x) => (
                _jsxDEV('div', { className: "rounded-2xl border border-white/10 bg-white/3 p-5"    , children: [
                  _jsxDEV('div', { className: "text-sm font-semibold" , children: x.t}, void 0, false, {fileName: _jsxFileName, lineNumber: 58}, this)
                  , _jsxDEV('div', { className: "mt-2 text-sm text-muted-foreground"  , children: x.d}, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this)
                ]}, x.t, true, {fileName: _jsxFileName, lineNumber: 57}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 24}, this)

          , _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-7"   , children: [
            _jsxDEV('div', { className: "text-lg font-semibold" , children: "Who we serve"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this)
            , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: "Personal brands, SMBs, and enterprises looking for turnkey outcomes."

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 67}, this)
            , _jsxDEV('ul', { className: "mt-4 grid gap-2 text-sm text-muted-foreground"    , children: 
              [
                "Founders, executives, creators",
                "Product and service businesses",
                "Enterprise teams that need scalable systems",
              ].map((i) => (
                _jsxDEV('li', { className: "flex gap-2" , children: [
                  _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-accent"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 77}, this )
                  , _jsxDEV('span', { children: i}, void 0, false, {fileName: _jsxFileName, lineNumber: 78}, this)
                ]}, i, true, {fileName: _jsxFileName, lineNumber: 76}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 70}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 65}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 23}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 22}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 12}, this)
  );
}
