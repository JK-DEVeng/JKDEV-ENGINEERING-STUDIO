"use client";

import styles from "./CtaButton.module.css";

export default function CtaButton() {
  return (
    <button className={styles.cta}>
      <span className={styles.span}>
        START PROJECT
      </span>

      <span className={styles.second}>
        <svg
          width="50px"
          height="20px"
          viewBox="0 0 66 43"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <path
              className={styles.one}
              d="M40.1543933..."
              fill="#FFFFFF"
            />

            <path
              className={styles.two}
              d="M20.1543933..."
              fill="#FFFFFF"
            />

            <path
              className={styles.three}
              d="M0.154393339..."
              fill="#FFFFFF"
            />
          </g>
        </svg>
      </span>
    </button>
  );
}