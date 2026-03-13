const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

function ResizablePanelGroup({
  className,
  ...props
}) {
  return (
    _jsxDEV(ResizablePrimitive.PanelGroup, {
      'data-slot': "resizable-panel-group",
      className: cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 12}, this
    )
  )
}

function ResizablePanel({
  ...props
}) {
  return _jsxDEV(ResizablePrimitive.Panel, { 'data-slot': "resizable-panel", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this )
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}

) {
  return (
    _jsxDEV(ResizablePrimitive.PanelResizeHandle, {
      'data-slot': "resizable-handle",
      className: cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      ),
      ...props,
 children: 
      withHandle && (
        _jsxDEV('div', { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border"        , children: 
          _jsxDEV(GripVerticalIcon, { className: "size-2.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this)
      )
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
