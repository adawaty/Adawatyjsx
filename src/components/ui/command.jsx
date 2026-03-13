const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function Command({
  className,
  ...props
}) {
  return (
    _jsxDEV(CommandPrimitive, {
      'data-slot': "command",
      className: cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 19}, this
    )
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}




) {
  return (
    _jsxDEV(Dialog, { ...props, children: [
      _jsxDEV(DialogHeader, { className: "sr-only", children: [
        _jsxDEV(DialogTitle, { children: title}, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this)
        , _jsxDEV(DialogDescription, { children: description}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 45}, this)
      , _jsxDEV(DialogContent, {
        className: cn("overflow-hidden p-0", className),
        showCloseButton: showCloseButton,
 children: 
        _jsxDEV(Command, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"            , children: 
          children
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 44}, this)
  )
}

function CommandInput({
  className,
  ...props
}) {
  return (
    _jsxDEV('div', {
      'data-slot': "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3"     ,
 children: [
      _jsxDEV(SearchIcon, { className: "size-4 shrink-0 opacity-50"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 70}, this )
      , _jsxDEV(CommandPrimitive.Input, {
        'data-slot': "command-input",
        className: cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 71}, this
      )
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 66}, this)
  )
}

function CommandList({
  className,
  ...props
}) {
  return (
    _jsxDEV(CommandPrimitive.List, {
      'data-slot': "command-list",
      className: cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 88}, this
    )
  )
}

function CommandEmpty({
  ...props
}) {
  return (
    _jsxDEV(CommandPrimitive.Empty, {
      'data-slot': "command-empty",
      className: "py-6 text-center text-sm"  ,
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 103}, this
    )
  )
}

function CommandGroup({
  className,
  ...props
}) {
  return (
    _jsxDEV(CommandPrimitive.Group, {
      'data-slot': "command-group",
      className: cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 116}, this
    )
  )
}

function CommandSeparator({
  className,
  ...props
}) {
  return (
    _jsxDEV(CommandPrimitive.Separator, {
      'data-slot': "command-separator",
      className: cn("bg-border -mx-1 h-px", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 132}, this
    )
  )
}

function CommandItem({
  className,
  ...props
}) {
  return (
    _jsxDEV(CommandPrimitive.Item, {
      'data-slot': "command-item",
      className: cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 145}, this
    )
  )
}

function CommandShortcut({
  className,
  ...props
}) {
  return (
    _jsxDEV('span', {
      'data-slot': "command-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 161}, this
    )
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
