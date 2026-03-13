const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime"; function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }/*
Cairo Circuit Futurism — Pricing Calculator (Outcome-first)
- Categorized: Website, Personal Bio, Hosting
- Shows One-time + Monthly totals
- Includes guided path for Internal tools / LMS / Video / Custom solutions

Pricing notes:
- Hosting is positioned as a managed reliability layer (starting $19/mo → $49/mo depending on project).
- Numbers are *starting points*; final scope is confirmed after intake.
*/

import { useMemo, useState } from "react";
import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { site } from "@/lib/content";
import { toast } from "sonner";
import PricingOnboardingTooltip from "@/components/PricingOnboardingTooltip";

import { useI18n } from "@/contexts/I18nContext";
import {
  ArrowRight,
  Calculator,
  Info,
  Laptop,
  Link2,
  Server,
  Settings,
  Video,
  GraduationCap,
  Copy,
  FileDown,
  ExternalLink,
} from "lucide-react";



const usdToEgp = 50; // display-only approximation

function money(amountUsd, currency) {
  const value = currency === "USD" ? amountUsd : amountUsd * usdToEgp;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}





const hostingTiers


 = {
  starter: {
    labelKey: "pricing.hostingTier.starter",
    usdPerMonth: 19,
    noteKey: "pricing.hostingTier.starter.note",
  },
  standard: {
    labelKey: "pricing.hostingTier.standard",
    usdPerMonth: 29,
    noteKey: "pricing.hostingTier.standard.note",
  },
  pro: {
    labelKey: "pricing.hostingTier.pro",
    usdPerMonth: 39,
    noteKey: "pricing.hostingTier.pro.note",
  },
  business: {
    labelKey: "pricing.hostingTier.business",
    usdPerMonth: 49,
    noteKey: "pricing.hostingTier.business.note",
  },
};

const websiteBase


 = {
  "one-page": {
    labelKey: "pricing.websiteType.onePage",
    usdOneTime: 750,
    noteKey: "pricing.websiteType.onePage.note",
  },
  "multi-page": {
    labelKey: "pricing.websiteType.multiPage",
    usdOneTime: 1800,
    noteKey: "pricing.websiteType.multiPage.note",
  },
  ecommerce: {
    labelKey: "pricing.websiteType.ecommerce",
    usdOneTime: 2800,
    noteKey: "pricing.websiteType.ecommerce.note",
  },
};



const bioBase = {
  classic: {
    labelKey: "pricing.bioType.classic",
    usdOneTime: 299,
    noteKey: "pricing.bioType.classic.note",
  },
  pro: {
    labelKey: "pricing.bioType.pro",
    usdOneTime: 499,
    noteKey: "pricing.bioType.pro.note",
  },
};

const addOns


 = {
  copy: {
    labelKey: "pricing.addOn.copy",
    usdOneTime: 250,
    noteKey: "pricing.addOn.copy.note",
  },
  booking: {
    labelKey: "pricing.addOn.booking",
    usdOneTime: 150,
    noteKey: "pricing.addOn.booking.note",
  },
  seo: {
    labelKey: "pricing.addOn.seo",
    usdOneTime: 350,
    noteKey: "pricing.addOn.seo.note",
  },
  branding5: {
    labelKey: "pricing.addOn.branding5",
    usdOneTime: 600,
    noteKey: "pricing.addOn.branding5.note",
  },
  dfirst: {
    labelKey: "pricing.addOn.dfirst",
    usdPerMonth: 299,
    noteKey: "pricing.addOn.dfirst.note",
  },
  analytics: {
    labelKey: "pricing.addOn.analytics",
    usdOneTime: 200,
    noteKey: "pricing.addOn.analytics.note",
  },
  care: {
    labelKey: "pricing.addOn.care",
    usdPerMonth: 49,
    noteKey: "pricing.addOn.care.note",
  },
};



const customNeedCopy


 = {
  "internal-tool": {
    labelKey: "pricing.customNeed.internalTool",
    icon: _jsxDEV(Settings, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 179}, this ),
    estimateKey: "pricing.customNeed.internalTool.estimate",
    noteKey: "pricing.customNeed.internalTool.note",
  },
  lms: {
    labelKey: "pricing.customNeed.lms",
    icon: _jsxDEV(GraduationCap, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 185}, this ),
    estimateKey: "pricing.customNeed.lms.estimate",
    noteKey: "pricing.customNeed.lms.note",
  },
  video: {
    labelKey: "pricing.customNeed.video",
    icon: _jsxDEV(Video, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 191}, this ),
    estimateKey: "pricing.customNeed.video.estimate",
    noteKey: "pricing.customNeed.video.note",
  },
  custom: {
    labelKey: "pricing.customNeed.custom",
    icon: _jsxDEV(Laptop, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 197}, this ),
    estimateKey: "pricing.customNeed.custom.estimate",
    noteKey: "pricing.customNeed.custom.note",
  },
};

