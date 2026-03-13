const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"


import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext



({
  size: "default",
  variant: "default",
  spacing: 0,
})

function ToggleGroup({
  className,
  variant,
  size,
  spacing = 0,
  children,
  ...props
}


) {
  return (
    _jsxDEV(ToggleGroupPrimitive.Root, {
      'data-slot': "toggle-group",
      'data-variant': variant,
      'data-size': size,
      'data-spacing': spacing,
      style: { "--gap": spacing } ,
      className: cn(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        className
      ),
      ...props,
 children: 
      _jsxDEV(ToggleGroupContext.Provider, { value: { variant, size, spacing }, children: 
        children
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this)
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}
) {
  const context = React.useContext(ToggleGroupContext)

  return (
    _jsxDEV(ToggleGroupPrimitive.Item, {
      'data-slot': "toggle-group-item",
      'data-variant': context.variant || variant,
      'data-size': context.size || size,
      'data-spacing': context.spacing,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        className
      ),
      ...props,
 children: 
      children
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 60}, this)
  )
}

export { ToggleGroup, ToggleGroupItem }
