const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime"; function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }/*
Cairo Circuit Futurism — Contact
- Local-only form (no backend). On submit: toast.
*/

import SiteLayout from "@/components/SiteLayout";
import SeoHead from "@/components/SeoHead";
import { site, services } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";

import { useI18n } from "@/contexts/I18nContext";

export default function Contact() {
  const [service, setService] = useState(undefined);
  const { lang, t } = useI18n();

  return (
    _jsxDEV(SiteLayout, {
      title: t("contact.title"),
      subtitle: t("contact.subtitle"),
 children: [
      _jsxDEV(SeoHead, {
        title: `Contact | ${site.name}`,
        description: "Request a DFY scope for Brand → Build → Demand. Get a clear next step and a sprint plan."                  ,
        path: "/contact",
        type: "website",}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this
      )
      , _jsxDEV('section', { className: "pt-10", children: 
        _jsxDEV('div', { className: "grid gap-4 lg:grid-cols-3"  , children: [
          _jsxDEV(Card, { className: "glass rounded-2xl p-7 lg:col-span-2"   , children: 
            _jsxDEV('form', {
              className: "grid gap-5" ,
              onSubmit: async (e) => {
                e.preventDefault();
                const form = e.currentTarget ;
                const fd = new FormData(form);

                const name = String(_nullishCoalesce(fd.get("name"), () => ( ""))).trim();
                const email = String(_nullishCoalesce(fd.get("email"), () => ( ""))).trim();
                const phone = String(_nullishCoalesce(fd.get("phone"), () => ( ""))).trim();
                if (!phone) {
                  toast.error(t("form.required"));
                  return;
                }
                const msg = String(_nullishCoalesce(fd.get("message"), () => ( ""))).trim();
                const interested = String(_nullishCoalesce(fd.get("service"), () => ( ""))).trim();

                // Backend removed (Neon deleted). Keep a clean client-side confirmation.
                toast.success(t("contact.received"));
                form.reset();
                setService(undefined);
              },
 children: [
              _jsxDEV('div', { className: "grid gap-2 sm:grid-cols-2"  , children: [
                _jsxDEV('div', { className: "grid gap-2" , children: [
                  _jsxDEV(Label, { htmlFor: "name", children: t("form.name")}, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this)
                  , _jsxDEV(Input, { id: "name", name: "name", required: true, autoComplete: "name", placeholder: t("form.name.placeholder"),}, void 0, false, {fileName: _jsxFileName, lineNumber: 70}, this )
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 68}, this)
                , _jsxDEV('div', { className: "grid gap-2" , children: [
                  _jsxDEV(Label, { htmlFor: "email", children: t("form.email")}, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this)
                  , _jsxDEV(Input, {
                    id: "email",
                    name: "email",
                    type: "email",
                    autoComplete: "email",
                    spellCheck: false,
                    placeholder: t("form.email.placeholder"),}, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this
                  )
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 72}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 67}, this)

              , _jsxDEV('div', { className: "grid gap-2 sm:grid-cols-2"  , children: [
                _jsxDEV('div', { className: "grid gap-2" , children: [
                  _jsxDEV(Label, { htmlFor: "phone", children: t("form.phone")}, void 0, false, {fileName: _jsxFileName, lineNumber: 87}, this)
                  , _jsxDEV(Input, {
                    id: "phone",
                    name: "phone",
                    required: true,
                    type: "tel",
                    inputMode: "tel",
                    autoComplete: "tel",
                    placeholder: t("form.phone.placeholder"),}, void 0, false, {fileName: _jsxFileName, lineNumber: 88}, this
                  )
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 86}, this)
                , _jsxDEV('div', { className: "grid gap-2" , children: [
                  _jsxDEV(Label, { htmlFor: "service", children: t("contact.service")}, void 0, false, {fileName: _jsxFileName, lineNumber: 99}, this)
                  , _jsxDEV(Select, { value: service, onValueChange: setService, children: [
                    _jsxDEV(SelectTrigger, { id: "service", className: "bg-white/3 border-white/10" , children: 
                      _jsxDEV(SelectValue, { placeholder: t("contact.service.placeholder"),}, void 0, false, {fileName: _jsxFileName, lineNumber: 102}, this )
                    }, void 0, false, {fileName: _jsxFileName, lineNumber: 101}, this)
                    , _jsxDEV(SelectContent, { children: [
                      services.map((s) => (
                        _jsxDEV(SelectItem, { value: s.id, children: 
                          s.title
                        }, s.id, false, {fileName: _jsxFileName, lineNumber: 106}, this)
                      ))
                      , _jsxDEV(SelectItem, { value: "not-sure", children: t("contact.service.notSure")}, void 0, false, {fileName: _jsxFileName, lineNumber: 110}, this)
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 104}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 100}, this)
                  , _jsxDEV('input', { type: "hidden", name: "service", value: _nullishCoalesce(service, () => ( "")),}, void 0, false, {fileName: _jsxFileName, lineNumber: 113}, this )
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 98}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 85}, this)

              , _jsxDEV('div', { className: "grid gap-2" , children: [
                _jsxDEV(Label, { htmlFor: "message", children: t("form.message")}, void 0, false, {fileName: _jsxFileName, lineNumber: 118}, this)
                , _jsxDEV(Textarea, {
                  id: "message",
                  name: "message",
                  required: true,
                  placeholder: t("contact.message.placeholder"),
                  className: "min-h-32 bg-white/3 border-white/10"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 119}, this
                )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 117}, this)

              , _jsxDEV('div', { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"     , children: [
                _jsxDEV(Button, { type: "submit", size: "lg", children: 
                  t("contact.send")
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 129}, this)
                , _jsxDEV('div', { className: "text-xs text-muted-foreground" , children: [
                  t("contact.preferEmail"), " " , _jsxDEV('a', { className: "underline hover:text-foreground" , href: "mailto:alazzeh.ml@gmail.com", children: "alazzeh.ml@gmail.com"}, void 0, false, {fileName: _jsxFileName, lineNumber: 133}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 132}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 128}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 44}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this)

          , _jsxDEV(Card, { className: "glass rounded-2xl p-7"  , children: [
            _jsxDEV('div', { className: "text-lg font-semibold" , children: "Direct lines" }, void 0, false, {fileName: _jsxFileName, lineNumber: 140}, this)
            , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: "Add your official business contacts here (phone/WhatsApp/address)."

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 141}, this)

            , _jsxDEV('div', { className: "mt-6 grid gap-3"  , children: [
              _jsxDEV('div', { className: "rounded-2xl border border-white/10 bg-white/3 p-5"    , children: [
                _jsxDEV('div', { className: "text-sm font-semibold" , children: "Email"}, void 0, false, {fileName: _jsxFileName, lineNumber: 147}, this)
                , _jsxDEV('a', { className: "mt-1 block text-sm text-muted-foreground underline hover:text-foreground"     , href: "mailto:alazzeh.ml@gmail.com", children: "alazzeh.ml@gmail.com"

                }, void 0, false, {fileName: _jsxFileName, lineNumber: 148}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 146}, this)
              , _jsxDEV('div', { className: "rounded-2xl border border-white/10 bg-white/3 p-5"    , children: [
                _jsxDEV('div', { className: "text-sm font-semibold" , children: "Phone"}, void 0, false, {fileName: _jsxFileName, lineNumber: 153}, this)
                , _jsxDEV('div', { className: "mt-1 text-sm text-muted-foreground"  , children: "+20 10 0000 0000 (replace)"    }, void 0, false, {fileName: _jsxFileName, lineNumber: 154}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 152}, this)
              , _jsxDEV('div', { className: "rounded-2xl border border-white/10 bg-white/3 p-5"    , children: [
                _jsxDEV('div', { className: "text-sm font-semibold" , children: "Working hours" }, void 0, false, {fileName: _jsxFileName, lineNumber: 157}, this)
                , _jsxDEV('div', { className: "mt-1 text-sm text-muted-foreground"  , children: "Sun–Thu, 9:00–18:00" }, void 0, false, {fileName: _jsxFileName, lineNumber: 158}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 156}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 145}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 139}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 42}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 31}, this)
  );
}
