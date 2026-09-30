"use client";

import React, { forwardRef, useMemo, useRef, useEffect, useState } from 'react';

type VariableProximityProps = {
  label: string;
  className?: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  containerRef?: React.RefObject<HTMLElement>;
  radius?: number;
  falloff?: "linear" | "exponential" | "gaussian";
};

const VariableProximity = forwardRef<HTMLSpanElement, VariableProximityProps>(
  (
    {
      label,
      fromFontVariationSettings,
      toFontVariationSettings,
      containerRef,
      radius = 120,
      falloff = "linear",
      className = "",
    },
    ref
  ) => {
    return (
      <span ref={ref} className={className} style={{ display: 'inline-flex' }}>
        <VariableProximityCore
          label={label}
          fromFontVariationSettings={fromFontVariationSettings}
          toFontVariationSettings={toFontVariationSettings}
          radius={radius}
        />
      </span>
    );
  }
);
VariableProximity.displayName = 'VariableProximity';

function parseVariationSettings(settingsStr: string) {
  const settings: Record<string, number> = {};
  const parts = settingsStr.split(',');
  parts.forEach(part => {
    const match = part.match(/'([^']+)'\s+([\d.]+)/);
    if (match) {
      settings[match[1]] = parseFloat(match[2]);
    }
  });
  return settings;
}

const VariableProximityCore = ({ label, fromFontVariationSettings, toFontVariationSettings, radius }: any) => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fromSettings = useMemo(() => parseVariationSettings(fromFontVariationSettings), [fromFontVariationSettings]);
  const toSettings = useMemo(() => parseVariationSettings(toFontVariationSettings), [toFontVariationSettings]);

  // Split label into words, then words into letters, to preserve whitespace correctly
  const words = label.split(' ');

  return (
    <>
      {words.map((word: string, i: number) => (
        <span key={i} style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
          {word.split('').map((char: string, j: number) => (
            <Letter
              key={j}
              char={char}
              mousePos={mousePos}
              fromSettings={fromSettings}
              toSettings={toSettings}
              radius={radius}
            />
          ))}
          {i !== words.length - 1 && <span style={{ display: 'inline-block', width: '0.25em' }}>&nbsp;</span>}
        </span>
      ))}
    </>
  );
};

const Letter = ({ char, mousePos, fromSettings, toSettings, radius }: any) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [variationStr, setVariationStr] = useState("");

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = mousePos.x - centerX;
    const dy = mousePos.y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    let t = Math.max(0, 1 - distance / radius);
    
    // Smooth easing
    t = t * t * (3 - 2 * t);
    
    let newStr = Object.keys(fromSettings).map(key => {
      const fromVal = fromSettings[key];
      const toVal = toSettings[key] ?? fromVal;
      const currentVal = fromVal + (toVal - fromVal) * t;
      return `'${key}' ${currentVal}`;
    }).join(', ');
    
    setVariationStr(newStr);
  }, [mousePos, fromSettings, toSettings, radius]);

  return (
    <span
      ref={ref}
      style={{
        fontVariationSettings: variationStr || undefined,
        display: 'inline-block'
      }}
    >
      {char}
    </span>
  );
};

export default VariableProximity;