export default function PricingCalculator() {
  const [currency, setCurrency] = useState("USD");
  const { lang, t } = useI18n();

  // Web presence
  const [websiteType, setWebsiteType] = useState("multi-page");
  const [bioType, setBioType] = useState("classic");
  const [hostingTier, setHostingTier] = useState("pro");

  const [includeWebsite, setIncludeWebsite] = useState(true);
  const [includeBio, setIncludeBio] = useState(false);

  const [selectedAddons, setSelectedAddons] = useState({
    copy: true,
    booking: true,
    seo: true,
    analytics: true,
    branding5: false,
    dfirst: false,
    care: false,
  });

  // Custom request wizard
  const [customNeed, setCustomNeed] = useState("internal-tool");
  const [customBudget, setCustomBudget] = useState("");
  const [customTimeline, setCustomTimeline] = useState("");
  const [customNotes, setCustomNotes] = useState("");

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [lastSerial, setLastSerial] = useState(null);
  const [exporting, setExporting] = useState(false);

  const bioPreviewUrl = useMemo(() => {
    const params = new URLSearchParams();
    params.set("name", (contactName || "Your Name").trim());
    params.set("headline", includeBio ? (bioType === "pro" ? "Premium bio hub" : "Bio page") : "Bio page");
    if (contactPhone.trim()) params.set("phone", contactPhone.trim());
    if (contactEmail.trim()) params.set("email", contactEmail.trim());
    params.set("city", "Cairo");
    params.set("cta", "Request scope");
    params.set("href", "/contact");
    return `/bio?${params.toString()}`;
  }, [contactName, contactPhone, contactEmail, includeBio, bioType]);

  function buildQuoteText(serial) {
    const addons = Object.entries(selectedAddons)
      .filter(([, v]) => v)
      .map(([k]) => k);

    const lines = [
      `Adawaty — Quote${serial ? ` (${serial})` : ""}`,
      `Date: ${new Date().toLocaleString()}`,
      "",
      `Name: ${contactName.trim() || "—"}`,
      `Email: ${contactEmail.trim() || "—"}`,
      `Phone: ${contactPhone.trim() || "—"}`,
      "",
      `Website: ${includeWebsite ? websiteType : "No"}`,
      `Bio page: ${includeBio ? bioType : "No"}`,
      `Hosting: ${hostingTier} (${money(hostingTiers[hostingTier].usdPerMonth, currency)}/mo)`,
      `Add-ons: ${addons.length ? addons.join(", ") : "None"}`,
      "",
      `One-time total: ${money(totals.oneTime, currency)}`,
      `Monthly total: ${money(totals.monthly, currency)}/mo`,
      "",
      includeBio ? `Bio page preview: ${window.location.origin}${bioPreviewUrl}` : "",
    ].filter(Boolean);

    return lines.join("\n");
  }

  function openQuotePdf(serial) {
    const addons = Object.entries(selectedAddons)
      .filter(([, v]) => v)
      .map(([k]) => k);

    const safe = (s) => (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Adawaty Quote${serial ? " — " + safe(serial) : ""}</title>
  <style>
    @page { size: A4; margin: 18mm; }
    * { box-sizing: border-box; }
    body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; color: #0b1220; }
    .top { display:flex; align-items:flex-start; justify-content:space-between; gap:16px; }
    .brand { font-weight: 800; font-size: 20px; letter-spacing: -0.02em; }
    .tag { color:#0a7a87; font-weight: 700; }
    .pill { display:inline-block; padding:6px 10px; border:1px solid #d7e2ea; border-radius:999px; font-size: 12px; }
    h1 { font-size: 28px; margin: 14px 0 8px; }
    .muted { color:#506171; }
    .grid { display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-top:14px; }
    .card { border:1px solid #d7e2ea; border-radius:14px; padding:12px 14px; }
    .card h3 { margin:0 0 6px; font-size: 13px; letter-spacing:0.02em; text-transform: uppercase; color:#213041; }
    .row { display:flex; justify-content:space-between; gap:12px; padding:8px 0; border-bottom:1px dashed #d7e2ea; }
    .row:last-child { border-bottom:0; }
    .k { color:#213041; }
    .v { font-weight:700; }
    .total { font-size: 18px; }
    .foot { margin-top: 14px; font-size: 12px; color:#506171; }
    a { color:#0a7a87; text-decoration: none; }
    .break { height: 10px; }
  </style>
</head>
<body>
  <div class="top">
    <div>
      <div class="brand">Adawaty</div>
      <div class="tag">Brand → Build → Demand</div>
      <div class="break"></div>
      <span class="pill">Estimate • Not a final contract</span>
      ${serial ? `<span class="pill" style="margin-left:8px;">Serial: ${safe(serial)}</span>` : ""}
    </div>
    <div class="muted" style="text-align:right; font-size:12px;">
      <div>${safe(new Date().toLocaleString())}</div>
      <div>alazzeh.ml@gmail.com</div>
    </div>
  </div>

  <h1>Pricing estimate</h1>
  <div class="muted">Built from your selections. We’ll confirm scope in a quick intake call.</div>

  <div class="grid">
    <div class="card">
      <h3>Contact</h3>
      <div class="row"><div class="k">Name</div><div class="v">${safe(contactName.trim() || "—")}</div></div>
      <div class="row"><div class="k">Email</div><div class="v">${safe(contactEmail.trim() || "—")}</div></div>
      <div class="row"><div class="k">Phone</div><div class="v">${safe(contactPhone.trim() || "—")}</div></div>
    </div>
    <div class="card">
      <h3>Scope</h3>
      <div class="row"><div class="k">Website</div><div class="v">${safe(includeWebsite ? websiteType : "No")}</div></div>
      <div class="row"><div class="k">Bio page</div><div class="v">${safe(includeBio ? bioType : "No")}</div></div>
      <div class="row"><div class="k">Hosting</div><div class="v">${safe(hostingTier)} (${safe(money(hostingTiers[hostingTier].usdPerMonth, currency))}/mo)</div></div>
      <div class="row"><div class="k">Add-ons</div><div class="v">${safe(addons.length ? addons.join(", ") : "None")}</div></div>
    </div>
  </div>

  <div class="grid" style="margin-top:12px;">
    <div class="card">
      <h3>One-time</h3>
      <div class="row"><div class="k">Build (website + bio)</div><div class="v">${safe(money(totals.website + totals.bio, currency))}</div></div>
      <div class="row"><div class="k">Add-ons</div><div class="v">${safe(money(totals.addOnOneTime, currency))}</div></div>
      <div class="row total"><div class="k">Total</div><div class="v">${safe(money(totals.oneTime, currency))}</div></div>
    </div>
    <div class="card">
      <h3>Monthly</h3>
      <div class="row"><div class="k">Hosting</div><div class="v">${safe(money(totals.hosting, currency))}/mo</div></div>
      <div class="row"><div class="k">Care / retainers</div><div class="v">${safe(money(totals.addOnMonthly, currency))}/mo</div></div>
      <div class="row total"><div class="k">Total</div><div class="v">${safe(money(totals.monthly, currency))}/mo</div></div>
    </div>
  </div>

  ${includeBio ? `
  <div class="foot">
    Bio page preview link: <a href="${safe(bioPreviewUrl)}">${safe(bioPreviewUrl)}</a>
  </div>
  ` : ""}

  <div class="foot">
    Notes: Pricing is a starting estimate. Final scope, timeline, and deliverables are confirmed after intake.
  </div>

  <script>
    window.onload = () => {
      setTimeout(() => window.print(), 250);
    };
  </script>
</body>
</html>`;

    const w = window.open("", "_blank");
    if (!w) throw new Error("Popup blocked. Please allow popups to export PDF.");
    w.document.open();
    w.document.write(html);
    w.document.close();
  }

  const totals = useMemo(() => {
    const website = includeWebsite ? websiteBase[websiteType].usdOneTime : 0;
    const bio = includeBio ? bioBase[bioType].usdOneTime : 0;
    const hosting = hostingTiers[hostingTier].usdPerMonth;

    const addOnOneTime = Object.entries(selectedAddons)
      .filter(([, v]) => v)
      .reduce((sum, [k]) => sum + (_nullishCoalesce(_optionalChain([addOns, 'access', _ => _[k], 'optionalAccess', _2 => _2.usdOneTime]), () => ( 0))), 0);

    const addOnMonthly = Object.entries(selectedAddons)
      .filter(([, v]) => v)
      .reduce((sum, [k]) => sum + (_nullishCoalesce(_optionalChain([addOns, 'access', _3 => _3[k], 'optionalAccess', _4 => _4.usdPerMonth]), () => ( 0))), 0);

    return {
      oneTime: website + bio + addOnOneTime,
      monthly: hosting + addOnMonthly,
      hosting,
      addOnOneTime,
      addOnMonthly,
      website,
      bio,
    };
  }, [includeWebsite, websiteType, includeBio, bioType, hostingTier, selectedAddons]);

  const title = `Pricing Calculator | ${site.name}`;
  const description =
    "Get a quick estimate for a website, personal bio page, and managed hosting — plus a guided path for internal tools, LMS, video, and custom builds.";


  return (
    _jsxDEV(SiteLayout, { title: t("pricing.title"), subtitle: t("pricing.subtitle"), children: [
      _jsxDEV(SeoHead, { title: title, description: description, path: "/pricing-calculator", type: "website",}, void 0, false, {fileName: _jsxFileName, lineNumber: 417}, this )

      , _jsxDEV('section', { className: "pt-10", children: 
        _jsxDEV('div', { className: "grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"   , children: [
          _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-7"   , children: [
            _jsxDEV('div', { className: "flex items-center justify-between gap-3"   , children: [
              _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
                _jsxDEV(Calculator, { className: "h-5 w-5 text-primary"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 424}, this )
                , _jsxDEV('div', { className: "text-lg font-semibold" , children: t("pricing.buildYourQuote")}, void 0, false, {fileName: _jsxFileName, lineNumber: 425}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 423}, this)
              , _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
                _jsxDEV(PricingOnboardingTooltip, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 428}, this )
                , _jsxDEV(Badge, { className: "bg-white/6 border border-white/10 text-foreground"   , children: t("pricing.badge.estimate")}, void 0, false, {fileName: _jsxFileName, lineNumber: 429}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 427}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 422}, this)

            , _jsxDEV('div', { className: "mt-6", children: 
              _jsxDEV(Tabs, { defaultValue: "web", className: "w-full", children: [
                _jsxDEV(TabsList, { className: "w-full justify-start bg-white/3 border border-white/10"    , children: [
                  _jsxDEV(TabsTrigger, { value: "web", className: "data-[state=active]:bg-white/6", children: 
                    t("pricing.tab.web")
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 436}, this)
                  , _jsxDEV(TabsTrigger, { value: "systems", className: "data-[state=active]:bg-white/6", children: 
                    t("pricing.tab.systems")
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 439}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 435}, this)

                , _jsxDEV(TabsContent, { value: "web", className: "mt-6", children: 
                  _jsxDEV('div', { className: "grid gap-5" , children: [
                    _jsxDEV('div', { className: "grid gap-3 sm:grid-cols-2"  , children: [
                      _jsxDEV('div', { className: "flex items-start gap-3 rounded-2xl border border-white/10 bg-white/3 p-4"       , children: [
                        _jsxDEV(Checkbox, {
                          id: "include-website",
                          checked: includeWebsite,
                          onCheckedChange: (v) => setIncludeWebsite(Boolean(v)),}, void 0, false, {fileName: _jsxFileName, lineNumber: 448}, this
                        )
                        , _jsxDEV('div', { className: "min-w-0", children: [
                          _jsxDEV(Label, { htmlFor: "include-website", className: "text-sm font-semibold" , children: 
                            t("pricing.web.website")
                          }, void 0, false, {fileName: _jsxFileName, lineNumber: 454}, this)
                          , _jsxDEV('p', { className: "mt-1 text-xs text-muted-foreground"  , children: 
                            t("pricing.web.websiteDesc")
                          }, void 0, false, {fileName: _jsxFileName, lineNumber: 457}, this)
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 453}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 447}, this)

                      , _jsxDEV('div', { className: "flex items-start gap-3 rounded-2xl border border-white/10 bg-white/3 p-4"       , children: [
                        _jsxDEV(Checkbox, {
                          id: "include-bio",
                          checked: includeBio,
                          onCheckedChange: (v) => setIncludeBio(Boolean(v)),}, void 0, false, {fileName: _jsxFileName, lineNumber: 464}, this
                        )
                        , _jsxDEV('div', { className: "min-w-0", children: [
                          _jsxDEV(Label, { htmlFor: "include-bio", className: "text-sm font-semibold" , children: 
                            t("pricing.web.bio")
                          }, void 0, false, {fileName: _jsxFileName, lineNumber: 470}, this)
                          , _jsxDEV('p', { className: "mt-1 text-xs text-muted-foreground"  , children: 
                            t("pricing.web.bioDesc")
                          }, void 0, false, {fileName: _jsxFileName, lineNumber: 473}, this)
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 469}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 463}, this)
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 446}, this)

                    , _jsxDEV('div', { className: "grid gap-4 sm:grid-cols-2"  , children: [
                      _jsxDEV('div', { className: "grid gap-2" , children: [
                        _jsxDEV(Label, { children: t("pricing.web.websiteType")}, void 0, false, {fileName: _jsxFileName, lineNumber: 482}, this)
                        , _jsxDEV(Select, {
                          value: websiteType,
                          onValueChange: (v) => setWebsiteType(v ),
                          disabled: !includeWebsite,
 children: [
                          _jsxDEV(SelectTrigger, { className: "bg-white/3 border-white/10" , children: 
                            _jsxDEV(SelectValue, { placeholder: t("pricing.web.websiteType.placeholder"),}, void 0, false, {fileName: _jsxFileName, lineNumber: 489}, this )
                          }, void 0, false, {fileName: _jsxFileName, lineNumber: 488}, this)
                          , _jsxDEV(SelectContent, { children: 
                            Object.entries(websiteBase).map(([k, v]) => (
                              _jsxDEV(SelectItem, { value: k, children: 
                                t(v.labelKey)
                              }, k, false, {fileName: _jsxFileName, lineNumber: 493}, this)
                            ))
                          }, void 0, false, {fileName: _jsxFileName, lineNumber: 491}, this)
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 483}, this)
                        , _jsxDEV('p', { className: "text-xs text-muted-foreground" , children: 
                          t(websiteBase[websiteType].noteKey)
                        }, void 0, false, {fileName: _jsxFileName, lineNumber: 499}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 481}, this)

                      , _jsxDEV('div', { className: "grid gap-2" , children: [
                        _jsxDEV(Label, { children: t("pricing.web.bioType")}, void 0, false, {fileName: _jsxFileName, lineNumber: 505}, this)
                        , _jsxDEV(Select, {
                          value: bioType,
                          onValueChange: (v) => setBioType(v ),
                          disabled: !includeBio,
 children: [
                          _jsxDEV(SelectTrigger, { className: "bg-white/3 border-white/10" , children: 
                            _jsxDEV(SelectValue, { placeholder: t("pricing.web.bioType.placeholder"),}, void 0, false, {fileName: _jsxFileName, lineNumber: 512}, this )
                          }, void 0, false, {fileName: _jsxFileName, lineNumber: 511}, this)
                          , _jsxDEV(SelectContent, { children: 
                            Object.entries(bioBase).map(([k, v]) => (
                              _jsxDEV(SelectItem, { value: k, children: 
                                t(v.labelKey)
                              }, k, false, {fileName: _jsxFileName, lineNumber: 516}, this)
                            ))
                          }, void 0, false, {fileName: _jsxFileName, lineNumber: 514}, this)
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 506}, this)
                        , _jsxDEV('p', { className: "text-xs text-muted-foreground" , children: t(bioBase[bioType].noteKey)}, void 0, false, {fileName: _jsxFileName, lineNumber: 522}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 504}, this)
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 480}, this)

                    , _jsxDEV('div', { className: "grid gap-2" , children: [
                      _jsxDEV(Label, { children: t("pricing.web.hostingTier")}, void 0, false, {fileName: _jsxFileName, lineNumber: 527}, this)
                      , _jsxDEV(Select, { value: hostingTier, onValueChange: (v) => setHostingTier(v ), children: [
                        _jsxDEV(SelectTrigger, { className: "bg-white/3 border-white/10" , children: 
                          _jsxDEV(SelectValue, { placeholder: t("pricing.web.hostingTier.placeholder"),}, void 0, false, {fileName: _jsxFileName, lineNumber: 530}, this )
                        }, void 0, false, {fileName: _jsxFileName, lineNumber: 529}, this)
                        , _jsxDEV(SelectContent, { children: 
                          Object.entries(hostingTiers).map(([k, v]) => (
                            _jsxDEV(SelectItem, { value: k, children: [
                              t(v.labelKey), " — "  , money(v.usdPerMonth, "USD"), "/mo"
                            ]}, k, true, {fileName: _jsxFileName, lineNumber: 534}, this)
                          ))
                        }, void 0, false, {fileName: _jsxFileName, lineNumber: 532}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 528}, this)
                      , _jsxDEV('p', { className: "text-xs text-muted-foreground" , children: 
                        _jsxDEV('span', { className: "inline-flex items-center gap-2"  , children: [
                          _jsxDEV(Server, { className: "h-3.5 w-3.5" , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 542}, this )
                          , t(hostingTiers[hostingTier].noteKey)
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 541}, this)
                      }, void 0, false, {fileName: _jsxFileName, lineNumber: 540}, this)
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 526}, this)

                    , _jsxDEV('div', { children: [
                      _jsxDEV('div', { className: "text-sm font-medium" , children: t("pricing.web.addOns")}, void 0, false, {fileName: _jsxFileName, lineNumber: 549}, this)
                      , _jsxDEV('div', { className: "mt-3 grid gap-3 lg:grid-cols-2"   , children: 
                        Object.entries(addOns).map(([k, a]) => {
                          const checked = _nullishCoalesce(selectedAddons[k], () => ( false));
                          return (
                            _jsxDEV('div', {

                              className: "flex items-start gap-3 rounded-2xl border border-white/10 bg-white/3 p-4"       ,
 children: [
                              _jsxDEV(Checkbox, {
                                id: `addon-${k}`,
                                checked: checked,
                                onCheckedChange: (v) =>
                                  setSelectedAddons((prev) => ({
                                    ...prev,
                                    [k]: Boolean(v),
                                  }))
                                ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 558}, this
                              )
                              , _jsxDEV('div', { className: "min-w-0", children: [
                                _jsxDEV(Label, { htmlFor: `addon-${k}`, className: "text-sm font-semibold" , children: [
                                  t(a.labelKey)
                                  , a.usdOneTime ? (
                                    _jsxDEV('span', { className: "ml-2 text-xs text-muted-foreground"  , children: ["("
                                      , money(a.usdOneTime, currency), ")"
                                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 572}, this)
                                  ) : null
                                  , a.usdPerMonth ? (
                                    _jsxDEV('span', { className: "ml-2 text-xs text-muted-foreground"  , children: ["("
                                      , money(a.usdPerMonth, currency), "/mo)"
                                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 577}, this)
                                  ) : null
                                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 569}, this)
                                , _jsxDEV('p', { className: "mt-1 text-xs text-muted-foreground"  , children: t(a.noteKey)}, void 0, false, {fileName: _jsxFileName, lineNumber: 582}, this)
                              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 568}, this)
                            ]}, k, true, {fileName: _jsxFileName, lineNumber: 554}, this)
                          );
                        })
                      }, void 0, false, {fileName: _jsxFileName, lineNumber: 550}, this)
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 548}, this)

                    , _jsxDEV('div', { className: "rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-muted-foreground"      , children: 
                      _jsxDEV('div', { className: "flex items-start gap-2"  , children: [
                        _jsxDEV(Info, { className: "mt-0.5 h-3.5 w-3.5"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 592}, this )
                        , _jsxDEV('div', { children: [
                          t("pricing.web.hostingSeparated")
                          , t("pricing.web.bringYourOwn")
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 593}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 591}, this)
                    }, void 0, false, {fileName: _jsxFileName, lineNumber: 590}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 445}, this)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 444}, this)

                , _jsxDEV(TabsContent, { value: "systems", className: "mt-6", children: 
                  _jsxDEV('div', { className: "grid gap-5" , children: [
                    _jsxDEV('div', { className: "rounded-2xl border border-white/10 bg-white/3 p-4"    , children: [
                      _jsxDEV('div', { className: "flex items-center gap-2 text-sm font-semibold"    , children: [
                        _jsxDEV(Settings, { className: "h-4 w-4 text-primary"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 606}, this )
                        , t("pricing.systems.guidedTitle")
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 605}, this)
                      , _jsxDEV('p', { className: "mt-2 text-xs text-muted-foreground"  , children: 
                        t("pricing.systems.guidedDesc")
                      }, void 0, false, {fileName: _jsxFileName, lineNumber: 609}, this)
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 604}, this)

                    , _jsxDEV('div', { className: "grid gap-4 sm:grid-cols-2"  , children: [
                      _jsxDEV('div', { className: "grid gap-2" , children: [
                        _jsxDEV(Label, { children: t("pricing.systems.need")}, void 0, false, {fileName: _jsxFileName, lineNumber: 616}, this)
                        , _jsxDEV(Select, { value: customNeed, onValueChange: (v) => setCustomNeed(v ), children: [
                          _jsxDEV(SelectTrigger, { className: "bg-white/3 border-white/10" , children: 
                            _jsxDEV(SelectValue, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 619}, this )
                          }, void 0, false, {fileName: _jsxFileName, lineNumber: 618}, this)
                          , _jsxDEV(SelectContent, { children: [
                            _jsxDEV(SelectItem, { value: "internal-tool", children: "Internal tool" }, void 0, false, {fileName: _jsxFileName, lineNumber: 622}, this)
                            , _jsxDEV(SelectItem, { value: "lms", children: "LMS / learning portal"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 623}, this)
                            , _jsxDEV(SelectItem, { value: "video", children: "Video / media system"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 624}, this)
                            , _jsxDEV(SelectItem, { value: "custom", children: "Custom solution" }, void 0, false, {fileName: _jsxFileName, lineNumber: 625}, this)
                          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 621}, this)
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 617}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 615}, this)

                      , _jsxDEV('div', { className: "grid gap-2" , children: [
                        _jsxDEV(Label, { children: t("pricing.systems.timeline")}, void 0, false, {fileName: _jsxFileName, lineNumber: 631}, this)
                        , _jsxDEV(Select, { value: customTimeline, onValueChange: setCustomTimeline, children: [
                          _jsxDEV(SelectTrigger, { className: "bg-white/3 border-white/10" , children: 
                            _jsxDEV(SelectValue, { placeholder: "Select",}, void 0, false, {fileName: _jsxFileName, lineNumber: 634}, this )
                          }, void 0, false, {fileName: _jsxFileName, lineNumber: 633}, this)
                          , _jsxDEV(SelectContent, { children: [
                            _jsxDEV(SelectItem, { value: "2-4 weeks" , children: "2–4 weeks" }, void 0, false, {fileName: _jsxFileName, lineNumber: 637}, this)
                            , _jsxDEV(SelectItem, { value: "4-8 weeks" , children: "4–8 weeks" }, void 0, false, {fileName: _jsxFileName, lineNumber: 638}, this)
                            , _jsxDEV(SelectItem, { value: "8-12 weeks" , children: "8–12 weeks" }, void 0, false, {fileName: _jsxFileName, lineNumber: 639}, this)
                            , _jsxDEV(SelectItem, { value: "flexible", children: "Flexible"}, void 0, false, {fileName: _jsxFileName, lineNumber: 640}, this)
                          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 636}, this)
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 632}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 630}, this)
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 614}, this)

                    , _jsxDEV('div', { className: "grid gap-2" , children: [
                      _jsxDEV(Label, { children: t("pricing.systems.budget")}, void 0, false, {fileName: _jsxFileName, lineNumber: 647}, this)
                      , _jsxDEV(Input, {
                        value: customBudget,
                        onChange: (e) => setCustomBudget(e.target.value),
                        placeholder: t("pricing.systems.budget.placeholder"),
                        className: "bg-white/3 border-white/10" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 648}, this
                      )
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 646}, this)

                    , _jsxDEV('div', { className: "grid gap-2" , children: [
                      _jsxDEV(Label, { children: t("pricing.systems.requirements")}, void 0, false, {fileName: _jsxFileName, lineNumber: 657}, this)
                      , _jsxDEV(Textarea, {
                        value: customNotes,
                        onChange: (e) => setCustomNotes(e.target.value),
                        placeholder: t("pricing.systems.requirements.placeholder"),
                        className: "min-h-28 bg-white/3 border-white/10"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 658}, this
                      )
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 656}, this)

                    , _jsxDEV('div', { className: "grid gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"      , children: [
                      _jsxDEV('div', { className: "flex items-center gap-2 text-sm font-semibold"    , children: [
                        customNeedCopy[customNeed].icon
                        , t(customNeedCopy[customNeed].labelKey)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 667}, this)
                      , _jsxDEV('div', { className: "text-xs text-muted-foreground" , children: 
                        t(customNeedCopy[customNeed].noteKey)
                      }, void 0, false, {fileName: _jsxFileName, lineNumber: 671}, this)
                      , _jsxDEV('div', { className: "text-xs text-muted-foreground" , children: 
                        _jsxDEV('span', { className: "inline-flex items-center gap-2"  , children: [
                          _jsxDEV(Info, { className: "h-3.5 w-3.5" , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 676}, this )
                          , t(customNeedCopy[customNeed].estimateKey)
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 675}, this)
                      }, void 0, false, {fileName: _jsxFileName, lineNumber: 674}, this)
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 666}, this)

                    , _jsxDEV('div', { className: "grid gap-4" , children: [
                      _jsxDEV('div', { className: "grid gap-3 sm:grid-cols-2"  , children: [
                        _jsxDEV('div', { className: "grid gap-2" , children: [
                          _jsxDEV(Label, { children: t("form.name")}, void 0, false, {fileName: _jsxFileName, lineNumber: 685}, this)
                          , _jsxDEV(Input, {
                            value: contactName,
                            onChange: (e) => setContactName(e.target.value),
                            placeholder: t("form.name.placeholder"),
                            className: "bg-white/3 border-white/10" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 686}, this
                          )
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 684}, this)
                        , _jsxDEV('div', { className: "grid gap-2" , children: [
                          _jsxDEV(Label, { children: t("form.email")}, void 0, false, {fileName: _jsxFileName, lineNumber: 694}, this)
                          , _jsxDEV(Input, {
                            value: contactEmail,
                            onChange: (e) => setContactEmail(e.target.value),
                            placeholder: t("form.email.placeholder"),
                            type: "email",
                            className: "bg-white/3 border-white/10" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 695}, this
                          )
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 693}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 683}, this)
                      , _jsxDEV('div', { className: "grid gap-2" , children: [
                        _jsxDEV(Label, { children: t("form.phone")}, void 0, false, {fileName: _jsxFileName, lineNumber: 705}, this)
                        , _jsxDEV(Input, {
                          value: contactPhone,
                          onChange: (e) => setContactPhone(e.target.value),
                          placeholder: t("form.phone.placeholder"),
                          className: "bg-white/3 border-white/10" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 706}, this
                        )
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 704}, this)

                      , _jsxDEV('div', { className: "flex flex-wrap items-center gap-3"   , children: [
                        _jsxDEV(Button, {
                          size: "lg",
                          className: "shadow-[0_0_40px_oklch(0.73_0.16_190/0.25)]",
                          onClick: async () => {
                            if (!contactName.trim() || !contactEmail.trim() || !contactPhone.trim()) {
                              toast.error(t("form.required"));
                              return;
                            }
                            // Backend removed (Neon deleted).
                            toast.success(t("pricing.systems.submitted"), {
                              description: t("pricing.systems.submittedDesc"),
                            });
                            setContactName("");
                            setContactEmail("");
                            setContactPhone("");
                            setCustomBudget("");
                            setCustomTimeline("");
                            setCustomNotes("");
                          },
 children: [
                          t("pricing.systems.submit"), " " , _jsxDEV(ArrowRight, { className: "ml-2 h-4 w-4"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 735}, this )
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 715}, this)
                        , _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
                          _jsxDEV(Link, { href: "/contact", children: t("pricing.systems.openFullIntake")}, void 0, false, {fileName: _jsxFileName, lineNumber: 738}, this)
                        }, void 0, false, {fileName: _jsxFileName, lineNumber: 737}, this)
                        , _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
                          _jsxDEV('a', {
                            href: `mailto:alazzeh.ml@gmail.com?subject=${encodeURIComponent(
                              `Adawaty request: ${customNeed}`
                            )}&body=${encodeURIComponent(
                              `Need: ${customNeed}\nTimeline: ${customTimeline || ""}\nBudget: ${customBudget || ""}\n\nNotes:\n${customNotes || ""}`
                            )}`,
 children: 
                            t("pricing.systems.emailRequest")
                          }, void 0, false, {fileName: _jsxFileName, lineNumber: 741}, this)
                        }, void 0, false, {fileName: _jsxFileName, lineNumber: 740}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 714}, this)
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 682}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 603}, this)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 602}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 434}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 433}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 421}, this)

          , _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-7"   , children: [
            _jsxDEV('div', { className: "flex items-center justify-between gap-3"   , children: [
              _jsxDEV('div', { className: "text-lg font-semibold" , children: t("pricing.estimate.title")}, void 0, false, {fileName: _jsxFileName, lineNumber: 761}, this)
              , _jsxDEV(Select, { value: currency, onValueChange: (v) => setCurrency(v ), children: [
                _jsxDEV(SelectTrigger, { className: "w-28 bg-white/3 border-white/10"  , children: 
                  _jsxDEV(SelectValue, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 764}, this )
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 763}, this)
                , _jsxDEV(SelectContent, { children: [
                  _jsxDEV(SelectItem, { value: "USD", children: "USD"}, void 0, false, {fileName: _jsxFileName, lineNumber: 767}, this)
                  , _jsxDEV(SelectItem, { value: "EGP", children: "EGP"}, void 0, false, {fileName: _jsxFileName, lineNumber: 768}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 766}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 762}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 760}, this)

            , _jsxDEV('div', { className: "mt-6 grid gap-3"  , children: [
              _jsxDEV('div', { className: "rounded-2xl border border-white/10 bg-white/3 p-6"    , children: [
                _jsxDEV('div', { className: "text-xs text-muted-foreground" , children: t("pricing.estimate.oneTime")}, void 0, false, {fileName: _jsxFileName, lineNumber: 775}, this)
                , _jsxDEV('div', { className: "mt-2 text-3xl sm:text-4xl font-semibold"   , children: 
                  money(totals.oneTime, currency)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 776}, this)
                , _jsxDEV('div', { className: "mt-2 text-xs text-muted-foreground"  , children: 
                  t("pricing.estimate.oneTimeDesc")
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 779}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 774}, this)

              , _jsxDEV('div', { className: "rounded-2xl border border-white/10 bg-white/3 p-6"    , children: [
                _jsxDEV('div', { className: "text-xs text-muted-foreground" , children: t("pricing.estimate.monthly")}, void 0, false, {fileName: _jsxFileName, lineNumber: 785}, this)
                , _jsxDEV('div', { className: "mt-2 text-3xl sm:text-4xl font-semibold"   , children: [
                  money(totals.monthly, currency)
                  , _jsxDEV('span', { className: "ml-2 text-sm font-normal text-muted-foreground"   , children: t("pricing.perMonth")}, void 0, false, {fileName: _jsxFileName, lineNumber: 788}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 786}, this)
                , _jsxDEV('div', { className: "mt-2 text-xs text-muted-foreground"  , children: [
                  t("pricing.estimate.monthlyDescPrefix"), " (" , money(totals.hosting, currency), t("pricing.perMonth"), ")", totals.addOnMonthly ? ` ${t("pricing.estimate.plusAddons")}` : "", "."
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 790}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 784}, this)

              , _jsxDEV('div', { className: "rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-muted-foreground"      , children: 
                _jsxDEV('div', { className: "flex items-start gap-2"  , children: [
                  _jsxDEV(Info, { className: "mt-0.5 h-3.5 w-3.5"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 797}, this )
                  , _jsxDEV('div', { children: 
                    t("pricing.estimate.disclaimer")
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 798}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 796}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 795}, this)

              , _jsxDEV('div', { className: "grid gap-4 rounded-2xl border border-white/10 bg-white/3 p-5"      , children: [
                _jsxDEV('div', { className: "text-sm font-medium" , children: t("pricing.exportSection.title")}, void 0, false, {fileName: _jsxFileName, lineNumber: 805}, this)
                , _jsxDEV('div', { className: "text-xs text-muted-foreground" , children: t("pricing.exportSection.desc")}, void 0, false, {fileName: _jsxFileName, lineNumber: 806}, this)

                , _jsxDEV('div', { className: "grid gap-3 sm:grid-cols-3"  , children: [
                  _jsxDEV('div', { className: "grid gap-2" , children: [
                    _jsxDEV(Label, { children: t("form.name")}, void 0, false, {fileName: _jsxFileName, lineNumber: 810}, this)
                    , _jsxDEV(Input, {
                      value: contactName,
                      onChange: (e) => setContactName(e.target.value),
                      placeholder: t("form.name.placeholder"),
                      className: "bg-white/3 border-white/10" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 811}, this
                    )
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 809}, this)
                  , _jsxDEV('div', { className: "grid gap-2" , children: [
                    _jsxDEV(Label, { children: t("form.email")}, void 0, false, {fileName: _jsxFileName, lineNumber: 819}, this)
                    , _jsxDEV(Input, {
                      value: contactEmail,
                      onChange: (e) => setContactEmail(e.target.value),
                      placeholder: t("form.email.placeholder"),
                      type: "email",
                      className: "bg-white/3 border-white/10" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 820}, this
                    )
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 818}, this)
                  , _jsxDEV('div', { className: "grid gap-2" , children: [
                    _jsxDEV(Label, { children: t("form.phone")}, void 0, false, {fileName: _jsxFileName, lineNumber: 829}, this)
                    , _jsxDEV(Input, {
                      value: contactPhone,
                      onChange: (e) => setContactPhone(e.target.value),
                      placeholder: t("form.phone.placeholder"),
                      className: "bg-white/3 border-white/10" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 830}, this
                    )
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 828}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 808}, this)

                , lastSerial ? (
                  _jsxDEV('div', { className: "text-xs text-muted-foreground" , children: [
                    t("pricing.serial"), ": " , _jsxDEV('span', { className: "text-foreground font-medium" , children: lastSerial}, void 0, false, {fileName: _jsxFileName, lineNumber: 841}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 840}, this)
                ) : null
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 804}, this)

              , _jsxDEV('div', { className: "grid gap-3" , children: [
                _jsxDEV(Button, { asChild: true, size: "lg", className: "shadow-[0_0_40px_oklch(0.73_0.16_190/0.25)]", children: 
                  _jsxDEV(Link, { href: "/contact", children: [
                    t("pricing.estimate.getFixedQuote"), " " , _jsxDEV(ArrowRight, { className: "ml-2 h-4 w-4"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 849}, this )
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 848}, this)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 847}, this)
                , _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
                  _jsxDEV(Link, { href: "/solutions", children: t("pricing.estimate.seeDeliverables")}, void 0, false, {fileName: _jsxFileName, lineNumber: 853}, this)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 852}, this)

                , includeBio ? (
                  _jsxDEV(Button, { asChild: true, variant: "secondary", className: "bg-white/6 hover:bg-white/10" , children: 
                    _jsxDEV(Link, { href: bioPreviewUrl, children: [
                      _jsxDEV(ExternalLink, { className: "mr-2 h-4 w-4"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 859}, this ), " Preview bio page"
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 858}, this)
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 857}, this)
                ) : null

                , _jsxDEV('div', { className: "grid gap-3 sm:grid-cols-2"  , children: [
                  _jsxDEV(Button, {
                    type: "button",
                    variant: "secondary",
                    className: "bg-white/6 hover:bg-white/10" ,
                    onClick: async () => {
                      try {
                        await navigator.clipboard.writeText(buildQuoteText(_nullishCoalesce(lastSerial, () => ( undefined))));
                        toast.success("Copied", { description: "Quote copied to clipboard" });
                      } catch (e2) {
                        toast.error("Copy failed", { description: "Your browser blocked clipboard access." });
                      }
                    },
 children: [
                    _jsxDEV(Copy, { className: "mr-2 h-4 w-4"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 878}, this ), " Copy quote"
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 865}, this)

                  , _jsxDEV(Button, {
                    type: "button",
                    className: "shadow-[0_0_40px_oklch(0.73_0.16_190/0.25)]",
                    disabled: exporting,
                    onClick: async () => {
                      if (!contactName.trim() || !contactPhone.trim()) {
                        toast.error(t("form.required"));
                        return;
                      }
                      setExporting(true);
                      const loading = toast.loading("Preparing PDF…", { duration: 15000 });
                      try {
                        // Backend removed (Neon deleted). Generate a local serial for reference.
                        const serial = `LOCAL-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
                        setLastSerial(serial);
                        openQuotePdf(serial);
                        toast.success("PDF ready", {
                          id: loading,
                          description: `${t("pricing.serial")}: ${serial}`,
                        });
                      } catch (err) {
                        toast.error(t("form.submitError"), {
                          id: loading,
                          description: _nullishCoalesce(_optionalChain([err, 'optionalAccess', _5 => _5.message]), () => ( t("form.tryAgain"))),
                        });
                      } finally {
                        setExporting(false);
                      }
                    },
 children: [
                    _jsxDEV(FileDown, { className: "mr-2 h-4 w-4"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 911}, this ), " Export PDF"
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 881}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 864}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 846}, this)

              , _jsxDEV('div', { className: "mt-1 text-xs text-muted-foreground"  , children: [
                _jsxDEV('strong', { className: "text-foreground", children: t("pricing.hostingNote.title")}, void 0, false, {fileName: _jsxFileName, lineNumber: 917}, this), " " , t("pricing.hostingNote.body")
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 916}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 773}, this)

            , _jsxDEV('div', { className: "mt-6", children: [
              _jsxDEV('div', { className: "text-sm font-medium" , children: t("pricing.estimate.breakdown")}, void 0, false, {fileName: _jsxFileName, lineNumber: 922}, this)
              , _jsxDEV('div', { className: "mt-3 grid gap-2 text-sm text-muted-foreground"    , children: [

                _jsxDEV('div', { className: "flex items-center justify-between"  , children: [
                  _jsxDEV('span', { className: "inline-flex items-center gap-2"  , children: [
                    _jsxDEV(Link2, { className: "h-4 w-4" , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 927}, this ), " " , t("pricing.breakdown.build")
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 926}, this)
                  , _jsxDEV('span', { className: "text-foreground", children: money(totals.website + totals.bio, currency)}, void 0, false, {fileName: _jsxFileName, lineNumber: 929}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 925}, this)
                , _jsxDEV('div', { className: "flex items-center justify-between"  , children: [
                  _jsxDEV('span', { className: "inline-flex items-center gap-2"  , children: [
                    _jsxDEV(ArrowRight, { className: "h-4 w-4" , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 933}, this ), " " , t("pricing.breakdown.addonsOneTime")
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 932}, this)
                  , _jsxDEV('span', { className: "text-foreground", children: money(totals.addOnOneTime, currency)}, void 0, false, {fileName: _jsxFileName, lineNumber: 935}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 931}, this)
                , _jsxDEV('div', { className: "mt-2 circuit-divider" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 937}, this )
                , _jsxDEV('div', { className: "flex items-center justify-between font-semibold"   , children: [
                  _jsxDEV('span', { className: "text-foreground", children: t("pricing.breakdown.oneTimeTotal")}, void 0, false, {fileName: _jsxFileName, lineNumber: 939}, this)
                  , _jsxDEV('span', { className: "text-foreground", children: money(totals.oneTime, currency)}, void 0, false, {fileName: _jsxFileName, lineNumber: 940}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 938}, this)
                , _jsxDEV('div', { className: "mt-4 flex items-center justify-between"   , children: [
                  _jsxDEV('span', { className: "inline-flex items-center gap-2"  , children: [
                    _jsxDEV(Server, { className: "h-4 w-4" , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 944}, this ), " " , t("pricing.breakdown.hostingMonthly")
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 943}, this)
                  , _jsxDEV('span', { className: "text-foreground", children: [money(totals.hosting, currency), "/mo"]}, void 0, true, {fileName: _jsxFileName, lineNumber: 946}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 942}, this)
                , _jsxDEV('div', { className: "flex items-center justify-between"  , children: [
                  _jsxDEV('span', { className: "inline-flex items-center gap-2"  , children: [
                    _jsxDEV(ArrowRight, { className: "h-4 w-4" , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 950}, this ), " " , t("pricing.breakdown.addonsMonthly")
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 949}, this)
                  , _jsxDEV('span', { className: "text-foreground", children: [money(totals.addOnMonthly, currency), "/mo"]}, void 0, true, {fileName: _jsxFileName, lineNumber: 952}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 948}, this)
                , _jsxDEV('div', { className: "mt-2 circuit-divider" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 954}, this )
                , _jsxDEV('div', { className: "flex items-center justify-between font-semibold"   , children: [
                  _jsxDEV('span', { className: "text-foreground", children: t("pricing.breakdown.monthlyTotal")}, void 0, false, {fileName: _jsxFileName, lineNumber: 956}, this)
                  , _jsxDEV('span', { className: "text-foreground", children: [money(totals.monthly, currency), "/mo"]}, void 0, true, {fileName: _jsxFileName, lineNumber: 957}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 955}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 923}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 921}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 759}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 420}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 419}, this)

      , _jsxDEV('section', { className: "mt-12 pb-6" , children: 
        _jsxDEV(Card, { className: "glass premium-card rounded-2xl p-7"   , children: [
          _jsxDEV('div', { className: "flex items-center gap-2 text-lg font-semibold"    , children: [
            _jsxDEV(Server, { className: "h-5 w-5 text-primary"  , 'aria-hidden': "true",}, void 0, false, {fileName: _jsxFileName, lineNumber: 968}, this )
            , t("pricing.hosting.whyTitle")
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 967}, this)
          , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground max-w-3xl"   , children: 
            t("pricing.hosting.whyDesc")
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 971}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 966}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 965}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 416}, this)
  );
}
