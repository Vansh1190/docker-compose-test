import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dev App Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>🚀 Welcome to Your Dev App</h1>

        <p className={styles.description}>
          Deployed with <code className={styles.code}>Docker Compose</code> — running in <strong>dev mode</strong>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Docs &rarr;</h3>
            <p>Refer to your internal docs or README for development guidelines.</p>
          </div>

          <div className={styles.card}>
            <h3>Components &rarr;</h3>
            <p>Structure your UI using reusable React components under <code>/components</code>.</p>
          </div>

          <div className={styles.card}>
            <h3>API Routes &rarr;</h3>
            <p>Check <code>/pages/api</code> to create backend endpoints.</p>
          </div>

          <div className={styles.card}>
            <h3>Customize &rarr;</h3>
            <p>Edit <code>pages/index.tsx</code> to start customizing this dashboard.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>🛠 Built with Next.js · Docker · Compose · Your stack</span>
      </footer>
    </div>
  );
}
