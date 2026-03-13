const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime"; function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }/*
Language switcher — minimal, premium, accessible
*/

import { useI18n, } from "@/contexts/I18nContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const options = [
  { lang: "en", label: "English", native: "English" },
  { lang: "ar-EG", label: "Egyptian Arabic", native: "العربية (مصر)" },
  { lang: "ja", label: "Japanese", native: "日本語" },
  { lang: "es", label: "Spanish", native: "Español" },
  { lang: "it", label: "Italian", native: "Italiano" },
  { lang: "fr", label: "French", native: "Français" },
  { lang: "de", label: "German", native: "Deutsch" },
];

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();
  const current = options.find((o) => o.lang === lang);

  return (
    _jsxDEV(DropdownMenu, { children: [
      _jsxDEV(DropdownMenuTrigger, { asChild: true, children: 
        _jsxDEV(Button, {
          variant: "secondary",
          size: "sm",
          className: "bg-white/6 hover:bg-white/10" ,
          'aria-label': t("lang.label"),
 children: 
          _nullishCoalesce(_optionalChain([current, 'optionalAccess', _ => _.native]), () => ( "EN"))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 31}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this)
      , _jsxDEV(DropdownMenuContent, { align: "end", className: "w-44", children: 
        options.map((o) => (
          _jsxDEV(DropdownMenuItem, { onClick: () => setLang(o.lang), children: [
            _jsxDEV('span', { className: "flex-1", children: o.native}, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this)
            , _jsxDEV('span', { className: "text-xs text-muted-foreground" , children: o.label}, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this)
          ]}, o.lang, true, {fileName: _jsxFileName, lineNumber: 42}, this)
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 29}, this)
  );
}
