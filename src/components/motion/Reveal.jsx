const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";/*
Motion utils — scroll reveal + staggering
*/

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
}



) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-15% 0px -15% 0px", once: true });
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || reduce) {
    return (
      _jsxDEV('div', { ref: ref, className: className, children: 
        children
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this)
    );
  }

  return (
    _jsxDEV(motion.div, {
      ref: ref,
      className: className,
      initial: { opacity: 0, y: 18, filter: "blur(8px)" },
      animate: inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 18, filter: "blur(8px)" },
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
 children: 
      children
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this)
  );
}
