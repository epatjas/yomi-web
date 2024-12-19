import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <a href="/" className={styles.logo}>
            <span>yomi</span>
          </a>
          
          <nav className={styles.nav}>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#method">Method</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>

          <a href="#try" className={styles.tryButton}>
            Try out for free
          </a>
        </div>
      </header>
    </div>
  );
} 