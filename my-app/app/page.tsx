import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const customerItems = [
    { id: 1, title: 'Пример шаблона 1', description: '' },
    { id: 2, title: 'Пример шаблона 2', description: '' },
    { id: 3, title: 'Пример шаблона 3', description: '' },
  ];

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to SparkPage!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.container}>
            <h1 className={styles.headerLogo}>SparkPage</h1>
            <nav className={styles.nav}>
              <a href="#" className={styles.navLink}>Тарифы</a>
              <a href="#" className={styles.navLink}>Шаблоны</a>
              <a href="#" className={styles.navLink}>Функционал системы</a>
              <a href="#" className={styles.navLink}>Войти</a>
              <a href="#" className={styles.navLink}>Зарегистрироваться</a>
            </nav>
          </div>
        </header>

        <main className={styles.main}>
          <section className={styles.whyCustomers}>
            <div className={styles.container}>
              <div className={styles.customersGrid}>
                {customerItems.map(item => (
                  <div key={item.id} className={styles.customerItem}>
                    <h3 className={styles.heading}>{item.title}</h3>
                    <p className={styles.paragraph}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.linkRow}>
              <a href="#" className={styles.link}>О нас</a>
              <a href="#" className={styles.link}>Контакты</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}