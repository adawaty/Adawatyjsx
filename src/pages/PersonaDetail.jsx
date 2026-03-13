const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime"; function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }/*
Cairo Circuit Futurism — Persona detail ("for" pages)
- Approachable targeting: lawyers, doctors, business owners
- pSEO-friendly: pains/outcomes/solutions/FAQ
*/

import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import { site } from "@/lib/content";
import { getPersonas, getSolutions } from "@/lib/contentLocalized";
import { useI18n } from "@/contexts/I18nContext";
import { ArrowLeft, ArrowRight } from "lucide-react";
import lawyerHero from "@/assets/generated/persona-lawyer-hero.png";
import doctorHero from "@/assets/generated/persona-doctor-hero.png";
import businessHero from "@/assets/generated/persona-business-hero.png";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function PersonaDetail({ slug }) {
  const { lang, dir, t } = useI18n();
  const DirArrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const personas = getPersonas(lang);
  const solutions = getSolutions(lang);
  const p = personas.find((x) => x.slug === slug);

  if (!p) {
    return (
      _jsxDEV(SiteLayout, { children: [
        _jsxDEV(SeoHead, { title: `${site.name} | Page not found`, description: "Page not found"  , noindex: true, path: `/for/${slug}`,}, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this )
        , _jsxDEV('main', { className: "mx-auto max-w-4xl px-4 sm:px-6 py-12"    , children: [
          _jsxDEV('h1', { className: "text-3xl font-semibold" , children: "Page not found"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this)
          , _jsxDEV('p', { className: "mt-2 text-muted-foreground" , children: "Try the personas hub."   }, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this)
          , _jsxDEV('div', { className: "mt-6", children: 
            _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
              _jsxDEV(Link, { href: "/for", children: "Back to “For”"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 36}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 31}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 29}, this)
    );
  }

  const successJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Success stories — ${p.title}`,
    itemListElement: p.successStories.map((s, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "CreativeWork",
        name: s.headline,
        description: s.context,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "For", item: `${site.url}/for` },
      { "@type": "ListItem", position: 3, name: p.title, item: `${site.url}/for/${p.slug}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What do I get, step-by-step?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We run DFY sprints: scope lock → architecture → design → build → launch → handover. Every sprint has visible deliverables.",
        },
      },
      {
        "@type": "Question",
        name: "Can you connect booking and forms to our workflow?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We map the current process first, then connect scheduling, intake, routing, and reporting so your team actually uses it.",
        },
      },
    ],
  };

  const recSolutions = p.recommendedSolutions
    .map((id) => solutions.find((s) => s.id === id))
    .filter(Boolean);

  const heroBySlug = {
    lawyers: lawyerHero,
    doctors: doctorHero,
    "business-owners": businessHero,
  };
  const hero = _nullishCoalesce(heroBySlug[p.slug], () => ( businessHero));

  return (
    _jsxDEV(SiteLayout, { children: [
      _jsxDEV(SeoHead, {
        title: p.seo.title,
        description: p.seo.description,
        path: `/for/${p.slug}`,
        type: "article",
        jsonLd: [breadcrumbJsonLd, faqJsonLd, successJsonLd],}, void 0, false, {fileName: _jsxFileName, lineNumber: 105}, this
      )

      , _jsxDEV('main', { className: "mx-auto max-w-6xl px-4 sm:px-6 py-12"    , children: [
        _jsxDEV('section', { className: "relative overflow-hidden rounded-3xl border border-white/10 bg-white/3"     , children: [
          _jsxDEV('div', { className: "absolute inset-0" , children: [
            _jsxDEV('img', { src: hero, alt: "Persona hero background"  , className: "h-full w-full object-cover opacity-70"   , loading: "eager",}, void 0, false, {fileName: _jsxFileName, lineNumber: 116}, this )
            , _jsxDEV('div', { className: "absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 117}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 115}, this)
          , _jsxDEV('div', { className: "relative p-6 sm:p-10"  , children: 
            _jsxDEV('div', { className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"     , children: [
          _jsxDEV('div', { children: [
            _jsxDEV('div', { className: "text-xs tracking-[0.24em] uppercase text-primary/90"   , children: "Built for" }, void 0, false, {fileName: _jsxFileName, lineNumber: 122}, this)
            , _jsxDEV('h1', { className: "mt-3 text-3xl sm:text-5xl font-semibold leading-[1.05] text-balance"     , children: p.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 123}, this)
            , _jsxDEV('p', { className: "mt-3 max-w-2xl text-muted-foreground"  , children: p.summary}, void 0, false, {fileName: _jsxFileName, lineNumber: 124}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 121}, this)
          , _jsxDEV(Button, { asChild: true, size: "lg", className: "shadow-[0_0_40px_oklch(0.73_0.16_190/0.25)]", children: 
            _jsxDEV(Link, { href: "/contact", children: "Book a call"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 127}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 126}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 120}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 119}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 114}, this)

        , _jsxDEV('div', { className: "mt-10 grid gap-4 lg:grid-cols-2"   , children: [
          _jsxDEV(Card, { className: "glass rounded-2xl p-6"  , children: [
            _jsxDEV('div', { className: "text-sm font-semibold" , children: t("persona.breakingTrust")}, void 0, false, {fileName: _jsxFileName, lineNumber: 135}, this)
            , _jsxDEV('ul', { className: "mt-3 grid gap-2 text-sm text-muted-foreground"    , children: 
              p.pains.map((x) => (
                _jsxDEV('li', { className: "flex gap-2" , children: [
                  _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-accent"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 139}, this )
                  , _jsxDEV('span', { children: x}, void 0, false, {fileName: _jsxFileName, lineNumber: 140}, this)
                ]}, x, true, {fileName: _jsxFileName, lineNumber: 138}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 136}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 134}, this)
          , _jsxDEV(Card, { className: "glass rounded-2xl p-6"  , children: [
            _jsxDEV('div', { className: "text-sm font-semibold" , children: t("persona.buildInstead")}, void 0, false, {fileName: _jsxFileName, lineNumber: 146}, this)
            , _jsxDEV('ul', { className: "mt-3 grid gap-2 text-sm text-muted-foreground"    , children: 
              p.outcomes.map((x) => (
                _jsxDEV('li', { className: "flex gap-2" , children: [
                  _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-primary"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 150}, this )
                  , _jsxDEV('span', { children: x}, void 0, false, {fileName: _jsxFileName, lineNumber: 151}, this)
                ]}, x, true, {fileName: _jsxFileName, lineNumber: 149}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 147}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 145}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 133}, this)

        , _jsxDEV('section', { className: "mt-12", children: [
          _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold"  , children: t("persona.successStories")}, void 0, false, {fileName: _jsxFileName, lineNumber: 159}, this)
          , _jsxDEV('p', { className: "mt-2 text-muted-foreground max-w-3xl"  , children: 
            t("persona.successStories.subtitle")
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 160}, this)

          , _jsxDEV('div', { className: "mt-6 grid gap-4"  , children: 
            p.successStories.map((s) => (
              _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-6"   , children: [
                _jsxDEV('div', { className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between"     , children: [
                  _jsxDEV('div', { className: "max-w-3xl", children: [
                    _jsxDEV('div', { className: "text-lg font-semibold" , children: s.headline}, void 0, false, {fileName: _jsxFileName, lineNumber: 169}, this)
                    , _jsxDEV('div', { className: "mt-1 text-sm text-muted-foreground"  , children: s.context}, void 0, false, {fileName: _jsxFileName, lineNumber: 170}, this)
                    , _jsxDEV('div', { className: "mt-3 text-xs text-muted-foreground"  , children: [t("persona.timeframe"), ": " , s.timeframe]}, void 0, true, {fileName: _jsxFileName, lineNumber: 171}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 168}, this)
                  , _jsxDEV('div', { className: "grid grid-cols-3 gap-3"  , children: 
                    s.results.map((r) => (
                      _jsxDEV('div', { className: "rounded-xl border border-white/10 bg-white/3 px-3 py-3 text-center"      , children: [
                        _jsxDEV('div', { className: "text-lg font-semibold text-primary"  , children: r.value}, void 0, false, {fileName: _jsxFileName, lineNumber: 176}, this)
                        , _jsxDEV('div', { className: "mt-1 text-[11px] leading-tight text-muted-foreground"   , children: r.label}, void 0, false, {fileName: _jsxFileName, lineNumber: 177}, this)
                      ]}, r.label, true, {fileName: _jsxFileName, lineNumber: 175}, this)
                    ))
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 173}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 167}, this)

                , _jsxDEV('div', { className: "mt-5 circuit-divider" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 183}, this )

                , _jsxDEV('div', { className: "mt-5", children: [
                  _jsxDEV('div', { className: "text-sm font-semibold" , children: t("persona.shipped")}, void 0, false, {fileName: _jsxFileName, lineNumber: 186}, this)
                  , _jsxDEV('ul', { className: "mt-3 grid gap-2 text-sm text-muted-foreground"    , children: 
                    s.whatWeDid.map((x) => (
                      _jsxDEV('li', { className: "flex gap-2" , children: [
                        _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-accent"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 190}, this )
                        , _jsxDEV('span', { children: x}, void 0, false, {fileName: _jsxFileName, lineNumber: 191}, this)
                      ]}, x, true, {fileName: _jsxFileName, lineNumber: 189}, this)
                    ))
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 187}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 185}, this)
              ]}, s.id, true, {fileName: _jsxFileName, lineNumber: 166}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 164}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 158}, this)

        , _jsxDEV('section', { className: "mt-12", children: [
          _jsxDEV('div', { className: "flex items-end justify-between gap-6"   , children: [
            _jsxDEV('div', { children: [
              _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold"  , children: t("persona.recommendedSolutions")}, void 0, false, {fileName: _jsxFileName, lineNumber: 204}, this)
              , _jsxDEV('p', { className: "mt-2 text-muted-foreground max-w-2xl"  , children: 
                t("persona.recommendedSolutions.subtitle")
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 205}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 203}, this)
            , _jsxDEV(Button, { asChild: true, variant: "secondary", className: "hidden sm:inline-flex bg-white/6 hover:bg-white/10"   , children: 
              _jsxDEV(Link, { href: "/solutions", children: t("persona.seeAllSolutions")}, void 0, false, {fileName: _jsxFileName, lineNumber: 210}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 209}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 202}, this)

          , _jsxDEV('div', { className: "mt-6 grid gap-4 md:grid-cols-2"   , children: 
            recSolutions.map((s) => (
              _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-6"   , children: [
                _jsxDEV('div', { className: "text-lg font-semibold" , children: 
                  _jsxDEV(Link, { href: `/solutions/${s.slug}`, className: "hover:text-primary transition-colors" , children: 
                    s.title
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 218}, this)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 217}, this)
                , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: s.summary}, void 0, false, {fileName: _jsxFileName, lineNumber: 222}, this)
                , _jsxDEV('div', { className: "mt-4 flex flex-wrap gap-2"   , children: 
                  s.deliverables.slice(0, 3).map((d) => (
                    _jsxDEV('span', { className: "text-xs rounded-full bg-white/6 border border-white/10 px-2.5 py-1"      , children: 
                      d
                    }, d, false, {fileName: _jsxFileName, lineNumber: 225}, this)
                  ))
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 223}, this)
              ]}, s.id, true, {fileName: _jsxFileName, lineNumber: 216}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 214}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 201}, this)

        , _jsxDEV('section', { className: "mt-12 rounded-3xl border border-white/10 bg-white/3 p-6 sm:p-10"      , children: [
          _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold"  , children: t("persona.marketingPsychology")}, void 0, false, {fileName: _jsxFileName, lineNumber: 236}, this)
          , _jsxDEV('p', { className: "mt-2 text-muted-foreground max-w-3xl"  , children: 
            t("persona.marketingPsychology.subtitle")
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 237}, this)
          , _jsxDEV('div', { className: "mt-6 grid gap-4 md:grid-cols-3"   , children: 
            [{
              t: "Halo effect",
              d: "Better aesthetics increase perceived competence—especially in high-stakes services.",
            },
            {
              t: "Cognitive load",
              d: "Fewer choices, clearer hierarchy, higher conversion.",
            },
            {
              t: "Loss aversion",
              d: "We frame costs of delay: missed bookings, weak trust, manual ops.",
            }].map((x) => (
              _jsxDEV(Card, { className: "glass rounded-2xl p-6"  , children: [
                _jsxDEV('div', { className: "text-sm font-semibold" , children: x.t}, void 0, false, {fileName: _jsxFileName, lineNumber: 254}, this)
                , _jsxDEV('div', { className: "mt-2 text-sm text-muted-foreground"  , children: x.d}, void 0, false, {fileName: _jsxFileName, lineNumber: 255}, this)
              ]}, x.t, true, {fileName: _jsxFileName, lineNumber: 253}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 240}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 235}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 113}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 104}, this)
  );
}
