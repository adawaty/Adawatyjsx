const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}) {
  return _jsxDEV(AccordionPrimitive.Root, { 'data-slot': "accordion", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 10}, this )
}

function AccordionItem({
  className,
  ...props
}) {
  return (
    _jsxDEV(AccordionPrimitive.Item, {
      'data-slot': "accordion-item",
      className: cn("border-b last:border-b-0", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 18}, this
    )
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return (
    _jsxDEV(AccordionPrimitive.Header, { className: "flex", children: 
      _jsxDEV(AccordionPrimitive.Trigger, {
        'data-slot': "accordion-trigger",
        className: cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        ),
        ...props,
 children: [
        children
        , _jsxDEV(ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"      ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 33}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this)
  )
}

function AccordionContent({
  className,
  children,
  ...props
}) {
  return (
    _jsxDEV(AccordionPrimitive.Content, {
      'data-slot': "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"   ,
      ...props,
 children: 
      _jsxDEV('div', { className: cn("pt-0 pb-4", className), children: children}, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this)
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
