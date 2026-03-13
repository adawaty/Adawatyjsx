const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime"; function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }/*
Cairo Circuit Futurism — Service detail (programmatic SEO)
- One page per service/pillar to target specific query clusters
- AIO/AEO friendly: definition, outcomes, FAQs, and structured data
*/

import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { services, site } from "@/lib/content";
import { ArrowRight, Sparkles, Search, ShieldCheck } from "lucide-react";
import NotFound from "@/pages/NotFound";

const faqByServiceId = {
  "ai-visibility": [
    {
      q: "What is LLM SEO (LLMSEO)?",
      a: "LLM SEO is optimizing your brand and pages so AI assistants can confidently cite and recommend you. It overlaps with SEO and AEO, but focuses on entity clarity, answer-worthiness, and brand mentions/citations across the web.",
    },
    {
      q: "How do you outrank competitors in AI answers?",
      a: "We improve: (1) entity clarity (who you are), (2) structured coverage (direct answers, FAQs, comparisons), and (3) proof signals (case studies, references, consistency). Then we track mentions and iterate.",
    },
    {
      q: "Does ranking #1 on Google guarantee AI citations?",
      a: "No. Strong rankings help, but AI assistants often cite sources based on clarity, relevance, and trust signals. We optimize for both classic rankings and AI citations.",
    },
  ],
  "brand-intelligence": [
    {
      q: "What do you mean by Brand Intelligence?",
      a: "A strategy sprint that clarifies positioning, audience, and offer structure. It turns your brand into a repeatable message that sales, content, and the website can all reuse.",
    },
    {
      q: "What’s the output of the sprint?",
      a: "A positioning doc, ICP segments, offer architecture, and a narrative map that guides your website and content engine.",
    },
  ],
  "dfy-website": [
    {
      q: "Can you build fast without sacrificing quality?",
      a: "Yes—because we use a tight design system, clear IA, and sprint delivery. We also instrument analytics so the site can be improved post-launch.",
    },
  ],
};

