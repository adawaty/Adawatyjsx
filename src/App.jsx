const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Cairo Circuit Futurism — App routing (updated IA)
*/

import { Toaster } from "@/components/ui/sonner";
import ScrollToTop from "@/components/ScrollToTop";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { I18nProvider } from "@/contexts/I18nContext";

import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import AiVisibilityAudit from "@/pages/AiVisibilityAudit";
import Industries from "@/pages/Industries";
import IndustryDetail from "@/pages/IndustryDetail";
import PricingCalculator from "@/pages/PricingCalculator";
import BioPage from "@/pages/BioPage";
import Solutions from "@/pages/Solutions";
import SolutionDetail from "@/pages/SolutionDetail";
import For from "@/pages/For";
import PersonaDetail from "@/pages/PersonaDetail";
import Work from "@/pages/Work";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function AppRouter() {
  return (
    _jsxDEV(Router, { children: 
      _jsxDEV(Switch, { children: [
        _jsxDEV(Route, { path: "/", component: Home,}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this )
        /* AnyGen preview sometimes opens dist/index.html directly */
        , _jsxDEV(Route, { path: "/index.html", component: Home,}, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this )
        , _jsxDEV(Route, { path: "/dist/index.html", component: Home,}, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this )
        , _jsxDEV(Route, { path: "/services", component: Services,}, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this )
        , _jsxDEV(Route, { path: "/solutions", component: Solutions,}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this )
        , _jsxDEV(Route, { path: "/solutions/:slug", children: (params) => _jsxDEV(SolutionDetail, { slug: params.slug,}, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this)
        , _jsxDEV(Route, { path: "/for", component: For,}, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this )
        , _jsxDEV(Route, { path: "/for/:slug", children: (params) => _jsxDEV(PersonaDetail, { slug: params.slug,}, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this)
        , _jsxDEV(Route, { path: "/industries", component: Industries,}, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this )
        , _jsxDEV(Route, { path: "/industries/:id", children: (params) => _jsxDEV(IndustryDetail, { id: params.id,}, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this)
        , _jsxDEV(Route, { path: "/services/:id", children: (params) => _jsxDEV(ServiceDetail, { id: params.id,}, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this)
        , _jsxDEV(Route, { path: "/ai-visibility-audit", component: AiVisibilityAudit,}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this )
        , _jsxDEV(Route, { path: "/pricing-calculator", component: PricingCalculator,}, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this )
        , _jsxDEV(Route, { path: "/bio", component: BioPage,}, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this )
        , _jsxDEV(Route, { path: "/work", component: Work,}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this )
        , _jsxDEV(Route, { path: "/work/:slug", children: (params) => _jsxDEV(CaseStudyDetail, { slug: params.slug,}, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this)
        , _jsxDEV(Route, { path: "/about", component: About,}, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this )
        , _jsxDEV(Route, { path: "/contact", component: Contact,}, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this )
        , _jsxDEV(Route, { component: NotFound,}, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 34}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this)
  );
}

export default function App() {
  return (
    _jsxDEV(ErrorBoundary, { children: 
      _jsxDEV(ThemeProvider, { defaultTheme: "dark", children: 
        _jsxDEV(I18nProvider, { children: 
          _jsxDEV(TooltipProvider, { children: [
            _jsxDEV(Toaster, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this )
            , _jsxDEV(ScrollToTop, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 67}, this )
            , _jsxDEV(AppRouter, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 68}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 65}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)
  );
}
