const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Sheet({ ...props }) {
  return _jsxDEV(SheetPrimitive.Root, { 'data-slot': "sheet", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 8}, this )
}

function SheetTrigger({
  ...props
}) {
  return _jsxDEV(SheetPrimitive.Trigger, { 'data-slot': "sheet-trigger", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 14}, this )
}

function SheetClose({
  ...props
}) {
  return _jsxDEV(SheetPrimitive.Close, { 'data-slot': "sheet-close", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 20}, this )
}

function SheetPortal({
  ...props
}) {
  return _jsxDEV(SheetPrimitive.Portal, { 'data-slot': "sheet-portal", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this )
}

function SheetOverlay({
  className,
  ...props
}) {
  return (
    _jsxDEV(SheetPrimitive.Overlay, {
      'data-slot': "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this
    )
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}

) {
  return (
    _jsxDEV(SheetPortal, { children: [
      _jsxDEV(SheetOverlay, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this )
      , _jsxDEV(SheetPrimitive.Content, {
        'data-slot': "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
 children: [
        children
        , _jsxDEV(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"             , children: [
          _jsxDEV(XIcon, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this )
          , _jsxDEV('span', { className: "sr-only", children: "Close"}, void 0, false, {fileName: _jsxFileName, lineNumber: 75}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 73}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 56}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 54}, this)
  )
}

function SheetHeader({ className, ...props }) {
  return (
    _jsxDEV('div', {
      'data-slot': "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 84}, this
    )
  )
}

function SheetFooter({ className, ...props }) {
  return (
    _jsxDEV('div', {
      'data-slot': "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 94}, this
    )
  )
}

function SheetTitle({
  className,
  ...props
}) {
  return (
    _jsxDEV(SheetPrimitive.Title, {
      'data-slot': "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 107}, this
    )
  )
}

function SheetDescription({
  className,
  ...props
}) {
  return (
    _jsxDEV(SheetPrimitive.Description, {
      'data-slot': "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 120}, this
    )
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
