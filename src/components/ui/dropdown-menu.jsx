const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function DropdownMenu({
  ...props
}) {
  return _jsxDEV(DropdownMenuPrimitive.Root, { 'data-slot': "dropdown-menu", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 10}, this )
}

function DropdownMenuPortal({
  ...props
}) {
  return (
    _jsxDEV(DropdownMenuPrimitive.Portal, { 'data-slot': "dropdown-menu-portal", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 17}, this )
  )
}

function DropdownMenuTrigger({
  ...props
}) {
  return (
    _jsxDEV(DropdownMenuPrimitive.Trigger, {
      'data-slot': "dropdown-menu-trigger",
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this
    )
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return (
    _jsxDEV(DropdownMenuPrimitive.Portal, { children: 
      _jsxDEV(DropdownMenuPrimitive.Content, {
        'data-slot': "dropdown-menu-content",
        sideOffset: sideOffset,
        className: cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        ),
        ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this
      )
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)
  )
}

function DropdownMenuGroup({
  ...props
}) {
  return (
    _jsxDEV(DropdownMenuPrimitive.Group, { 'data-slot': "dropdown-menu-group", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this )
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}


) {
  return (
    _jsxDEV(DropdownMenuPrimitive.Item, {
      'data-slot': "dropdown-menu-item",
      'data-inset': inset,
      'data-variant': variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 70}, this
    )
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return (
    _jsxDEV(DropdownMenuPrimitive.CheckboxItem, {
      'data-slot': "dropdown-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked: checked,
      ...props,
 children: [
      _jsxDEV('span', { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"      , children: 
        _jsxDEV(DropdownMenuPrimitive.ItemIndicator, { children: 
          _jsxDEV(CheckIcon, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 101}, this )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 100}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 99}, this)
      , children
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 90}, this)
  )
}

function DropdownMenuRadioGroup({
  ...props
}) {
  return (
    _jsxDEV(DropdownMenuPrimitive.RadioGroup, {
      'data-slot': "dropdown-menu-radio-group",
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 113}, this
    )
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return (
    _jsxDEV(DropdownMenuPrimitive.RadioItem, {
      'data-slot': "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
 children: [
      _jsxDEV('span', { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"      , children: 
        _jsxDEV(DropdownMenuPrimitive.ItemIndicator, { children: 
          _jsxDEV(CircleIcon, { className: "size-2 fill-current" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 136}, this )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 135}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 134}, this)
      , children
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 126}, this)
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}

) {
  return (
    _jsxDEV(DropdownMenuPrimitive.Label, {
      'data-slot': "dropdown-menu-label",
      'data-inset': inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 152}, this
    )
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}) {
  return (
    _jsxDEV(DropdownMenuPrimitive.Separator, {
      'data-slot': "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 169}, this
    )
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}) {
  return (
    _jsxDEV('span', {
      'data-slot': "dropdown-menu-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 182}, this
    )
  )
}

function DropdownMenuSub({
  ...props
}) {
  return _jsxDEV(DropdownMenuPrimitive.Sub, { 'data-slot': "dropdown-menu-sub", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 196}, this )
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}

) {
  return (
    _jsxDEV(DropdownMenuPrimitive.SubTrigger, {
      'data-slot': "dropdown-menu-sub-trigger",
      'data-inset': inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
 children: [
      children
      , _jsxDEV(ChevronRightIcon, { className: "ml-auto size-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 218}, this )
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 208}, this)
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}) {
  return (
    _jsxDEV(DropdownMenuPrimitive.SubContent, {
      'data-slot': "dropdown-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 228}, this
    )
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
