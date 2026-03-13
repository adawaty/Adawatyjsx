const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}) {
  return _jsxDEV(DialogPrimitive.Root, { 'data-slot': "dialog", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 10}, this )
}

function DialogTrigger({
  ...props
}) {
  return _jsxDEV(DialogPrimitive.Trigger, { 'data-slot': "dialog-trigger", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 16}, this )
}

function DialogPortal({
  ...props
}) {
  return _jsxDEV(DialogPrimitive.Portal, { 'data-slot': "dialog-portal", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 22}, this )
}

function DialogClose({
  ...props
}) {
  return _jsxDEV(DialogPrimitive.Close, { 'data-slot': "dialog-close", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 28}, this )
}

function DialogOverlay({
  className,
  ...props
}) {
  return (
    _jsxDEV(DialogPrimitive.Overlay, {
      'data-slot': "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 36}, this
    )
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}

) {
  return (
    _jsxDEV(DialogPortal, { 'data-slot': "dialog-portal", children: [
      _jsxDEV(DialogOverlay, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 57}, this )
      , _jsxDEV(DialogPrimitive.Content, {
        'data-slot': "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
 children: [
        children
        , showCloseButton && (
          _jsxDEV(DialogPrimitive.Close, {
            'data-slot': "dialog-close",
            className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"                 ,
 children: [
            _jsxDEV(XIcon, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 72}, this )
            , _jsxDEV('span', { className: "sr-only", children: "Close"}, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 68}, this)
        )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 58}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 56}, this)
  )
}

function DialogHeader({ className, ...props }) {
  return (
    _jsxDEV('div', {
      'data-slot': "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 83}, this
    )
  )
}

function DialogFooter({ className, ...props }) {
  return (
    _jsxDEV('div', {
      'data-slot': "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 93}, this
    )
  )
}

function DialogTitle({
  className,
  ...props
}) {
  return (
    _jsxDEV(DialogPrimitive.Title, {
      'data-slot': "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 109}, this
    )
  )
}

function DialogDescription({
  className,
  ...props
}) {
  return (
    _jsxDEV(DialogPrimitive.Description, {
      'data-slot': "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 122}, this
    )
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
