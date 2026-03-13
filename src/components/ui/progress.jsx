const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}) {
  return (
    _jsxDEV(ProgressPrimitive.Root, {
      'data-slot': "progress",
      className: cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      ),
      ...props,
 children: 
      _jsxDEV(ProgressPrimitive.Indicator, {
        'data-slot': "progress-indicator",
        className: "bg-primary h-full w-full flex-1 transition-all"    ,
        style: { transform: `translateX(-${100 - (value || 0)}%)` },}, void 0, false, {fileName: _jsxFileName, lineNumber: 20}, this
      )
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 12}, this)
  )
}

export { Progress }
