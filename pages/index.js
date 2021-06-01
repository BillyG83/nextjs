import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  
  const handleClick = function(event) {
    event.preventDefault()
    if(!event.target.id) return
    if(event.target.id = "start-pokedex") router.push('/pokemon')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex Fun</title>
        <meta name="description" content="a Pokedex made with next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Pokedex Fun with Next JS</h1>
        <button 
          alt="click to view the online Pokedex" 
          id="start-pokedex"
          onClick={handleClick} 
          type="button"
        >
          Click to enter
        </button>
      </main>

      <footer className={styles.footer}>
        <p>built for your approval by Bill Gilmore,<br /> lifelong rival of Gary Oak</p>
      </footer>
    </div>
  )
}
