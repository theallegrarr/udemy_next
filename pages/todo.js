import Head from 'next/head'
import Header from  './components/Header'
import style from "../style/index.less"
// styling(less, css, scss... ), images

export default function Todo() {
  return (
    <div className="xcontainer">
      <Head>
        <title>My Todos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={style.main}>
          <Header />
          <h1 className="title">
            Cool Stuff todo Today
          </h1>
        </div>
      </main>
    </div>
  )
}
