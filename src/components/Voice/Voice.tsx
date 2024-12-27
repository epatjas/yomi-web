import styles from './Voice.module.css';

export default function Voice() {
  const items = [
    {
      image: '/image 10.png',
      title: 'When children read aloud regularly, they naturally develop speed and accuracy.',
      tag: 'Phonological awareness',
      alt: 'Child reading aloud'
    },
    {
      image: '/image 11.png',
      title: 'The combination of seeing, hearing, and speaking helps children grasp and remember what they read.',
      tag: 'Reading comprehension',
      alt: 'Child focused on reading'
    },
    {
      image: '/image 12.png',
      title: 'As children hear their own voice reading they start connecting written words to spoken language.',
      tag: 'Reading fluency',
      alt: 'Child writing and reading'
    }
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.label}>POWER OF VOICE</span>
        <h2 className={styles.title}>
          Reading aloud provides multiple important developmental benefits
        </h2>
      </div>
      
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.imageWrapper}>
              <p className={styles.description}>{item.title}</p>
              <img 
                src={item.image} 
                alt={item.alt}
                className={styles.image}
              />
              <span className={styles.tag}>{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 