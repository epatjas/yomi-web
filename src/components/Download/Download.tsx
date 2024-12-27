import styles from './Download.module.css';

export default function Download() {
  return (
    <section id="download" className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            Strong early reading foundations are more critical than ever.
          </h2>
          <p className={styles.description}>
            Help shape the future of children's reading! We're looking for families with children ages 5-9 to test Yomi, an interactive reading app that makes learning fun.
          </p>
          <div className={styles.download}>
            <div className={styles.downloadText}>
              Scan to<br />download Yomi
            </div>
            <img 
              src="/QR.png" 
              alt="QR code to download Yomi" 
              className={styles.qrCode}
            />
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img 
            src="/image 13.png" 
            alt="Yomi app interface" 
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
} 