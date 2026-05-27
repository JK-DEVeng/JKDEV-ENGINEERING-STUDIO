import React from 'react';
import styles from './CtaButton.module.css';

// 1. Declare the type structure for your text prop
interface CtaButtonProps {
  text: string;
}

// 2. A clean, single definition matching your exact layout styles
export default function CtaButton({ text }: CtaButtonProps) {
  return (
    <button className={styles.cta}>
      <span className={styles.span}>
        {text}
      </span>
    </button>
  );
}