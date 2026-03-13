const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Cairo Circuit Futurism — AI Visibility Audit (programmatic SEO landing)
Keyword cluster target: AI visibility audit, LLM SEO audit, AEO audit, AI Overviews optimization.
*/

import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { site } from "@/lib/content";
import { ArrowRight, Search, ShieldCheck, Spline, BarChart3 } from "lucide-react";

export default function AiVisibilityAudit() {
  const title = `AI Visibility Audit | ${site.name}`;
  const description =
    "A structured audit to improve your brand’s presence in Google Search, AI Overviews, and AI assistants via entity clarity, AEO content, and competitor benchmarks.";

  const faq = [
    {
      q: "What is an AI Visibility Audit?",
      a: "An audit that evaluates how your brand appears in AI answers and search results today, why competitors get cited, and what to change on your site and across the web to earn more citations and visibility.",
    },
    {
      q: "How is this different from a normal SEO audit?",
      a: "Traditional SEO audits focus heavily on rankings and technical checks. This audit also focuses on answer-worthiness (AEO), entity clarity, and citation signals that influence AI Overviews and LLM answers.",
    },
    {
      q: "How do you measure improvement?",
      a: "We track a fixed query set, brand mentions/citations in AI answers, and classic SEO indicators (index coverage, impressions, rankings). We connect that to conversions so the work stays business-driven.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    _jsxDEV(SiteLayout, {
      title: "AI Visibility Audit"  ,
      subtitle: "Outrank competitors in AI answers by improving entity clarity, answer-worthiness, and proof signals."            ,
 children: [
      _jsxDEV(SeoHead, { title: title, description: description, path: "/ai-visibility-audit", type: "article", jsonLd: faqJsonLd,}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this )

      , _jsxDEV('section', { className: "pt-10", children: 
        _jsxDEV('div', { className: "grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-start"   , children: [
          _jsxDEV(Card, { className: "glass rounded-2xl p-7"  , children: [
            _jsxDEV('div', { className: "flex items-center justify-between gap-3"   , children: [
              _jsxDEV(Badge, { className: "bg-accent/20 text-accent border border-accent/40"   , children: "AEO + LLMSEO"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this)
              , _jsxDEV('span', { className: "text-xs text-primary" , children: "Audit → plan → upgrades"    }, void 0, false, {fileName: _jsxFileName, lineNumber: 57}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 55}, this)

            , _jsxDEV('h2', { className: "mt-4 text-2xl sm:text-3xl font-semibold text-balance"    , children: "What we audit"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 60}, this)
            , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground max-w-3xl"   , children: description}, void 0, false, {fileName: _jsxFileName, lineNumber: 61}, this)

            , _jsxDEV('div', { className: "mt-6 grid gap-4 lg:grid-cols-3"   , children: 
              [{
                t: "Competitive answer map",
                d: "Which competitors show up for your money queries—and which sources the models cite.",
                i: Search,
              },
              {
                t: "Entity clarity",
                d: "Who you are, what you do, and why you’re the best answer—expressed consistently across pages.",
                i: Spline,
              },
              {
                t: "Proof + structure",
                d: "Content structure that’s easy to cite + evidence signals (case studies, benchmarks, consistency).",
                i: ShieldCheck,
              }].map((x) => (
                _jsxDEV(Card, { className: "rounded-2xl border border-white/10 bg-white/3 p-6"    , children: [
                  _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
                    _jsxDEV(x.i, { className: "h-5 w-5 text-primary"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 81}, this )
                    , _jsxDEV('div', { className: "text-base font-semibold" , children: x.t}, void 0, false, {fileName: _jsxFileName, lineNumber: 82}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 80}, this)
                  , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: x.d}, void 0, false, {fileName: _jsxFileName, lineNumber: 84}, this)
                ]}, x.t, true, {fileName: _jsxFileName, lineNumber: 79}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)

            , _jsxDEV('div', { className: "mt-6 circuit-divider" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 89}, this )

            , _jsxDEV('h3', { className: "mt-6 text-lg font-semibold"  , children: "Audit outputs" }, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this)
            , _jsxDEV('ul', { className: "mt-3 grid gap-2 text-sm text-muted-foreground"    , children: 
              [
                "Query set + benchmark (what AI assistants say today)",
                "Page-by-page fixes (structure, semantics, internal links)",
                "LLM-ready content briefs (FAQs, comparisons, definitions)",
                "Measurement plan (impressions, rankings, citations/mentions, conversions)",
              ].map((b) => (
                _jsxDEV('li', { className: "flex gap-2" , children: [
                  _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-primary"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 100}, this )
                  , _jsxDEV('span', { children: b}, void 0, false, {fileName: _jsxFileName, lineNumber: 101}, this)
                ]}, b, true, {fileName: _jsxFileName, lineNumber: 99}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 92}, this)

            , _jsxDEV('div', { className: "mt-6 flex flex-col gap-3 sm:flex-row"    , children: [
              _jsxDEV(Button, { asChild: true, size: "lg", className: "shadow-[0_0_40px_oklch(0.73_0.16_190/0.25)]", children: 
                _jsxDEV(Link, { href: "/contact", children: ["Request an audit "
                     , _jsxDEV(ArrowRight, { className: "ml-2 h-4 w-4"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 109}, this )
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 108}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 107}, this)
              , _jsxDEV(Button, { asChild: true, size: "lg", variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
                _jsxDEV(Link, { href: "/services", children: "See all services"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 113}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 112}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 106}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 54}, this)

          , _jsxDEV(Card, { className: "glass rounded-2xl p-7"  , children: [
            _jsxDEV('div', { className: "flex items-center gap-2 text-sm font-medium"    , children: [
              _jsxDEV(BarChart3, { className: "h-4 w-4 text-accent"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 120}, this ), "How you “own the results”"

            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 119}, this)
            , _jsxDEV('p', { className: "mt-3 text-sm text-muted-foreground"  , children: "AI Overviews and assistants prefer sources that are clear, specific, and consistently referenced. We help you win by:"

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 123}, this)
            , _jsxDEV('ul', { className: "mt-4 grid gap-2 text-sm text-muted-foreground"    , children: 
              [
                "Answer-first page structure (definitions, FAQs, comparisons)",
                "Strong entity signals and internal linking (no ambiguity)",
                "Proof signals that are easy to cite (work, benchmarks, repeatable claims)",
                "Distributed presence: mentions and references beyond your site",
              ].map((b) => (
                _jsxDEV('li', { className: "flex gap-2" , children: [
                  _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-accent"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 134}, this )
                  , _jsxDEV('span', { children: b}, void 0, false, {fileName: _jsxFileName, lineNumber: 135}, this)
                ]}, b, true, {fileName: _jsxFileName, lineNumber: 133}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 126}, this)
            , _jsxDEV('div', { className: "mt-6 rounded-2xl border border-white/10 bg-white/3 p-6"     , children: [
              _jsxDEV('div', { className: "text-sm font-medium" , children: "Pro tip" }, void 0, false, {fileName: _jsxFileName, lineNumber: 140}, this)
              , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: "Don’t chase every keyword. Pick the exact questions your best buyers ask, then become the most cite-worthy source for those."

              }, void 0, false, {fileName: _jsxFileName, lineNumber: 141}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 139}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 118}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 53}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this)

      , _jsxDEV('section', { className: "mt-12 pb-6" , children: 
        _jsxDEV(Card, { className: "glass rounded-2xl p-7"  , children: [
          _jsxDEV('div', { className: "text-lg font-semibold" , children: "FAQ"}, void 0, false, {fileName: _jsxFileName, lineNumber: 151}, this)
          , _jsxDEV('div', { className: "mt-4 grid gap-4 lg:grid-cols-3"   , children: 
            faq.map((f) => (
              _jsxDEV(Card, { className: "rounded-2xl border border-white/10 bg-white/3 p-6"    , children: [
                _jsxDEV('div', { className: "text-base font-semibold" , children: f.q}, void 0, false, {fileName: _jsxFileName, lineNumber: 155}, this)
                , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: f.a}, void 0, false, {fileName: _jsxFileName, lineNumber: 156}, this)
              ]}, f.q, true, {fileName: _jsxFileName, lineNumber: 154}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 152}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 150}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 149}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 46}, this)
  );
}
