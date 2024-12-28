import styles from './Learning.module.css';
import Image from 'next/image';

export default function Learning() {
  const items = [
    {
      image: '/image 7.png',
      title: 'Progress is celebrated, not just measured.',
      alt: 'Yomi celebration screen'
    },
    {
      image: '/image 8.png',
      title: 'Daily reading streaks build healthy habits naturally',
      alt: 'Reading streak interface'
    },
    {
      image: '/image 9.png',
      title: 'Progress tracking enhances learning retention and motivation',
      alt: 'Progress tracking screen'
    }
  ];

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        Learning disguised as play.
      </h2>
      
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.imageWrapper}>
              <Image
                src={item.image} 
                alt={item.alt}
                className={styles.image}
                width={400}
                height={400}
              />
            </div>
            <p className={styles.description}>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 