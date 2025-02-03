"use client";

import React, { useEffect, useState } from "react";

interface AnimatedCounterProps {
  endValue: number; 
  interval?: number; 
}

export const AnimatedCounter = ({ endValue, interval = 1000 }: AnimatedCounterProps) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const duration = Math.floor(interval / endValue);
    let startValue = 0;

    const counter = setInterval(() => {
      startValue += 1;
      setCurrentValue(startValue);

      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);

    return () => clearInterval(counter);
  }, [endValue, interval]);

  return <span>{currentValue}</span>;
};