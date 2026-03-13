const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}) {
  return (
    _jsxDEV(TabsPrimitive.Root, {
      'data-slot': "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 13}, this
    )
  )
}

function TabsList({
  className,
  ...props
}) {
  return (
    _jsxDEV(TabsPrimitive.List, {
      'data-slot': "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this
    )
  )
}

function TabsTrigger({
  className,
  ...props
}) {
  return (
    _jsxDEV(TabsPrimitive.Trigger, {
      'data-slot': "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this
    )
  )
}

function TabsContent({
  className,
  ...props
}) {
  return (
    _jsxDEV(TabsPrimitive.Content, {
      'data-slot': "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 58}, this
    )
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
