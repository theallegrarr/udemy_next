import Head from 'next/head'
import Header from  './components/Header'
import style from "../style/index.less"
// styling(less, css, scss... ), images

export default function Weather() {
  return (
    <div className="container">
      <Head>
        <title>The Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={style.main}>
          <h1 className="title">
            Today is Looking Good
          </h1>
          <Header />
        </div>
      </main>
    </div>
  )
}
