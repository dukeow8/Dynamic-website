import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>User List | Home</title>
        <meta name="keywords" content="users"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <Link href="/users/">
          <a className={styles.btn}>User Listing</a>
        </Link>
      </div>
    </>
  )
}
