const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function ContextMenu({
  ...props
}) {
  return _jsxDEV(ContextMenuPrimitive.Root, { 'data-slot': "context-menu", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 12}, this )
}

function ContextMenuTrigger({
  ...props
}) {
  return (
    _jsxDEV(ContextMenuPrimitive.Trigger, { 'data-slot': "context-menu-trigger", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 19}, this )
  )
}

function ContextMenuGroup({
  ...props
}) {
  return (
    _jsxDEV(ContextMenuPrimitive.Group, { 'data-slot': "context-menu-group", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 27}, this )
  )
}

function ContextMenuPortal({
  ...props
}) {
  return (
    _jsxDEV(ContextMenuPrimitive.Portal, { 'data-slot': "context-menu-portal", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this )
  )
}

function ContextMenuSub({
  ...props
}) {
  return _jsxDEV(ContextMenuPrimitive.Sub, { 'data-slot': "context-menu-sub", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this )
}

function ContextMenuRadioGroup({
  ...props
}) {
  return (
    _jsxDEV(ContextMenuPrimitive.RadioGroup, {
      'data-slot': "context-menu-radio-group",
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this
    )
  )
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}

) {
  return (
    _jsxDEV(ContextMenuPrimitive.SubTrigger, {
      'data-slot': "context-menu-sub-trigger",
      'data-inset': inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
 children: [
      children
      , _jsxDEV(ChevronRightIcon, { className: "ml-auto",}, void 0, false, {fileName: _jsxFileName, lineNumber: 75}, this )
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 65}, this)
  )
}

function ContextMenuSubContent({
  className,
  ...props
}) {
  return (
    _jsxDEV(ContextMenuPrimitive.SubContent, {
      'data-slot': "context-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 85}, this
    )
  )
}

function ContextMenuContent({
  className,
  ...props
}) {
  return (
    _jsxDEV(ContextMenuPrimitive.Portal, { children: 
      _jsxDEV(ContextMenuPrimitive.Content, {
        'data-slot': "context-menu-content",
        className: cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        ),
        ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 102}, this
      )
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 101}, this)
  )
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}


) {
  return (
    _jsxDEV(ContextMenuPrimitive.Item, {
      'data-slot': "context-menu-item",
      'data-inset': inset,
      'data-variant': variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 124}, this
    )
  )
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return (
    _jsxDEV(ContextMenuPrimitive.CheckboxItem, {
      'data-slot': "context-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked: checked,
      ...props,
 children: [
      _jsxDEV('span', { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"      , children: 
        _jsxDEV(ContextMenuPrimitive.ItemIndicator, { children: 
          _jsxDEV(CheckIcon, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 155}, this )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 154}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 153}, this)
      , children
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 144}, this)
  )
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}) {
  return (
    _jsxDEV(ContextMenuPrimitive.RadioItem, {
      'data-slot': "context-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
 children: [
      _jsxDEV('span', { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"      , children: 
        _jsxDEV(ContextMenuPrimitive.ItemIndicator, { children: 
          _jsxDEV(CircleIcon, { className: "size-2 fill-current" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 179}, this )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 178}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 177}, this)
      , children
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 169}, this)
  )
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}

) {
  return (
    _jsxDEV(ContextMenuPrimitive.Label, {
      'data-slot': "context-menu-label",
      'data-inset': inset,
      className: cn(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 195}, this
    )
  )
}

function ContextMenuSeparator({
  className,
  ...props
}) {
  return (
    _jsxDEV(ContextMenuPrimitive.Separator, {
      'data-slot': "context-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 212}, this
    )
  )
}

function ContextMenuShortcut({
  className,
  ...props
}) {
  return (
    _jsxDEV('span', {
      'data-slot': "context-menu-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 225}, this
    )
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
