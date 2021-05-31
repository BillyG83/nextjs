import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex Fun</title>
        <meta name="description" content="a Pokedex made with next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Pokedex Fun with Next JS</h1>
        <h2>Click to enter</h2>
      </main>

      <footer className={styles.footer}>
        <p>built for your approval by Bill Gilmore,<br /> lifelong rival of Gary Oak</p>
      </footer>
    </div>
  )
}
