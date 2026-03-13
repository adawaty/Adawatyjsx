const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Success stories teaser section (home)
*/

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useI18n } from "@/contexts/I18nContext";

export default function SuccessStoriesTeaser() {
  const { t } = useI18n();
  return (
    _jsxDEV('section', { className: "mt-16 section-wash-2 rounded-3xl border border-white/10 p-4 sm:p-8"      , children: [
      _jsxDEV('div', { className: "flex items-end justify-between gap-6"   , children: [
        _jsxDEV('div', { children: [
          _jsxDEV('h2', { className: "text-2xl sm:text-3xl font-semibold"  , children: t("home.successTeaser.title")}, void 0, false, {fileName: _jsxFileName, lineNumber: 16}, this)
          , _jsxDEV('p', { className: "mt-2 text-muted-foreground max-w-2xl"  , children: 
            t("home.successTeaser.subtitle")
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 17}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 15}, this)
        , _jsxDEV(Button, { asChild: true, variant: "secondary", className: "hidden sm:inline-flex bg-white/6 hover:bg-white/10"   , children: 
          _jsxDEV(Link, { href: "/for", children: t("home.successTeaser.cta")}, void 0, false, {fileName: _jsxFileName, lineNumber: 22}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 21}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 14}, this)

      , _jsxDEV('div', { className: "mt-6 grid gap-4 md:grid-cols-3"   , children: 
        [
          {
            t: "Lawyers",
            d: "Consultations up. Wrong-case leads down. Faster response.",
            href: "/for/lawyers",
          },
          {
            t: "Doctors / Clinics",
            d: "Bookings up. No-shows down. Patient questions reduced.",
            href: "/for/doctors",
          },
          {
            t: "Business owners",
            d: "Less manual handoff. Faster reporting. Workflow adoption.",
            href: "/for/business-owners",
          },
        ].map((x) => (
          _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-6"   , children: [
            _jsxDEV('div', { className: "text-lg font-semibold" , children: 
              _jsxDEV(Link, { href: x.href, className: "hover:text-primary transition-colors" , children: 
                x.t
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this)
            , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: x.d}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this)
            , _jsxDEV('div', { className: "mt-5", children: 
              _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
                _jsxDEV(Link, { href: x.href, children: t("home.successTeaser.view")}, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this)
          ]}, x.t, true, {fileName: _jsxFileName, lineNumber: 44}, this)
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 13}, this)
  );
}