export default function ServiceDetail({ id }) {
  const service = services.find((s) => s.id === id);

  if (!service) return _jsxDEV(NotFound, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this );

  const title = `${service.title} | ${site.name}`;
  const description = service.summary;

  const faqs = _nullishCoalesce(faqByServiceId[id], () => ( []));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    areaServed: "Worldwide",
    serviceType: service.pillar,
    offers: {
      "@type": "Offer",
      url: new URL(`/contact`, site.url).toString(),
    },
  };

  const faqJsonLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    _jsxDEV(SiteLayout, {
      title: service.title,
      subtitle: `${service.pillar} — DFY deliverables, built for clarity and AI-era discoverability.`,
 children: [
      _jsxDEV(SeoHead, {
        title: title,
        description: description,
        path: `/services/${service.id}`,
        type: "article",
        jsonLd: faqJsonLd ? [jsonLd, faqJsonLd] : jsonLd,}, void 0, false, {fileName: _jsxFileName, lineNumber: 96}, this
      )

      , _jsxDEV('section', { className: "pt-10", children: 
        _jsxDEV('div', { className: "grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-start"   , children: [
          _jsxDEV(Card, { className: "glass rounded-2xl p-7"  , children: [
            _jsxDEV('div', { className: "flex items-center justify-between gap-3"   , children: [
              _jsxDEV(Badge, { className: "bg-white/6 border border-white/10 text-foreground"   , children: service.pillar}, void 0, false, {fileName: _jsxFileName, lineNumber: 108}, this)
              , _jsxDEV('span', { className: "text-xs text-primary" , children: "DFY • sprint delivery"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 109}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 107}, this)

            , _jsxDEV('h2', { className: "mt-4 text-2xl sm:text-3xl font-semibold text-balance"    , children: "What you get (deliverables)"

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 112}, this)
            , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground max-w-3xl"   , children: service.summary}, void 0, false, {fileName: _jsxFileName, lineNumber: 115}, this)

            , _jsxDEV('ul', { className: "mt-5 grid gap-2 text-sm text-muted-foreground"    , children: 
              service.bullets.map((b) => (
                _jsxDEV('li', { className: "flex gap-2" , children: [
                  _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-primary"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 120}, this )
                  , _jsxDEV('span', { children: b}, void 0, false, {fileName: _jsxFileName, lineNumber: 121}, this)
                ]}, b, true, {fileName: _jsxFileName, lineNumber: 119}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 117}, this)

            , _jsxDEV('div', { className: "mt-6 flex flex-col gap-3 sm:flex-row"    , children: [
              _jsxDEV(Button, { asChild: true, size: "lg", className: "shadow-[0_0_40px_oklch(0.73_0.16_190/0.25)]", children: 
                _jsxDEV(Link, { href: "/contact", children: ["Request scope "
                    , _jsxDEV(ArrowRight, { className: "ml-2 h-4 w-4"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 129}, this )
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 128}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 127}, this)
              , _jsxDEV(Button, { asChild: true, size: "lg", variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
                _jsxDEV(Link, { href: "/services", children: "Back to services"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 133}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 132}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 126}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 106}, this)

          , _jsxDEV(Card, { className: "glass rounded-2xl p-7"  , children: [
            _jsxDEV('div', { className: "flex items-center gap-2 text-sm font-medium"    , children: [
              _jsxDEV(Sparkles, { className: "h-4 w-4 text-accent"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 140}, this ), "Why this matters in AI search"

            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 139}, this)
            , _jsxDEV('div', { className: "mt-4 grid gap-3 text-sm text-muted-foreground"    , children: [
              _jsxDEV('div', { className: "rounded-xl border border-white/10 bg-white/3 p-4"    , children: [
                _jsxDEV('div', { className: "flex items-center gap-2 font-semibold text-foreground"    , children: [
                  _jsxDEV(Search, { className: "h-4 w-4 text-primary"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 146}, this ), "Answer-worthiness"

                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 145}, this)
                , _jsxDEV('p', { className: "mt-1", children: "We structure content so assistants can lift direct answers (definitions, comparisons, FAQs), not vague marketing."

                }, void 0, false, {fileName: _jsxFileName, lineNumber: 149}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 144}, this)
              , _jsxDEV('div', { className: "rounded-xl border border-white/10 bg-white/3 p-4"    , children: [
                _jsxDEV('div', { className: "flex items-center gap-2 font-semibold text-foreground"    , children: [
                  _jsxDEV(ShieldCheck, { className: "h-4 w-4 text-primary"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 155}, this ), "Trust signals"

                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 154}, this)
                , _jsxDEV('p', { className: "mt-1", children: "We connect claims to proof: measurable outcomes, clear scope, consistent entity signals, and clean semantics."

                }, void 0, false, {fileName: _jsxFileName, lineNumber: 158}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 153}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 143}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 138}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 105}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 104}, this)

      , faqs.length ? (
        _jsxDEV('section', { className: "mt-12", children: 
          _jsxDEV(Card, { className: "glass rounded-2xl p-7"  , children: [
            _jsxDEV('div', { className: "text-lg font-semibold" , children: "FAQ"}, void 0, false, {fileName: _jsxFileName, lineNumber: 170}, this)
            , _jsxDEV('div', { className: "mt-4 grid gap-4 lg:grid-cols-2"   , children: 
              faqs.map((f) => (
                _jsxDEV(Card, { className: "rounded-2xl border border-white/10 bg-white/3 p-6"    , children: [
                  _jsxDEV('div', { className: "text-base font-semibold" , children: f.q}, void 0, false, {fileName: _jsxFileName, lineNumber: 174}, this)
                  , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: f.a}, void 0, false, {fileName: _jsxFileName, lineNumber: 175}, this)
                ]}, f.q, true, {fileName: _jsxFileName, lineNumber: 173}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 171}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 169}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 168}, this)
      ) : null

      , _jsxDEV('section', { className: "mt-12 pb-6" , children: 
        _jsxDEV(Card, { className: "glass rounded-2xl p-7"  , children: [
          _jsxDEV('div', { className: "text-lg font-semibold" , children: "Want this done-for-you?"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 185}, this)
          , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground max-w-2xl"   , children: "Book a call and we’ll propose the fastest DFY path from Brand → Build → Demand, including a measurement plan for SEO + AI visibility."

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 186}, this)
          , _jsxDEV('div', { className: "mt-5", children: 
            _jsxDEV(Button, { asChild: true, children: 
              _jsxDEV(Link, { href: "/contact", children: "Book a call"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 191}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 190}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 189}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 184}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 183}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 92}, this)
  );
}
