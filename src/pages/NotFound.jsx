const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Cairo Circuit Futurism — NotFound (updated)
*/

import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    _jsxDEV(SiteLayout, { title: "Page not found"  , subtitle: "The page you requested does not exist."      , children: [
      _jsxDEV(SeoHead, { title: `404 | ${site.name}`, description: "Page not found."  , path: "/404", noindex: true,}, void 0, false, {fileName: _jsxFileName, lineNumber: 14}, this )
      , _jsxDEV('div', { className: "pt-10 flex flex-wrap gap-2"   , children: [
        _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
          _jsxDEV(Link, { href: "/", children: "Back to home"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 17}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 16}, this)
        , _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
          _jsxDEV(Link, { href: "/work", children: "View work" }, void 0, false, {fileName: _jsxFileName, lineNumber: 20}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 19}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 15}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 13}, this)
  );
}
