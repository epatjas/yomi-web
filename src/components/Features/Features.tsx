import styles from './Features.module.css';

export default function Features() {
  const features = [
    {
      image: '/image 1.png',
      title: 'Every reader finds their perfect story level.',
      alt: 'Mobile app showing book selection interface'
    },
    {
      image: '/image 2.png',
      title: 'Gentle comprehension checks build understanding naturally.',
      alt: 'Chat interface with comprehension question'
    },
    {
      image: '/image 3.png',
      title: 'Syllable separation helps tackle tricky words, while adjustable font sizes ensure comfort.',
      alt: 'Text size adjustment interface'
    }
  ];

  return (
    <section id="features" className={styles.wrapper}>
      <h2 className={styles.title}>
        Smart reading tool that adapts to each child's needs.
      </h2>
      
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <div className={styles.imageWrapper}>
              <img 
                src={feature.image} 
                alt={feature.alt}
                className={styles.image}
              />
            </div>
            <p className={styles.description}>{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 