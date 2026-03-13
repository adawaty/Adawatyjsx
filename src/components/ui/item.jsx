const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

function ItemGroup({ className, ...props }) {
  return (
    _jsxDEV('div', {
      role: "list",
      'data-slot': "item-group",
      className: cn("group/item-group flex flex-col", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 10}, this
    )
  )
}

function ItemSeparator({
  className,
  ...props
}) {
  return (
    _jsxDEV(Separator, {
      'data-slot': "item-separator",
      orientation: "horizontal",
      className: cn("my-0", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 24}, this
    )
  )
}

const itemVariants = cva(
  "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50",
      },
      size: {
        default: "p-4 gap-4 ",
        sm: "py-3 px-4 gap-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}
) {
  const Comp = asChild ? Slot : "div"
  return (
    _jsxDEV(Comp, {
      'data-slot': "item",
      'data-variant': variant,
      'data-size': size,
      className: cn(itemVariants({ variant, size, className })),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this
    )
  )
}

const itemMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image:
          "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function ItemMedia({
  className,
  variant = "default",
  ...props
}) {
  return (
    _jsxDEV('div', {
      'data-slot': "item-media",
      'data-variant': variant,
      className: cn(itemMediaVariants({ variant, className })),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 97}, this
    )
  )
}

function ItemContent({ className, ...props }) {
  return (
    _jsxDEV('div', {
      'data-slot': "item-content",
      className: cn(
        "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 108}, this
    )
  )
}

function ItemTitle({ className, ...props }) {
  return (
    _jsxDEV('div', {
      'data-slot': "item-title",
      className: cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 121}, this
    )
  )
}

function ItemDescription({ className, ...props }) {
  return (
    _jsxDEV('p', {
      'data-slot': "item-description",
      className: cn(
        "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 134}, this
    )
  )
}

function ItemActions({ className, ...props }) {
  return (
    _jsxDEV('div', {
      'data-slot': "item-actions",
      className: cn("flex items-center gap-2", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 148}, this
    )
  )
}

function ItemHeader({ className, ...props }) {
  return (
    _jsxDEV('div', {
      'data-slot': "item-header",
      className: cn(
        "flex basis-full items-center justify-between gap-2",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 158}, this
    )
  )
}

function ItemFooter({ className, ...props }) {
  return (
    _jsxDEV('div', {
      'data-slot': "item-footer",
      className: cn(
        "flex basis-full items-center justify-between gap-2",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 171}, this
    )
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}
