const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Cairo Circuit Futurism — Layout shell
*/

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTopButton from "@/components/BackToTopButton";

export default function SiteLayout({
  children,
  title,
  subtitle,
}



) {
  return (
    _jsxDEV('div', { className: "min-h-screen bg-background text-foreground"  , children: [
      _jsxDEV('a', {
        href: "#main",
        className: "sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-background focus:px-3 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-primary"            ,
 children: "Skip to content"

      }, void 0, false, {fileName: _jsxFileName, lineNumber: 20}, this)
      , _jsxDEV('div', { className: "pointer-events-none fixed inset-0 -z-10 bg-grid opacity-60"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this )
      , _jsxDEV('div', { className: "pointer-events-none fixed inset-0 -z-10 bg-radial-glow"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 27}, this )

      , _jsxDEV(SiteHeader, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this )

      , (title || subtitle) && (
        _jsxDEV('div', { className: "mx-auto max-w-6xl px-4 sm:px-6 pt-12"    , children: [
          _jsxDEV('h1', { className: "text-3xl sm:text-5xl font-semibold leading-tight"   , children: title}, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this)
          , subtitle ? _jsxDEV('p', { className: "mt-3 max-w-2xl text-muted-foreground"  , children: subtitle}, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this) : null
          , _jsxDEV('div', { className: "mt-8 circuit-divider" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 32}, this)
      )

      , _jsxDEV('main', { id: "main", className: "mx-auto max-w-6xl px-4 sm:px-6"   , children: children}, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this)
      , _jsxDEV(BackToTopButton, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this )
      , _jsxDEV(SiteFooter, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this )
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 19}, this)
  );
}
