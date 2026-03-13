const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { cva, } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Empty({ className, ...props }) {
  return (
    _jsxDEV('div', {
      'data-slot': "empty",
      className: cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 7}, this
    )
  )
}

function EmptyHeader({ className, ...props }) {
  return (
    _jsxDEV('div', {
      'data-slot': "empty-header",
      className: cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 20}, this
    )
  )
}

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function EmptyMedia({
  className,
  variant = "default",
  ...props
}) {
  return (
    _jsxDEV('div', {
      'data-slot': "empty-icon",
      'data-variant': variant,
      className: cn(emptyMediaVariants({ variant, className })),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this
    )
  )
}

function EmptyTitle({ className, ...props }) {
  return (
    _jsxDEV('div', {
      'data-slot': "empty-title",
      className: cn("text-lg font-medium tracking-tight", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this
    )
  )
}

function EmptyDescription({ className, ...props }) {
  return (
    _jsxDEV('div', {
      'data-slot': "empty-description",
      className: cn(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this
    )
  )
}

function EmptyContent({ className, ...props }) {
  return (
    _jsxDEV('div', {
      'data-slot': "empty-content",
      className: cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 86}, this
    )
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}
