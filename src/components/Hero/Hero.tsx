import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Read, grow and evolve with Yomi.</h1>
            <p>
              Yomi is your child's virtual reading companion that grows and evolves through reading activities. Think Tamagotchi meets reading tutor - the more your child reads, the more Yomi thrives!
            </p>
            <a href="#download" className={styles.cta}>
              <span className={styles.ctaText}>Try out for free</span>
              <span className={styles.ctaIcon}>
                <ArrowRight size={20} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}