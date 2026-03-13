const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import * as React from "react";










export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          _jsxDEV('div', { className: "min-h-screen flex items-center justify-center"   , children: 
            _jsxDEV('div', { className: "text-center", children: [
              _jsxDEV('h1', { className: "text-2xl font-bold" , children: "Something went wrong"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 28}, this)
              , _jsxDEV('button', {
                onClick: () => window.location.reload(),
                className: "mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"     ,
 children: "Reload Page"

              }, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 27}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this)
        )
      );
    }
    return this.props.children;
  }
}

