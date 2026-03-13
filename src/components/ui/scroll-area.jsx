const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}) {
  return (
    _jsxDEV(ScrollAreaPrimitive.Root, {
      'data-slot': "scroll-area",
      className: cn("relative", className),
      ...props,
 children: [
      _jsxDEV(ScrollAreaPrimitive.Viewport, {
        'data-slot': "scroll-area-viewport",
        className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"      ,
 children: 
        children
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 19}, this)
      , _jsxDEV(ScrollBar, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this )
      , _jsxDEV(ScrollAreaPrimitive.Corner, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this )
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 14}, this)
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return (
    _jsxDEV(ScrollAreaPrimitive.ScrollAreaScrollbar, {
      'data-slot': "scroll-area-scrollbar",
      orientation: orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      ),
      ...props,
 children: 
      _jsxDEV(ScrollAreaPrimitive.ScrollAreaThumb, {
        'data-slot': "scroll-area-thumb",
        className: "bg-border relative flex-1 rounded-full"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this
      )
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)
  )
}

export { ScrollArea, ScrollBar }
