const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Cairo Circuit Futurism — Services (5 pillars)
- Present the blended offering as an elite, end-to-end system
- Keep scannable: pillar grouping + concrete deliverables
*/

import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import { site } from "@/lib/content";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { getServices } from "@/lib/contentLocalized";
import { useI18n } from "@/contexts/I18nContext";
import {
  ArrowRight,
  Radar,
  Shapes,
  MonitorSmartphone,
  PenLine,
  Search,
  Layers,
  CalendarCheck,
} from "lucide-react";

const pillarOrder = [
  "Brand Intelligence",
  "Brand System",
  "DFY Website",
  "Content Engine",
  "AI Visibility",
  "Concierge",
] ;

const pillarMeta


 = {
  "Brand Intelligence": {
    icon: Radar,
    eyebrow: "Clarity",
    note: "Positioning and offer architecture so your message lands immediately.",
  },
  "Brand System": {
    icon: Shapes,
    eyebrow: "Identity",
    note: "A maintainable system: templates + rules, not just a logo.",
  },
  "DFY Website": {
    icon: MonitorSmartphone,
    eyebrow: "Build",
    note: "Premium UI, performance, and conversion instrumentation.",
  },
  "Content Engine": {
    icon: PenLine,
    eyebrow: "Output",
    note: "On-brand content workflows powered by AI with human review.",
  },
  "AI Visibility": {
    icon: Search,
    eyebrow: "Discover",
    note: "SEO + AEO + LLMSEO so you show up in search and AI answers.",
  },
  Concierge: {
    icon: Layers,
    eyebrow: "Ongoing",
    note: "VIP iteration after launch: updates, experiments, governance.",
  },
};

