const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Pagination({ className, ...props }) {
  return (
    _jsxDEV('nav', {
      role: "navigation",
      'aria-label': "pagination",
      'data-slot': "pagination",
      className: cn("mx-auto flex w-full justify-center", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 13}, this
    )
  )
}

function PaginationContent({
  className,
  ...props
}) {
  return (
    _jsxDEV('ul', {
      'data-slot': "pagination-content",
      className: cn("flex flex-row items-center gap-1", className),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 28}, this
    )
  )
}

function PaginationItem({ ...props }) {
  return _jsxDEV('li', { 'data-slot': "pagination-item", ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this )
}






function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}) {
  return (
    _jsxDEV('a', {
      'aria-current': isActive ? "page" : undefined,
      'data-slot': "pagination-link",
      'data-active': isActive,
      className: cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      ),
      ...props,}, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this
    )
  )
}

function PaginationPrevious({
  className,
  ...props
}) {
  return (
    _jsxDEV(PaginationLink, {
      'aria-label': "Go to previous page"   ,
      size: "default",
      className: cn("gap-1 px-2.5 sm:pl-2.5", className),
      ...props,
 children: [
      _jsxDEV(ChevronLeftIcon, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 79}, this )
      , _jsxDEV('span', { className: "hidden sm:block" , children: "Previous"}, void 0, false, {fileName: _jsxFileName, lineNumber: 80}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 73}, this)
  )
}

function PaginationNext({
  className,
  ...props
}) {
  return (
    _jsxDEV(PaginationLink, {
      'aria-label': "Go to next page"   ,
      size: "default",
      className: cn("gap-1 px-2.5 sm:pr-2.5", className),
      ...props,
 children: [
      _jsxDEV('span', { className: "hidden sm:block" , children: "Next"}, void 0, false, {fileName: _jsxFileName, lineNumber: 96}, this)
      , _jsxDEV(ChevronRightIcon, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 97}, this )
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 90}, this)
  )
}

function PaginationEllipsis({
  className,
  ...props
}) {
  return (
    _jsxDEV('span', {
      'aria-hidden': true,
      'data-slot': "pagination-ellipsis",
      className: cn("flex size-9 items-center justify-center", className),
      ...props,
 children: [
      _jsxDEV(MoreHorizontalIcon, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 113}, this )
      , _jsxDEV('span', { className: "sr-only", children: "More pages" }, void 0, false, {fileName: _jsxFileName, lineNumber: 114}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 107}, this)
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
