import styles from './Header.module.css';
import { ArrowRight } from 'lucide-react';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <a href="#" className={styles.logo}>
            <span>yomi</span>
          </a>
          
          <nav className={styles.nav}>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>

          <a href="#download" className={styles.tryButton}>
            <span className={styles.tryButtonText}>Try out for free</span>
            <span className={styles.tryButtonIcon}>
              <ArrowRight size={20} />
            </span>
          </a>

          <button className={styles.menuButton}>
            <Menu size={20} />
          </button>
        </div>
      </header>
    </div>
  );
} 