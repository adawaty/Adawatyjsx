const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }) {
  return (
    _jsxDEV(Loader2Icon, {
      role: "status",
      'aria-label': "Loading",
      className: cn("size-4 animate-spin", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 7}, this
    )
  )
}

export { Spinner }
