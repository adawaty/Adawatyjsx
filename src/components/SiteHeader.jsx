const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Cairo Circuit Futurism — SiteHeader (updated nav)
*/

import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu, Sparkles } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/contexts/I18nContext";
import { useMemo, useState } from "react";

const nav = [
  { href: "/services", key: "nav.services" },
  { href: "/solutions", key: "nav.solutions" },
  { href: "/for", key: "nav.for" },
  { href: "/industries", key: "nav.industries" },
  { href: "/work", key: "nav.work" },
  { href: "/about", key: "nav.studio" },
] ;

export default function SiteHeader() {
  const [location] = useLocation();
  const { t, dir } = useI18n();
  const brandName = dir === "rtl" ? "أدواتي" : "Adawaty";
  const [open, setOpen] = useState(false);

  const active = useMemo(() => location, [location]);

  return (
    _jsxDEV('header', { className: "sticky top-0 z-50 w-full"   , children: [
      /* Meteory-inspired utility bar (fast trust + contact) */
      _jsxDEV('div', { className: "hidden sm:block border-b border-white/10 bg-background/60 backdrop-blur"     , children: 
        _jsxDEV('div', { className: "mx-auto max-w-6xl px-4 sm:px-6"   , children: 
          _jsxDEV('div', { className: "flex h-10 items-center justify-between text-xs text-muted-foreground"     , children: [
            _jsxDEV('div', { className: "flex items-center gap-3"  , children: [
              _jsxDEV('span', { className: "inline-flex items-center gap-1 rounded-full bg-white/6 border border-white/10 px-2 py-1"        , children: [
                _jsxDEV(Sparkles, { className: "h-3.5 w-3.5 text-accent"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this ), " ISO-ready delivery"
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 37}, this)
              , _jsxDEV('a', { className: "premium-focus hover:text-foreground" , href: "mailto:alazzeh.ml@gmail.com", children: "alazzeh.ml@gmail.com"}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this)
              , _jsxDEV('span', { className: "opacity-50", children: "•"}, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this)
              , _jsxDEV('a', { className: "premium-focus hover:text-foreground" , href: "tel:+201000000000", children: "+20 100 000 0000"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 36}, this)
            , _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
              _jsxDEV(LanguageSwitcher, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this )
              , _jsxDEV(Link, { className: "premium-focus hover:text-foreground" , href: "/ai-visibility-audit", children: t("nav.aiAudit")}, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this)
              , _jsxDEV('span', { className: "opacity-50", children: "•"}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)
              , _jsxDEV(Link, { className: "premium-focus hover:text-foreground" , href: "/pricing-calculator", children: t("nav.pricingCalc")}, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this)
              , _jsxDEV('span', { className: "opacity-50", children: "•"}, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this)
              , _jsxDEV(Link, { className: "premium-focus hover:text-foreground" , href: "/contact", children: t("cta.requestScope")}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 44}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 35}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this)
      , _jsxDEV('div', { className: "glass bg-background/60" , children: 
        _jsxDEV('div', { className: "mx-auto max-w-6xl px-4 sm:px-6"   , children: [
          _jsxDEV('div', { className: "flex h-16 items-center justify-between overflow-x-hidden"    , children: [
            _jsxDEV(Link, { href: "/", className: "group flex items-center gap-2 min-w-0"    , children: [
              _jsxDEV('div', { className: "h-9 w-9 rounded-xl bg-primary/20 ring-1 ring-primary/40 grid place-items-center"       , children: 
                _jsxDEV('div', { className: "h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_22px_oklch(0.73_0.16_190/0.55)]"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 60}, this )
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this)
              , _jsxDEV('div', { className: "leading-tight min-w-0" , children: [
                _jsxDEV('div', { className: "font-semibold tracking-tight truncate max-w-[36vw] sm:max-w-none"    , children: brandName}, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)
                , _jsxDEV('div', { className: "text-xs text-muted-foreground -mt-0.5"  , children: 
                  dir === "rtl" ? "براند ← بناء ← طلب" : "Brand → Build → Demand"
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 62}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 58}, this)

            , _jsxDEV('nav', { className: "hidden md:flex items-center gap-1"   , children: 
              nav.map((item) => (
                _jsxDEV(Link, {

                  href: item.href,
                  className: cn(
                    "px-3 py-2 text-sm rounded-lg transition-colors",
                    "hover:bg-white/5 hover:text-foreground",
                    active === item.href ? "bg-white/6 text-foreground" : "text-muted-foreground"
                  ),
 children: 
                  t(item.key)
                }, item.href, false, {fileName: _jsxFileName, lineNumber: 72}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 70}, this)

            , _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
              _jsxDEV(Button, { asChild: true, variant: "secondary", className: "hidden sm:inline-flex bg-white/6 hover:bg-white/10"   , children: 
                _jsxDEV(Link, { href: "/pricing-calculator", children: t("nav.pricing")}, void 0, false, {fileName: _jsxFileName, lineNumber: 88}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 87}, this)

              , _jsxDEV(Button, { asChild: true, className: "hidden sm:inline-flex" , children: 
                _jsxDEV(Link, { href: "/contact", children: [
                  t("cta.book"), " " , _jsxDEV(ArrowRight, { className: "ml-2 h-4 w-4"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 93}, this )
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 92}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this)

              , _jsxDEV('div', { className: "sm:hidden", children: 
                _jsxDEV(LanguageSwitcher, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 98}, this )
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 97}, this)

              , _jsxDEV(Button, {
                variant: "ghost",
                size: "icon",
                className: "md:hidden",
                onClick: () => setOpen((v) => !v),
                'aria-label': "Toggle menu" ,
 children: 
                _jsxDEV(Menu, { className: "h-5 w-5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 108}, this )
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 101}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 86}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 57}, this)

          , open ? (
            _jsxDEV('div', { className: "md:hidden pb-4" , children: [
              _jsxDEV('div', { className: "circuit-divider mb-3" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 115}, this )
              , _jsxDEV('div', { className: "flex flex-col gap-2"  , children: [
                _jsxDEV('div', { className: "flex flex-wrap gap-2 px-3"   , children: [
                  _jsxDEV(Link, { className: "text-xs text-muted-foreground hover:text-foreground"  , href: "/ai-visibility-audit", onClick: () => setOpen(false), children: 
                    t("nav.aiAudit")
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 118}, this)
                  , _jsxDEV('span', { className: "text-xs text-muted-foreground/50" , children: "•"}, void 0, false, {fileName: _jsxFileName, lineNumber: 121}, this)
                  , _jsxDEV(Link, { className: "text-xs text-muted-foreground hover:text-foreground"  , href: "/pricing-calculator", onClick: () => setOpen(false), children: 
                    t("nav.pricing")
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 122}, this)
                  , _jsxDEV('span', { className: "text-xs text-muted-foreground/50" , children: "•"}, void 0, false, {fileName: _jsxFileName, lineNumber: 125}, this)
                  , _jsxDEV(Link, { className: "text-xs text-muted-foreground hover:text-foreground"  , href: "/contact", onClick: () => setOpen(false), children: 
                    t("cta.requestScope")
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 126}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 117}, this)
                , _jsxDEV('div', { className: "circuit-divider",}, void 0, false, {fileName: _jsxFileName, lineNumber: 130}, this )

                , _jsxDEV('div', { className: "flex flex-col gap-1"  , children: [
                  nav.map((item) => (
                    _jsxDEV(Link, {

                      href: item.href,
                      className: cn(
                        "px-3 py-2 rounded-lg text-sm",
                        active === item.href ? "bg-white/6" : "hover:bg-white/5",
                        "text-foreground"
                      ),
                      onClick: () => setOpen(false),
 children: 
                      t(item.key)
                    }, item.href, false, {fileName: _jsxFileName, lineNumber: 134}, this)
                  ))
                  , _jsxDEV(Button, { asChild: true, className: "mt-2", children: 
                    _jsxDEV(Link, { href: "/contact", onClick: () => setOpen(false), children: [
                      t("cta.book"), " " , _jsxDEV(ArrowRight, { className: "ml-2 h-4 w-4"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 149}, this )
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 148}, this)
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 147}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 132}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 116}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 114}, this)
          ) : null
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 56}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 31}, this)
  );
}
