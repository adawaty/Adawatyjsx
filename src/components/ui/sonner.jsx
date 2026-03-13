const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { Toaster as Sonner, } from "sonner"
import * as React from "react"

const Toaster = ({ ...props }) => {
  // Detect theme from document class (set by ThemeContext)
  const [theme, setTheme] = React.useState("light")
  
  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light")
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light")
    return () => observer.disconnect()
  }, [])

  return (
    _jsxDEV(Sonner, {
      theme: theme ,
      className: "toaster group" ,
      icons: {
        success: _jsxDEV(CircleCheckIcon, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this ),
        info: _jsxDEV(InfoIcon, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this ),
        warning: _jsxDEV(TriangleAlertIcon, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 31}, this ),
        error: _jsxDEV(OctagonXIcon, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this ),
        loading: _jsxDEV(Loader2Icon, { className: "size-4 animate-spin" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this ),
      },
      style: 
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } 
      ,
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this
    )
  )
}

export { Toaster }
