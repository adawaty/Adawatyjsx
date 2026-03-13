const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  ...props
}) {
  return (
    _jsxDEV(AvatarPrimitive.Root, {
      'data-slot': "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 11}, this
    )
  )
}

function AvatarImage({
  className,
  ...props
}) {
  return (
    _jsxDEV(AvatarPrimitive.Image, {
      'data-slot': "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 27}, this
    )
  )
}

function AvatarFallback({
  className,
  ...props
}) {
  return (
    _jsxDEV(AvatarPrimitive.Fallback, {
      'data-slot': "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this
    )
  )
}

export { Avatar, AvatarImage, AvatarFallback }
