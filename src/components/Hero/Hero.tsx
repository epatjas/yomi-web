import styles from './Hero.module.css';

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
            <a href="#try" className={styles.cta}>
              Try out for free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}