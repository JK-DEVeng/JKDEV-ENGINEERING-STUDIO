"use client";

import styles from "./GlowButton.module.css";

interface GlowButtonProps {
  text: string;
}

export default function GlowButton({
  text,
}: GlowButtonProps) {
  return (
    <button className={styles.button}>
      {text}
    </button>
  );
}