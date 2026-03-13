const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return (
    _jsxDEV(TooltipPrimitive.Provider, {
      'data-slot': "tooltip-provider",
      delayDuration: delayDuration,
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 13}, this
    )
  )
}

function Tooltip({
  ...props
}) {
  return (
    _jsxDEV(TooltipProvider, { children: 
      _jsxDEV(TooltipPrimitive.Root, { 'data-slot': "tooltip", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this )
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this)
  )
}

function TooltipTrigger({
  ...props
}) {
  return _jsxDEV(TooltipPrimitive.Trigger, { 'data-slot': "tooltip-trigger", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this )
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return (
    _jsxDEV(TooltipPrimitive.Portal, { children: 
      _jsxDEV(TooltipPrimitive.Content, {
        'data-slot': "tooltip-content",
        sideOffset: sideOffset,
        className: cn(
          "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        ),
        ...props,
 children: [
        children
        , _jsxDEV(TooltipPrimitive.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"      ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 45}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this)
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