export default function Services() {
  const { lang } = useI18n();
  const services = getServices(lang);
  const grouped = pillarOrder
    .map((pillar) => ({
      pillar,
      items: services.filter((s) => s.pillar === pillar),
    }))
    .filter((g) => g.items.length > 0);

  return (
    _jsxDEV(SiteLayout, {
      title: "Services",
      subtitle: "An elite DFY system: Brand → Build → Demand. Shipped in sprints, documented for ownership, and upgraded with AI workflows + visibility."                     ,
 children: [
      _jsxDEV(SeoHead, {
        title: `Services | ${site.name}`,
        description: "Done-for-you branding, websites, content workflows, and AI visibility (SEO/AEO/LLMSEO). Explore the 5 pillars and the AI Visibility Audit."                 ,
        path: "/services",
        type: "website",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Adawaty Services",
          url: new URL("/services", site.url).toString(),
          isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
        },}, void 0, false, {fileName: _jsxFileName, lineNumber: 88}, this
      )
      /* Pillars */
      , _jsxDEV('section', { className: "pt-10", children: 
        _jsxDEV('div', { className: "grid gap-4" , children: 
          grouped.map((g) => {
            const meta = pillarMeta[g.pillar];
            const Icon = meta.icon;

            return (
              _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-7"   , children: [
                _jsxDEV('div', { className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"     , children: [
                  _jsxDEV('div', { className: "min-w-0", children: [
                    _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
                      _jsxDEV(Icon, { className: "h-5 w-5 text-primary"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 113}, this )
                      , _jsxDEV('div', { className: "text-xs tracking-widest uppercase text-muted-foreground"   , children: 
                        meta.eyebrow
                      }, void 0, false, {fileName: _jsxFileName, lineNumber: 114}, this)
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 112}, this)
                    , _jsxDEV('h2', { className: "mt-2 text-xl sm:text-2xl font-semibold text-balance"    , children: 
                      g.pillar
                    }, void 0, false, {fileName: _jsxFileName, lineNumber: 118}, this)
                    , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground max-w-3xl"   , children: 
                      meta.note
                    }, void 0, false, {fileName: _jsxFileName, lineNumber: 121}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 111}, this)

                  , _jsxDEV(Badge, { className: "w-fit bg-white/6 border border-white/10 text-foreground"    , children: "Deliverables"

                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 126}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 110}, this)

                , _jsxDEV('div', { className: "mt-6 grid gap-4 lg:grid-cols-2"   , children: 
                  g.items.map((s) => (
                    _jsxDEV(Card, { className: "rounded-2xl border border-white/10 bg-white/3 p-6"    , children: [
                      _jsxDEV('div', { className: "flex items-start justify-between gap-3"   , children: [
                        _jsxDEV('div', { className: "text-lg font-semibold" , children: 
                          _jsxDEV(Link, { href: `/services/${s.id}`, className: "hover:text-primary transition-colors" , children: 
                            s.title
                          }, void 0, false, {fileName: _jsxFileName, lineNumber: 136}, this)
                        }, void 0, false, {fileName: _jsxFileName, lineNumber: 135}, this)
                        , _jsxDEV('span', { className: "text-[11px] rounded-full bg-white/6 border border-white/10 px-2 py-1 text-muted-foreground"       , children: 
                          s.pillar
                        }, void 0, false, {fileName: _jsxFileName, lineNumber: 140}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 134}, this)
                      , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: s.summary}, void 0, false, {fileName: _jsxFileName, lineNumber: 144}, this)
                      , _jsxDEV('div', { className: "mt-3", children: 
                        _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
                          _jsxDEV(Link, { href: `/services/${s.id}`, children: ["View details "
                              , _jsxDEV(ArrowRight, { className: "ml-2 h-4 w-4"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 148}, this )
                          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 147}, this)
                        }, void 0, false, {fileName: _jsxFileName, lineNumber: 146}, this)
                      }, void 0, false, {fileName: _jsxFileName, lineNumber: 145}, this)

                      , _jsxDEV('ul', { className: "mt-4 grid gap-2 text-sm text-muted-foreground"    , children: 
                        s.bullets.map((b) => (
                          _jsxDEV('li', { className: "flex gap-2" , children: [
                            _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-primary"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 156}, this )
                            , _jsxDEV('span', { children: b}, void 0, false, {fileName: _jsxFileName, lineNumber: 157}, this)
                          ]}, b, true, {fileName: _jsxFileName, lineNumber: 155}, this)
                        ))
                      }, void 0, false, {fileName: _jsxFileName, lineNumber: 153}, this)
                    ]}, s.id, true, {fileName: _jsxFileName, lineNumber: 133}, this)
                  ))
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 131}, this)
              ]}, g.pillar, true, {fileName: _jsxFileName, lineNumber: 109}, this)
            );
          })
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 103}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 102}, this)

      /* AI Visibility Audit */
      , _jsxDEV('section', { className: "mt-12", children: 
        _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-7"   , children: [
          _jsxDEV('div', { className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"     , children: [
            _jsxDEV('div', { className: "min-w-0", children: [
              _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
                _jsxDEV(Search, { className: "h-5 w-5 text-primary"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 176}, this )
                , _jsxDEV('div', { className: "text-xs tracking-widest uppercase text-muted-foreground"   , children: "LLM answers" }, void 0, false, {fileName: _jsxFileName, lineNumber: 177}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 175}, this)
              , _jsxDEV('h2', { className: "mt-2 text-2xl sm:text-3xl font-semibold text-balance"    , children: "AI Visibility Audit"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 179}, this)
              , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground max-w-3xl"   , children: "A structured audit to help your brand outrank competitors in AI assistants by strengthening entity clarity, page semantics, and “answer-worthiness”—so models select your brand more often."


              }, void 0, false, {fileName: _jsxFileName, lineNumber: 180}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 174}, this)
            , _jsxDEV(Badge, { className: "w-fit bg-accent/20 text-accent border border-accent/40"    , children: "Audit outputs" }, void 0, false, {fileName: _jsxFileName, lineNumber: 185}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 173}, this)

          , _jsxDEV('div', { className: "mt-6 grid gap-4 lg:grid-cols-3"   , children: 
            [{
              t: "Competitive answer map",
              d: "We identify the queries where competitors get cited in LLM answers (and why), then map gaps you can own.",
            },
            {
              t: "Entity + narrative clarity",
              d: "We tune your positioning, entity signals, and internal linking so assistants understand who you are, who you serve, and what you do.",
            },
            {
              t: "AEO + page upgrades",
              d: "We rewrite priority pages for direct answers (FAQs, comparisons, definitions), improve structure, and add proof signals that models trust.",
            }].map((x) => (
              _jsxDEV(Card, { className: "rounded-2xl border border-white/10 bg-white/3 p-6"    , children: [
                _jsxDEV('div', { className: "text-lg font-semibold" , children: x.t}, void 0, false, {fileName: _jsxFileName, lineNumber: 202}, this)
                , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: x.d}, void 0, false, {fileName: _jsxFileName, lineNumber: 203}, this)
              ]}, x.t, true, {fileName: _jsxFileName, lineNumber: 201}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 188}, this)

          , _jsxDEV('div', { className: "mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-start"    , children: [
            _jsxDEV(Card, { className: "rounded-2xl border border-white/10 bg-white/3 p-6"    , children: [
              _jsxDEV('div', { className: "text-sm font-medium" , children: "What you get"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 210}, this)
              , _jsxDEV('ul', { className: "mt-3 grid gap-2 text-sm text-muted-foreground"    , children: 
                [
                  "Query set + competitor benchmark (what the models say today)",
                  "Priority pages list + exact recommendations",
                  "LLM-ready content briefs (FAQs, comparisons, definitions)",
                  "Measurement plan: rankings, citations/mentions, and conversion signals",
                ].map((b) => (
                  _jsxDEV('li', { className: "flex gap-2" , children: [
                    _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-primary"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 219}, this )
                    , _jsxDEV('span', { children: b}, void 0, false, {fileName: _jsxFileName, lineNumber: 220}, this)
                  ]}, b, true, {fileName: _jsxFileName, lineNumber: 218}, this)
                ))
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 211}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 209}, this)

            , _jsxDEV(Card, { className: "rounded-2xl border border-white/10 bg-white/3 p-6"    , children: [
              _jsxDEV('div', { className: "text-sm font-medium" , children: "How you outrank"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 227}, this)
              , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: "LLMs reward clarity \u0000+ evidence \u0000+ coverage. We make your pages easier to cite than competitors: cleaner structure, stronger entity signals, and direct answers tied to proof."


              }, void 0, false, {fileName: _jsxFileName, lineNumber: 228}, this)
              , _jsxDEV('div', { className: "mt-4", children: 
                _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
                  _jsxDEV(Link, { href: "/ai-visibility-audit", children: "View audit details"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 234}, this)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 233}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 232}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 226}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 208}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 172}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 171}, this)

      /* How it works */
      , _jsxDEV('section', { className: "mt-12", children: [
        _jsxDEV('div', { className: "flex items-end justify-between gap-6"   , children: 
          _jsxDEV('div', { children: [
            _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold"  , children: "How we ship"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 246}, this)
            , _jsxDEV('p', { className: "mt-2 text-muted-foreground max-w-2xl"  , children: "Elite outcomes come from tight loops. We work in sprints with visible progress and a clean handover."

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 247}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 245}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 244}, this)

        , _jsxDEV('div', { className: "mt-6 grid gap-4 lg:grid-cols-3"   , children: 
          [{
            t: "Audit + scope",
            d: "We map your current narrative, presence, and demand channels. Then we propose a sprint plan with deliverables.",
            i: Radar,
          },
          {
            t: "Sprints",
            d: "Each sprint has fixed outputs, weekly check-ins, and clear approvals. You see progress constantly—no black boxes.",
            i: CalendarCheck,
          },
          {
            t: "Handover + governance",
            d: "Templates, documentation, and AI workflow guardrails so the system stays consistent as you scale.",
            i: Layers,
          }].map((x) => (
            _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-6"   , children: [
              _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
                _jsxDEV(x.i, { className: "h-5 w-5 text-accent"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 271}, this )
                , _jsxDEV('div', { className: "text-lg font-semibold" , children: x.t}, void 0, false, {fileName: _jsxFileName, lineNumber: 272}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 270}, this)
              , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: x.d}, void 0, false, {fileName: _jsxFileName, lineNumber: 274}, this)
            ]}, x.t, true, {fileName: _jsxFileName, lineNumber: 269}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 253}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 243}, this)

      /* CTA */
      , _jsxDEV('section', { className: "mt-12 pb-6" , children: 
        _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-7"   , children: 
          _jsxDEV('div', { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"     , children: [
            _jsxDEV('div', { children: [
              _jsxDEV('div', { className: "text-lg font-semibold" , children: "Recommended starting point"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 285}, this)
              , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground max-w-2xl"   , children: "Book a discovery call. We’ll audit your brand and presence, then propose the fastest DFY path to Brand → Build → Demand."

              }, void 0, false, {fileName: _jsxFileName, lineNumber: 286}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 284}, this)
            , _jsxDEV(Button, { asChild: true, size: "lg", className: "shadow-[0_0_40px_oklch(0.73_0.16_190/0.25)]", children: 
              _jsxDEV(Link, { href: "/contact", children: ["Book a call "
                   , _jsxDEV(ArrowRight, { className: "ml-2 h-4 w-4"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 292}, this )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 291}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 290}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 283}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 282}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 281}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 84}, this)
  );
}
