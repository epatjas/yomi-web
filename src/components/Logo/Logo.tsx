'use client';

import styles from './Logo.module.css';

export default function Logo() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a href="/" className={styles.logo} onClick={handleClick}>
      <span>yomi</span>
    </a>
  );
} 