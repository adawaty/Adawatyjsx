const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Cairo Circuit Futurism — Brand → Build → Demand diagram
AIO-friendly: simple semantic SVG that can be parsed by crawlers.
*/

import { useI18n } from "@/contexts/I18nContext";

export default function BrandBuildDemandDiagram({
  className = "",
}

) {
  const { dir } = useI18n();
  const flip = dir === "rtl";
  const arrow = flip ? "←" : "→";
  const label = `Brand ${arrow} Build ${arrow} Demand`;
  return (
    _jsxDEV('svg', {
      className: className,
      viewBox: "0 0 900 160"   ,
      role: "img",
      'aria-label': `${label} system diagram`,
      style: flip ? { transform: "scaleX(-1)" } : undefined,
 children: [
      _jsxDEV('title', { children: label}, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this)
      , _jsxDEV('desc', { children: "Three-step system: Brand, Build, Demand with directional arrows between."        }, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this)

      , _jsxDEV('defs', { children: [
        _jsxDEV('linearGradient', { id: "glow", x1: "0", y1: "0", x2: "1", y2: "0", children: [
          _jsxDEV('stop', { offset: "0", stopColor: "oklch(0.73 0.16 190)"  , stopOpacity: "0.9",}, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this )
          , _jsxDEV('stop', { offset: "1", stopColor: "oklch(0.78 0.16 80)"  , stopOpacity: "0.9",}, void 0, false, {fileName: _jsxFileName, lineNumber: 31}, this )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 29}, this)
        , _jsxDEV('filter', { id: "soft", x: "-20%", y: "-20%", width: "140%", height: "140%", children: [
          _jsxDEV('feGaussianBlur', { stdDeviation: "6", result: "blur",}, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this )
          , _jsxDEV('feColorMatrix', {
            in: "blur",
            type: "matrix",
            values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.7 0"                      ,
            result: "blurAlpha",}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this
          )
          , _jsxDEV('feMerge', { children: [
            _jsxDEV('feMergeNode', { in: "blurAlpha",}, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this )
            , _jsxDEV('feMergeNode', { in: "SourceGraphic",}, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 41}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 33}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 28}, this)

      /* connectors */
      , _jsxDEV('path', { d: "M 285 80 L 365 80"     , stroke: "url(#glow)", strokeWidth: "6", strokeLinecap: "round", filter: "url(#soft)",}, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this )
      , _jsxDEV('path', { d: "M 585 80 L 665 80"     , stroke: "url(#glow)", strokeWidth: "6", strokeLinecap: "round", filter: "url(#soft)",}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this )

      /* arrow heads */
      , _jsxDEV('path', { d: "M 365 80 L 350 70 L 350 90 Z"         , fill: "oklch(0.73 0.16 190)"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this )
      , _jsxDEV('path', { d: "M 665 80 L 650 70 L 650 90 Z"         , fill: "oklch(0.78 0.16 80)"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this )

      /* nodes */
      , [{ x: 40, label: "Brand", sub: "Positioning • identity" },
        { x: 340, label: "Build", sub: "Website • conversion" },
        { x: 640, label: "Demand", sub: "Content • AI visibility" }].map((n) => (
        _jsxDEV('g', { transform: `translate(${n.x} 28)`, children: [
          _jsxDEV('rect', { width: "240", height: "104", rx: "22", fill: "oklch(0.20 0.02 250 / 0.65)"    , stroke: "oklch(0.85 0 0 / 0.12)"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 61}, this )
          , _jsxDEV('text', {
            x: "120",
            y: "48",
            textAnchor: "middle",
            fontSize: "26",
            fill: "oklch(0.98 0 0)"  ,
            fontFamily: "Onest, system-ui" ,
            style: flip ? { transform: "scaleX(-1)", transformOrigin: "120px 48px" } : undefined,
 children: 
            n.label
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)
          , _jsxDEV('text', {
            x: "120",
            y: "74",
            textAnchor: "middle",
            fontSize: "14",
            fill: "oklch(0.82 0 0 / 0.7)"    ,
            fontFamily: "Onest, system-ui" ,
            style: flip ? { transform: "scaleX(-1)", transformOrigin: "120px 74px" } : undefined,
 children: 
            n.sub
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this)
        ]}, n.label, true, {fileName: _jsxFileName, lineNumber: 60}, this)
      ))
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 18}, this)
  );
}
