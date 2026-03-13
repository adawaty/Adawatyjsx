const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime"; function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }/*
Cairo Circuit Futurism — Home (narrative upgrade)
- DFY branding + websites + solutions studio
- Persuasive (ethical): clarity, specificity, proof, risk reversal
*/

import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import BrandBuildDemandDiagram from "@/components/BrandBuildDemandDiagram";
import ScrollChapters from "@/components/ScrollChapters";
import SuccessStoriesTeaser from "@/components/SuccessStoriesTeaser";
import { site } from "@/lib/content";
import heroImg from "@/assets/adawaty-hero-education-industry-02.jpeg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { clients } from "@/lib/content";
import { getServices, getAudiences, getCaseStudies } from "@/lib/contentLocalized";
import { useI18n } from "@/contexts/I18nContext";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,

  BarChart3,
  PenTool,
  Laptop,
  Wand2,



} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const reduceMotion = useReducedMotion();
  const { t, lang, dir } = useI18n();
  const services = getServices(lang);
  const audiences = getAudiences(lang);
  const caseStudies = getCaseStudies(lang);
  const DirArrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    	_jsxDEV(SiteLayout, { children: [
      _jsxDEV(SeoHead, {
        title: `${site.name} | DFY Branding, Web & AI Visibility`,
        description: "Adawaty is a DFY studio delivering Brand → Build → Demand: positioning, identity, premium websites, apps, content workflows, and Search + AI Visibility (SEO/AEO/LLMSEO)."                       ,
        path: "/",
        type: "website",
        jsonLd: [
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: site.url,
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: site.url,
            potentialAction: {
              "@type": "SearchAction",
              target: `${site.url}/?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          },
        ],}, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this
      )
      /* Hero */
      , _jsxDEV('section', { className: "pt-12 sm:pt-16" , children: 
        _jsxDEV('div', { className: "relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/6 to-white/2"       , children: [
          !reduceMotion ? (
            _jsxDEV(motion.div, {
              'aria-hidden': "true",
              className: "pointer-events-none absolute -inset-24 opacity-60"   ,
              animate: { rotate: 360 },
              transition: { duration: 40, ease: "linear", repeat: Infinity },
 children: 
              _jsxDEV('div', { className: "absolute inset-0 bg-radial-glow"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 86}, this )
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 80}, this)
          ) : null
          , _jsxDEV('div', { className: "absolute inset-0" , children: [
            !reduceMotion ? (
              _jsxDEV(motion.div, {
                'aria-hidden': "true",
                className: "absolute inset-0" ,
                animate: { scale: [1, 1.03, 1], x: [0, -10, 0], y: [0, 6, 0] },
                transition: { duration: 14, ease: "easeInOut", repeat: Infinity },
 children: 
                _jsxDEV('img', {
              src: heroImg,
              alt: "Abstract hero background"  ,
              className: "h-full w-full object-cover opacity-65"   ,
              loading: "eager",
              fetchPriority: "high",
              width: 1376,
              height: 768,}, void 0, false, {fileName: _jsxFileName, lineNumber: 97}, this
                )
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this)
            ) : (
              _jsxDEV('img', {
                src: heroImg,
                alt: "Abstract hero background"  ,
                className: "h-full w-full object-cover opacity-65"   ,
                loading: "eager",
                fetchPriority: "high",
                width: 1376,
                height: 768,}, void 0, false, {fileName: _jsxFileName, lineNumber: 108}, this
              )
            )
            , _jsxDEV('div', { className: "absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 118}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 89}, this)

          , _jsxDEV('div', { className: "relative grid gap-10 px-5 py-10 sm:px-10 sm:py-16 lg:grid-cols-[1.1fr_0.9fr]"       , children: [
            _jsxDEV(motion.div, {
              variants: { hidden: {}, show: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } } },
              initial: "hidden",
              animate: "show",
              className: "max-w-2xl",
 children: [
              _jsxDEV(motion.div, { variants: fade, children: 
                _jsxDEV(Badge, { className: "bg-primary/20 text-primary border border-primary/40"   , children: 
                  t("hero.badge")
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 129}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 128}, this)
              , _jsxDEV(motion.h1, {
                variants: fade,
                className: "mt-4 text-3xl sm:text-6xl font-semibold leading-[1.08] text-balance"     ,
 children: [
                t("hero.h1")
                , _jsxDEV('span', { className: "text-muted-foreground", children: [" " , t("hero.h1.sub")]}, void 0, true, {fileName: _jsxFileName, lineNumber: 138}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 133}, this)
              , _jsxDEV(motion.p, { variants: fade, className: "mt-4 text-base sm:text-lg text-muted-foreground max-w-xl"    , children: 
                t("hero.p")
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 140}, this)

              , _jsxDEV(motion.div, { variants: fade, className: "mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"     , children: [
                _jsxDEV(Button, { asChild: true, size: "lg", className: "shadow-[0_0_40px_oklch(0.73_0.16_190/0.25)]", children: 
                  _jsxDEV(Link, { href: "/contact", children: [
                    t("cta.getPlan"), " " , _jsxDEV(DirArrow, { className: "ml-2 h-4 w-4"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 147}, this )
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 146}, this)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 145}, this)
                , _jsxDEV(Button, { asChild: true, size: "lg", variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
                  _jsxDEV(Link, { href: "/work", children: t("cta.seeProof")}, void 0, false, {fileName: _jsxFileName, lineNumber: 151}, this)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 150}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 144}, this)

              , _jsxDEV(motion.div, { variants: fade, className: "mt-7 flex flex-wrap gap-2"   , children: 
                [t("hero.chip.1"), t("hero.chip.2"), t("hero.chip.3"), t("hero.chip.4")].map((t) => (
                  _jsxDEV('span', {

                    className: "text-xs rounded-full bg-white/6 border border-white/10 px-3 py-1.5 text-muted-foreground"       ,
 children: 
                    t
                  }, t, false, {fileName: _jsxFileName, lineNumber: 157}, this)
                ))
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 155}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 122}, this)

            , _jsxDEV('div', { className: "relative", children: 
              _jsxDEV('div', { className: "glass premium-card rounded-2xl p-5 sm:p-6"    , children: [
                _jsxDEV('div', { className: "flex items-center gap-2 text-sm font-medium"    , children: [
                  _jsxDEV(Sparkles, { className: "h-4 w-4 text-accent"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 170}, this )
                  , t("home.premiumSystem.title")
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 169}, this)
                , _jsxDEV('div', { className: "mt-4 grid gap-3"  , children: 
                  [
                    { icon: PenTool, t: t("home.premiumSystem.p1.t"), d: t("home.premiumSystem.p1.d") },
                    { icon: Laptop, t: t("home.premiumSystem.p2.t"), d: t("home.premiumSystem.p2.d") },
                    { icon: Wand2, t: t("home.premiumSystem.p3.t"), d: t("home.premiumSystem.p3.d") },
                    { icon: BarChart3, t: t("home.premiumSystem.p4.t"), d: t("home.premiumSystem.p4.d") }
                  ].map((x) => (
                    _jsxDEV('div', { className: "premium-card rounded-xl border border-white/10 bg-white/3 px-4 py-3"      , children: 
                      _jsxDEV('div', { className: "flex items-start gap-3"  , children: [
                        _jsxDEV(x.icon, { className: "mt-0.5 h-5 w-5 text-primary"   , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 182}, this )
                        , _jsxDEV('div', { children: [
                          _jsxDEV('div', { className: "text-sm font-semibold" , children: x.t}, void 0, false, {fileName: _jsxFileName, lineNumber: 184}, this)
                          , _jsxDEV('div', { className: "text-xs text-muted-foreground mt-0.5"  , children: x.d}, void 0, false, {fileName: _jsxFileName, lineNumber: 185}, this)
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 183}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 181}, this)
                    }, x.t, false, {fileName: _jsxFileName, lineNumber: 180}, this)
                  ))
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 173}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 168}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 167}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 121}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 78}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 77}, this)

      /* Trust strip (Meteory-style signals, Met71-style calm cards) */
      , _jsxDEV('section', { className: "mt-16", children: 
        _jsxDEV('div', { className: "grid gap-3 sm:grid-cols-3"  , children: 
          [{
            k: t("home.trust.sprints.k"),
            v: t("home.trust.sprints.v"),
          },
          {
            k: t("home.trust.handover.k"),
            v: t("home.trust.handover.v"),
          },
          {
            k: t("home.trust.ai.k"),
            v: t("home.trust.ai.v"),
          }].map((x) => (
            _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-5"   , children: [
              _jsxDEV('div', { className: "text-sm font-semibold" , children: x.k}, void 0, false, {fileName: _jsxFileName, lineNumber: 213}, this)
              , _jsxDEV('div', { className: "mt-1 text-sm text-muted-foreground"  , children: x.v}, void 0, false, {fileName: _jsxFileName, lineNumber: 214}, this)
            ]}, x.k, true, {fileName: _jsxFileName, lineNumber: 212}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 199}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 198}, this)

      /* Scroll stopper: Personas */
      , _jsxDEV(ScrollChapters, {
        className: "mt-16",
        chapters: [
          {
            eyebrow: t("home.chapter.law.eyebrow"),
            title: t("home.chapter.law.title"),
            body: t("home.chapter.law.body"),
            bullets: [t("home.chapter.law.b1"), t("home.chapter.law.b2"), t("home.chapter.law.b3")],
          },
          {
            eyebrow: t("home.chapter.med.eyebrow"),
            title: t("home.chapter.med.title"),
            body: t("home.chapter.med.body"),
            bullets: [t("home.chapter.med.b1"), t("home.chapter.med.b2"), t("home.chapter.med.b3")],
          },
          {
            eyebrow: t("home.chapter.biz.eyebrow"),
            title: t("home.chapter.biz.title"),
            body: t("home.chapter.biz.body"),
            bullets: [t("home.chapter.biz.b1"), t("home.chapter.biz.b2"), t("home.chapter.biz.b3")],
          },
          {
            eyebrow: t("home.chapter.exec.eyebrow"),
            title: t("home.chapter.exec.title"),
            body: t("home.chapter.exec.body"),
            bullets: [t("home.chapter.exec.b1"), t("home.chapter.exec.b2"), t("home.chapter.exec.b3")],
          },
        ],}, void 0, false, {fileName: _jsxFileName, lineNumber: 221}, this
      )

      /* Niche / differentiation */
      , _jsxDEV('section', { className: "mt-16", children: [
        _jsxDEV('div', { className: "glass premium-card rounded-2xl border border-white/10 bg-white/2 px-4 py-4 sm:px-6"        , children: 
          _jsxDEV(BrandBuildDemandDiagram, { className: "w-full h-auto" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 254}, this )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 253}, this)
        , _jsxDEV('div', { className: "grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-start"   , children: [
          _jsxDEV('div', { children: [
            _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold text-balance"   , children: "One niche: Brand → Build → Demand (DFY, end-to-end)."        }, void 0, false, {fileName: _jsxFileName, lineNumber: 258}, this)
            , _jsxDEV('p', { className: "mt-2 text-muted-foreground max-w-2xl text-balance"   , children: "Many vendors deliver pieces. Adawaty delivers the full system—strategy, build, content, and discoverability—so your team keeps momentum after launch."

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 259}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 257}, this)
          , _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-6"   , children: [
            _jsxDEV('div', { className: "text-sm font-medium" , children: "Risk reversal" }, void 0, false, {fileName: _jsxFileName, lineNumber: 264}, this)
            , _jsxDEV('ul', { className: "mt-3 grid gap-2 text-sm text-muted-foreground"    , children: 
              [
                "Fixed scope per sprint (clear deliverables)",
                "Weekly check-ins + visible progress",
                "Handover docs and templates included",
                "AI workflows with safety boundaries",
              ].map((x) => (
                _jsxDEV('li', { className: "flex gap-2" , children: [
                  _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-accent"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 273}, this )
                  , _jsxDEV('span', { children: x}, void 0, false, {fileName: _jsxFileName, lineNumber: 274}, this)
                ]}, x, true, {fileName: _jsxFileName, lineNumber: 272}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 265}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 263}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 256}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 252}, this)

      , _jsxDEV(SuccessStoriesTeaser, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 282}, this )

      /* Digital + Web (integrated) */
      , _jsxDEV('section', { className: "mt-16 section-wash-1 rounded-3xl border border-white/10 p-4 sm:p-8"      , children: [
        _jsxDEV('div', { className: "flex items-end justify-between gap-6"   , children: [
          _jsxDEV('div', { children: [
            _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold"  , children: "Digital + Web, integrated"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 288}, this)
            , _jsxDEV('p', { className: "mt-2 text-muted-foreground max-w-2xl text-balance"   , children: "Not “a website” and “marketing” as separate vendors. We build the digital experience and the demand engine together."

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 289}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 287}, this)
          , _jsxDEV('div', { className: "hidden sm:flex items-center gap-2"   , children: [
            _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
              _jsxDEV(Link, { href: "/solutions", children: t("home.pillars.cta")}, void 0, false, {fileName: _jsxFileName, lineNumber: 295}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 294}, this)
            , _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
              _jsxDEV(Link, { href: "/for", children: "Choose your page"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 298}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 297}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 293}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 286}, this)

        , _jsxDEV('div', { className: "mt-8 grid gap-4 lg:grid-cols-3"   , children: 
          [{
            t: "Experience (UI/UX)",
            d: "Clear hierarchy, fast trust, and one primary action per section.",
            chips: ["IA", "UX writing", "CRO"],
          },
          {
            t: "Build (performance)",
            d: "A premium site that loads fast, tracks conversions, and is easy to iterate.",
            chips: ["Core Web Vitals", "Analytics", "Landing pages"],
          },
          {
            t: "Demand (SEO + AI)",
            d: "Content + visibility so buyers find you in Google, AI Overviews, and assistants.",
            chips: ["AEO", "LLMSEO", "Programmatic pages"],
          }].map((x) => (
            _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-6"   , children: [
              _jsxDEV('div', { className: "text-lg font-semibold" , children: x.t}, void 0, false, {fileName: _jsxFileName, lineNumber: 320}, this)
              , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: x.d}, void 0, false, {fileName: _jsxFileName, lineNumber: 321}, this)
              , _jsxDEV('div', { className: "mt-4 flex flex-wrap gap-2"   , children: 
                x.chips.map((c) => (
                  _jsxDEV('span', { className: "text-xs rounded-full bg-white/6 border border-white/10 px-2.5 py-1"      , children: 
                    c
                  }, c, false, {fileName: _jsxFileName, lineNumber: 324}, this)
                ))
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 322}, this)
            ]}, x.t, true, {fileName: _jsxFileName, lineNumber: 319}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 303}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 285}, this)

      /* Services */
      , _jsxDEV('section', { className: "mt-16 section-wash-3 rounded-3xl border border-white/10 p-4 sm:p-8"      , children: [
        _jsxDEV('div', { className: "flex items-end justify-between gap-6"   , children: [
          _jsxDEV('div', { children: [
            _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold"  , children: t("home.pillars.title")}, void 0, false, {fileName: _jsxFileName, lineNumber: 338}, this)
            , _jsxDEV('p', { className: "mt-2 text-muted-foreground max-w-2xl"  , children: 
              t("home.pillars.subtitle")
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 339}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 337}, this)
          , _jsxDEV(Button, { asChild: true, variant: "secondary", className: "hidden sm:inline-flex bg-white/6 hover:bg-white/10"   , children: 
            _jsxDEV(Link, { href: "/solutions", children: "See solutions" }, void 0, false, {fileName: _jsxFileName, lineNumber: 344}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 343}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 336}, this)
        , _jsxDEV('div', { className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3"    , children: [
          services
            .filter((x) => x.pillar !== "Concierge")
            .map((s) => (
              _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-6"   , children: [
                _jsxDEV('div', { className: "flex items-center justify-between gap-3"   , children: [
                  _jsxDEV('div', { className: "flex items-center justify-between gap-3"   , children: [
                    _jsxDEV('div', { className: "text-lg font-semibold" , children: 
                      _jsxDEV(Link, { href: `/services/${s.id}`, className: "hover:text-primary transition-colors" , children: 
                        s.title
                      }, void 0, false, {fileName: _jsxFileName, lineNumber: 355}, this)
                    }, void 0, false, {fileName: _jsxFileName, lineNumber: 354}, this)
                    , _jsxDEV('span', { className: "text-[11px] rounded-full bg-white/6 border border-white/10 px-2 py-1 text-muted-foreground"       , children: 
                      s.pillar
                    }, void 0, false, {fileName: _jsxFileName, lineNumber: 359}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 353}, this)
                  , _jsxDEV('span', { className: "text-[11px] rounded-full bg-white/6 border border-white/10 px-2 py-1 text-muted-foreground"       , children: 
                    s.pillar
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 363}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 352}, this)
                , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: s.summary}, void 0, false, {fileName: _jsxFileName, lineNumber: 367}, this)
                , _jsxDEV('div', { className: "mt-4 flex flex-wrap gap-2"   , children: 
                  s.bullets.slice(0, 2).map((b) => (
                    _jsxDEV('span', { className: "text-xs rounded-full bg-white/6 border border-white/10 px-2.5 py-1"      , children: 
                      b
                    }, b, false, {fileName: _jsxFileName, lineNumber: 370}, this)
                  ))
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 368}, this)
              ]}, s.id, true, {fileName: _jsxFileName, lineNumber: 351}, this)
            ))

          , _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-6 ring-1 ring-accent/50"     , children: [
            _jsxDEV('div', { className: "flex items-center justify-between gap-3"   , children: [
              _jsxDEV('div', { className: "text-lg font-semibold" , children: t("home.pillars.concierge")}, void 0, false, {fileName: _jsxFileName, lineNumber: 380}, this)
              , _jsxDEV('span', { className: "text-[11px] rounded-full bg-accent/20 border border-accent/40 px-2 py-1 text-accent"       , children: 
                t("home.pillars.ongoing")
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 381}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 379}, this)
            , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: 
              t("home.pillars.conciergeDesc")
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 385}, this)
            , _jsxDEV('div', { className: "mt-4 flex flex-wrap gap-2"   , children: 
              _optionalChain([services
, 'access', _ => _.find, 'call', _2 => _2((x) => x.pillar === "Concierge")
, 'optionalAccess', _3 => _3.bullets, 'access', _4 => _4.slice, 'call', _5 => _5(0, 2)
, 'access', _6 => _6.map, 'call', _7 => _7((b) => (
                  _jsxDEV('span', { className: "text-xs rounded-full bg-white/6 border border-white/10 px-2.5 py-1"      , children: 
                    b
                  }, b, false, {fileName: _jsxFileName, lineNumber: 393}, this)
                ))])
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 388}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 378}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 347}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 335}, this)

      /* Packages (decision simplifier) */
      , _jsxDEV('section', { className: "mt-16", children: [
        _jsxDEV('div', { className: "flex items-end justify-between gap-6"   , children: 
          _jsxDEV('div', { children: [
            _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold"  , children: t("home.packages.title")}, void 0, false, {fileName: _jsxFileName, lineNumber: 406}, this)
            , _jsxDEV('p', { className: "mt-2 text-muted-foreground max-w-2xl"  , children: 
              t("home.packages.subtitle")
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 407}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 405}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 404}, this)
        , _jsxDEV('div', { className: "mt-8 grid gap-4 lg:grid-cols-3"   , children: 
          [
            {
              t: t("home.packages.starter.t"),
              tag: t("home.packages.starter.tag"),
              b: [t("home.packages.starter.b1"), t("home.packages.starter.b2"), t("home.packages.starter.b3"), t("home.packages.starter.b4")],
            },
            {
              t: t("home.packages.growth.t"),
              tag: t("home.packages.growth.tag"),
              b: [t("home.packages.growth.b1"), t("home.packages.growth.b2"), t("home.packages.growth.b3"), t("home.packages.growth.b4")],
              highlight: true,
            },
            {
              t: t("home.packages.enterprise.t"),
              tag: t("home.packages.enterprise.tag"),
              b: [t("home.packages.enterprise.b1"), t("home.packages.enterprise.b2"), t("home.packages.enterprise.b3"), t("home.packages.enterprise.b4")],
            },
          ].map((p) => (
            _jsxDEV(Card, {

              className: 
                "glass rounded-2xl p-6 " +
                (p.highlight ? "ring-1 ring-primary/60 shadow-[0_0_60px_oklch(0.73_0.16_190/0.18)]" : "")
              ,
 children: [
              _jsxDEV('div', { className: "flex items-start justify-between gap-3"   , children: [
                _jsxDEV('div', { children: [
                  _jsxDEV('div', { className: "text-lg font-semibold" , children: p.t}, void 0, false, {fileName: _jsxFileName, lineNumber: 440}, this)
                  , _jsxDEV('div', { className: "mt-1 text-xs text-muted-foreground"  , children: p.tag}, void 0, false, {fileName: _jsxFileName, lineNumber: 441}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 439}, this)
                , p.highlight ? (
                  _jsxDEV(Badge, { className: "bg-accent/25 text-accent border border-accent/40"   , children: t("home.packages.mostChosen")}, void 0, false, {fileName: _jsxFileName, lineNumber: 444}, this)
                ) : null
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 438}, this)
              , _jsxDEV('ul', { className: "mt-4 grid gap-2 text-sm text-muted-foreground"    , children: 
                p.b.map((x) => (
                  _jsxDEV('li', { className: "flex gap-2" , children: [
                    _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-primary"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 450}, this )
                    , _jsxDEV('span', { children: x}, void 0, false, {fileName: _jsxFileName, lineNumber: 451}, this)
                  ]}, x, true, {fileName: _jsxFileName, lineNumber: 449}, this)
                ))
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 447}, this)
              , _jsxDEV('div', { className: "mt-5", children: 
                _jsxDEV(Button, { asChild: true, className: "w-full", children: 
                  _jsxDEV(Link, { href: "/contact", children: t("home.packages.cta")}, void 0, false, {fileName: _jsxFileName, lineNumber: 457}, this)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 456}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 455}, this)
            ]}, p.t, true, {fileName: _jsxFileName, lineNumber: 431}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 412}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 403}, this)

      /* Audiences (diagonal cut) */
      , _jsxDEV('section', { className: "mt-18 diag-top rounded-3xl bg-white/2 border border-white/10"     , children: 
        _jsxDEV('div', { className: "px-6 py-14 sm:px-10"  , children: [
          _jsxDEV('div', { className: "flex flex-col gap-2"  , children: [
            _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold text-balance"   , children: t("home.audiences.title")}, void 0, false, {fileName: _jsxFileName, lineNumber: 469}, this)
            , _jsxDEV('p', { className: "text-muted-foreground max-w-2xl" , children: 
              t("home.audiences.subtitle")
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 470}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 468}, this)

          , _jsxDEV('div', { className: "mt-8 grid gap-4 lg:grid-cols-3"   , children: 
            audiences.map((i) => (
              _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-6"   , children: [
                _jsxDEV('div', { className: "text-lg font-semibold" , children: i.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 478}, this)
                , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: i.summary}, void 0, false, {fileName: _jsxFileName, lineNumber: 479}, this)
                , _jsxDEV('ul', { className: "mt-4 grid gap-2 text-sm text-muted-foreground"    , children: 
                  i.outcomes.slice(0, 3).map((o) => (
                    _jsxDEV('li', { className: "flex gap-2" , children: [
                      _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-accent"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 483}, this )
                      , _jsxDEV('span', { children: o}, void 0, false, {fileName: _jsxFileName, lineNumber: 484}, this)
                    ]}, o, true, {fileName: _jsxFileName, lineNumber: 482}, this)
                  ))
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 480}, this)
              ]}, i.id, true, {fileName: _jsxFileName, lineNumber: 477}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 475}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 467}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 466}, this)

      /* Clients */
      , _jsxDEV('section', { className: "mt-16", children: [
        _jsxDEV('div', { className: "flex items-end justify-between gap-6"   , children: [
          _jsxDEV('div', { children: [
            _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold"  , children: t("home.clients.title")}, void 0, false, {fileName: _jsxFileName, lineNumber: 498}, this)
            , _jsxDEV('p', { className: "mt-2 text-muted-foreground max-w-2xl"  , children: 
              t("home.clients.subtitle")
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 499}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 497}, this)
          , _jsxDEV(Button, { asChild: true, variant: "secondary", className: "hidden sm:inline-flex bg-white/6 hover:bg-white/10"   , children: 
            _jsxDEV(Link, { href: "/contact", children: t("home.clients.cta")}, void 0, false, {fileName: _jsxFileName, lineNumber: 504}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 503}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 496}, this)

        , _jsxDEV('div', { className: "mt-6 glass rounded-2xl border border-white/10 bg-white/2 p-6"      , children: 
          _jsxDEV('div', { className: "flex flex-wrap gap-2"  , children: 
            clients.map((c) => (
              _jsxDEV('a', {

                href: c.url,
                target: "_blank",
                rel: "noreferrer",
                className: "text-xs rounded-full bg-white/6 border border-white/10 px-3 py-1.5 hover:bg-white/10 transition-colors"        ,
 children: [
                _jsxDEV('span', { className: "text-foreground", children: c.name}, void 0, false, {fileName: _jsxFileName, lineNumber: 518}, this)
                , _jsxDEV('span', { className: "text-muted-foreground", children: [" — "  , c.industry]}, void 0, true, {fileName: _jsxFileName, lineNumber: 519}, this)
              ]}, c.id, true, {fileName: _jsxFileName, lineNumber: 511}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 509}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 508}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 495}, this)

      /* Work */
      , _jsxDEV('section', { className: "mt-16", children: [
        _jsxDEV('div', { className: "flex items-end justify-between gap-6"   , children: [
          _jsxDEV('div', { children: [
            _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold"  , children: t("home.proof.title")}, void 0, false, {fileName: _jsxFileName, lineNumber: 530}, this)
            , _jsxDEV('p', { className: "mt-2 text-muted-foreground max-w-2xl"  , children: 
              t("home.work.subtitle")
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 531}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 529}, this)
          , _jsxDEV(Button, { asChild: true, variant: "secondary", className: "hidden sm:inline-flex bg-white/6 hover:bg-white/10"   , children: 
            _jsxDEV(Link, { href: "/work", children: t("home.proof.browseAll")}, void 0, false, {fileName: _jsxFileName, lineNumber: 536}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 535}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 528}, this)

        , _jsxDEV('div', { className: "mt-8 grid gap-4 lg:grid-cols-3"   , children: 
          caseStudies.slice(0, 3).map((c) => (
            _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-6"   , children: [
              _jsxDEV(Badge, { className: "bg-white/6 border border-white/10 text-foreground"   , children: c.category}, void 0, false, {fileName: _jsxFileName, lineNumber: 543}, this)
              , _jsxDEV('div', { className: "mt-3 text-lg font-semibold"  , children: c.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 544}, this)
              , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: c.summary}, void 0, false, {fileName: _jsxFileName, lineNumber: 545}, this)
              , _jsxDEV('div', { className: "mt-5", children: 
                _jsxDEV(Button, { asChild: true, children: 
                  _jsxDEV(Link, { href: `/work/${c.slug}`, children: [
                    t("home.proof.view"), " " , _jsxDEV(DirArrow, { className: "ml-2 h-4 w-4"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 549}, this )
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 548}, this)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 547}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 546}, this)
            ]}, c.slug, true, {fileName: _jsxFileName, lineNumber: 542}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 540}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 527}, this)

      /* How we work */
      , _jsxDEV('section', { className: "mt-16", children: [
        _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold"  , children: t("home.howWeWork.title")}, void 0, false, {fileName: _jsxFileName, lineNumber: 560}, this)
        , _jsxDEV('p', { className: "mt-2 text-muted-foreground max-w-2xl"  , children: "Strategy\t\t and systems, delivered in sprints—so you launch faster and keep control."

        }, void 0, false, {fileName: _jsxFileName, lineNumber: 561}, this)
        , _jsxDEV('div', { className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4"    , children: 
          [
            { n: "01", t: "Discover", d: "Audit brand, offer, audience, constraints." },
            { n: "02", t: "Design", d: "Messaging + identity + UX structure." },
            { n: "03", t: "Build", d: "Website, templates, assets, analytics." },
            { n: "04", t: "Enable", d: "AI workflows and handover so you scale." },
          ].map((s) => (
            _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-6"   , children: [
              _jsxDEV('div', { className: "text-xs text-muted-foreground" , children: s.n}, void 0, false, {fileName: _jsxFileName, lineNumber: 572}, this)
              , _jsxDEV('div', { className: "mt-2 text-lg font-semibold"  , children: s.t}, void 0, false, {fileName: _jsxFileName, lineNumber: 573}, this)
              , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: s.d}, void 0, false, {fileName: _jsxFileName, lineNumber: 574}, this)
            ]}, s.n, true, {fileName: _jsxFileName, lineNumber: 571}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 564}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 559}, this)

      /* Final CTA */
      , _jsxDEV('section', { className: "mt-16 diag-bottom rounded-3xl bg-gradient-to-b from-white/6 to-white/2 border border-white/10"       , children: 
        _jsxDEV('div', { className: "px-6 py-14 sm:px-10"  , children: [
          _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold text-balance"   , children: "Ready for a turnkey upgrade?"    }, void 0, false, {fileName: _jsxFileName, lineNumber: 583}, this)
          , _jsxDEV('p', { className: "mt-2 text-muted-foreground max-w-2xl"  , children: "Tell us what you want to launch or improve. We’ll propose a DFY scope with a sprint timeline and clear deliverables."

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 584}, this)
          , _jsxDEV('div', { className: "mt-7 flex flex-col gap-3 sm:flex-row"    , children: [
            _jsxDEV(Button, { asChild: true, size: "lg", children: 
              _jsxDEV(Link, { href: "/contact", children: "Start the conversation"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 589}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 588}, this)
            , _jsxDEV(Button, { asChild: true, size: "lg", variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
              _jsxDEV(Link, { href: "/services", children: "Explore services" }, void 0, false, {fileName: _jsxFileName, lineNumber: 592}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 591}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 587}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 582}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 581}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 50}, this)
  );
}
