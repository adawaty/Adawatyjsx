const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function NativeSelect({ className, ...props }) {
  return (
    _jsxDEV('div', {
      className: "group/native-select relative w-fit has-[select:disabled]:opacity-50"   ,
      'data-slot': "native-select-wrapper",
 children: [
      _jsxDEV('select', {
        'data-slot': "native-select",
        className: cn(
          "border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 h-9 w-full min-w-0 appearance-none rounded-md border bg-transparent px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        ),
        ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 12}, this
      )
      , _jsxDEV(ChevronDownIcon, {
        className: "text-muted-foreground pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 opacity-50 select-none"        ,
        'aria-hidden': "true",
        'data-slot': "native-select-icon",}, void 0, false, {fileName: _jsxFileName, lineNumber: 22}, this
      )
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 8}, this)
  )
}

function NativeSelectOption({ ...props }) {
  return _jsxDEV('option', { 'data-slot': "native-select-option", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this )
}

function NativeSelectOptGroup({
  className,
  ...props
}) {
  return (
    _jsxDEV('optgroup', {
      'data-slot': "native-select-optgroup",
      className: cn(className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this
    )
  )
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }
