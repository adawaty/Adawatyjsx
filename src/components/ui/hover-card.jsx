const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

function HoverCard({
  ...props
}) {
  return _jsxDEV(HoverCardPrimitive.Root, { 'data-slot': "hover-card", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 11}, this )
}

function HoverCardTrigger({
  ...props
}) {
  return (
    _jsxDEV(HoverCardPrimitive.Trigger, { 'data-slot': "hover-card-trigger", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 18}, this )
  )
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return (
    _jsxDEV(HoverCardPrimitive.Portal, { 'data-slot': "hover-card-portal", children: 
      _jsxDEV(HoverCardPrimitive.Content, {
        'data-slot': "hover-card-content",
        align: align,
        sideOffset: sideOffset,
        className: cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        ),
        ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this
      )
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this)
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
