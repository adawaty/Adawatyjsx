const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime"; function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }/*
Cairo Circuit Futurism — Scroll Chapters (scroll-stopper)
- Goal: pinned, cinematic section that advances in “chapters” as you scroll
- Tech: Framer Motion useScroll/useTransform
- Constraints: respect prefers-reduced-motion, keep text readable
*/

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { useI18n } from "@/contexts/I18nContext";

 






export default function ScrollChapters({
  chapters,
  className,
}


) {
  const reduceMotion = useReducedMotion();
  const { t, dir } = useI18n();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const steps = useMemo(() => {
    const n = Math.max(1, chapters.length);
    return Array.from({ length: n }, (_, i) => i / (n - 1 || 1));
  }, [chapters.length]);

  return (
    _jsxDEV('section', { ref: ref, className: className, children: 
      _jsxDEV('div', { className: "relative min-h-[260vh]" , children: 
        _jsxDEV('div', { className: "sticky top-24" , children: 
          _jsxDEV('div', { className: "relative overflow-hidden rounded-3xl border border-white/10 bg-white/3"     , children: [
            /* animated circuit grid */
            _jsxDEV('div', { className: "pointer-events-none absolute inset-0 opacity-70"   , children: [
              _jsxDEV('div', { className: "absolute inset-0 bg-grid"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this )
              , _jsxDEV('div', { className: "absolute inset-0 bg-radial-glow"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this )
              , !reduceMotion && _jsxDEV('div', { className: "absolute inset-0 scanlines"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this )
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 46}, this)

            , _jsxDEV('div', { className: "relative grid gap-6 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_0.95fr]"       , children: [
              _jsxDEV('div', { children: [
                _jsxDEV('div', { className: "text-xs tracking-[0.24em] uppercase text-primary/90"   , children: t("home.scrollStopper.eyebrow")}, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this)
                , _jsxDEV('h2', { className: "mt-3 text-3xl sm:text-4xl font-semibold leading-[1.05] text-balance"     , children: [
                  t("home.scrollStopper.title")
                  , _jsxDEV('span', { className: "text-muted-foreground", children: [" " , t("home.scrollStopper.subtitle")]}, void 0, true, {fileName: _jsxFileName, lineNumber: 57}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 55}, this)
                , _jsxDEV('p', { className: "mt-3 max-w-xl text-muted-foreground"  , children: 
                  t("home.scrollStopper.desc")
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this)

                /* progress */
                , _jsxDEV('div', { className: "mt-6", children: [
                  _jsxDEV('div', { className: "h-1.5 w-full rounded-full bg-white/6 overflow-hidden border border-white/10"      , children: 
                    _jsxDEV(motion.div, {
                      className: `h-full w-full ${dir === "rtl" ? "origin-right" : "origin-left"} bg-gradient-to-r from-primary to-accent`,
                      style: { scaleX: reduceMotion ? 1 : scrollYProgress },}, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this
                    )
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this)
                  , _jsxDEV('div', { className: "mt-2 flex justify-between text-[11px] text-muted-foreground"    , children: [
                    _jsxDEV('span', { children: t("home.scrollStopper.progress1")}, void 0, false, {fileName: _jsxFileName, lineNumber: 72}, this)
                    , _jsxDEV('span', { children: t("home.scrollStopper.progress2")}, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this)
                    , _jsxDEV('span', { children: t("home.scrollStopper.progress3")}, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this)
                    , _jsxDEV('span', { children: t("home.scrollStopper.progress4")}, void 0, false, {fileName: _jsxFileName, lineNumber: 75}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 71}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 64}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 53}, this)

              , _jsxDEV('div', { className: "relative", children: 
                _jsxDEV('div', { className: "grid gap-4" , children: 
                  chapters.map((c, idx) => {
                    const start = _nullishCoalesce(steps[idx], () => ( 0));
                    const prev = _nullishCoalesce(steps[Math.max(0, idx - 1)], () => ( 0));
                    const next = _nullishCoalesce(steps[Math.min(steps.length - 1, idx + 1)], () => ( 1));

                    const opacity = reduceMotion
                      ? 1
                      : useTransform(scrollYProgress, [prev, start, next], [0.18, 1, 0.18]);

                    const y = reduceMotion ? 0 : useTransform(scrollYProgress, [prev, start, next], [18, 0, -18]);

                    const scale = reduceMotion
                      ? 1
                      : useTransform(scrollYProgress, [prev, start, next], [0.98, 1, 0.98]);

                    return (
                      _jsxDEV(motion.article, {

                        className: "glass rounded-2xl p-6 border border-white/10"    ,
                        style: { opacity, y, scale },
 children: [
                        c.eyebrow ? (
                          _jsxDEV('div', { className: "text-[11px] tracking-[0.22em] uppercase text-accent/90"   , children: c.eyebrow}, void 0, false, {fileName: _jsxFileName, lineNumber: 104}, this)
                        ) : null
                        , _jsxDEV('div', { className: "mt-2 text-lg font-semibold"  , children: c.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 106}, this)
                        , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: c.body}, void 0, false, {fileName: _jsxFileName, lineNumber: 107}, this)
                        , _optionalChain([c, 'access', _2 => _2.bullets, 'optionalAccess', _3 => _3.length]) ? (
                          _jsxDEV('ul', { className: "mt-4 grid gap-2 text-sm text-muted-foreground"    , children: 
                            c.bullets.map((b) => (
                              _jsxDEV('li', { className: "flex gap-2" , children: [
                                _jsxDEV('span', { className: "mt-2 h-1.5 w-1.5 rounded-full bg-primary"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 112}, this )
                                , _jsxDEV('span', { children: b}, void 0, false, {fileName: _jsxFileName, lineNumber: 113}, this)
                              ]}, b, true, {fileName: _jsxFileName, lineNumber: 111}, this)
                            ))
                          }, void 0, false, {fileName: _jsxFileName, lineNumber: 109}, this)
                        ) : null
                      ]}, c.title, true, {fileName: _jsxFileName, lineNumber: 98}, this)
                    );
                  })
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 81}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 80}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 52}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 44}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this)
  );
}
