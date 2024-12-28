'use client';

import styles from './Logo.module.css';
import Link from 'next/link';

export default function Logo() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link href="/" className={styles.logo} onClick={handleClick}>
      <span>yomi</span>
    </Link>
  );
} 