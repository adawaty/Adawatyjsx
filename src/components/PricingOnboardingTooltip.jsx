const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Pricing calculator onboarding tooltip (runs once)
*/

import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const STORAGE_KEY = "adawaty_pricing_onboarding_v1";

export default function PricingOnboardingTooltip() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (seen) return;
    const t = window.setTimeout(() => setOpen(true), 700);
    return () => window.clearTimeout(t);
  }, []);

  return (
    _jsxDEV(Tooltip, { open: open, onOpenChange: setOpen, children: [
      _jsxDEV(TooltipTrigger, { asChild: true, children: 
        _jsxDEV(Button, {
          type: "button",
          variant: "ghost",
          size: "icon",
          className: "h-9 w-9 rounded-full"  ,
          'aria-label': "How pricing works"  ,
 children: 
          _jsxDEV(HelpCircle, { className: "h-5 w-5" , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 24}, this)
      , _jsxDEV(TooltipContent, { side: "bottom", align: "end", className: "max-w-sm", children: 
        _jsxDEV('div', { className: "grid gap-2" , children: [
          _jsxDEV('div', { className: "font-semibold", children: "How to use this calculator"    }, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)
          , _jsxDEV('div', { className: "text-sm text-muted-foreground" , children: ["1) Choose "
              , _jsxDEV('strong', { children: "Web presence" }, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this), " for a website/bio + hosting."
            , _jsxDEV('br', {}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this ), "2) Choose "
              , _jsxDEV('strong', { children: "Systems"}, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this), " for internal tools, LMS, video, or anything custom."
            , _jsxDEV('br', {}, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this ), "3) Use "
              , _jsxDEV('strong', { children: "Export"}, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this), " to generate a serial so we can review your exact selection."
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 38}, this)
          , _jsxDEV('div', { className: "pt-1", children: 
            _jsxDEV(Button, {
              size: "sm",
              onClick: () => {
                localStorage.setItem(STORAGE_KEY, "1");
                setOpen(false);
              },
 children: "Got it"

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 36}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 23}, this)
  );
}
