import styles from './Benefits.module.css';
import Image from 'next/image';

export default function Benefits() {
  const benefits = [
    {
      image: '/image 4.png',
      title: 'Every word spoken feeds and energizes Yomi.',
      alt: 'Yomi energy level interface'
    },
    {
      image: '/image 5.png',
      title: 'Mistakes are just stepping stones, not stumbling blocks.',
      alt: 'Yomi encouragement interface'
    },
    {
      image: '/image 6.png',
      title: 'Reading becomes a journey shared with a friend, not a test to pass.',
      alt: 'Yomi chat interface'
    }
  ];

  return (
    <section id="benefits" className={styles.wrapper}>
      <h2 className={styles.title}>
        Supportive friend who loves to listen.
      </h2>
      
      <div className={styles.grid}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.benefit}>
            <div className={styles.imageWrapper}>
              <Image 
                src={benefit.image} 
                alt={benefit.alt}
                className={styles.image}
                width={400}
                height={400}
              />
            </div>
            <p className={styles.description}>{benefit.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 