import Head from 'next/head'
import image from './assets/firebase-sticker.jpg'
import Header from  './components/Header'
import style from "../style/index.less"
// styling(less, css, scss... ), images

export default function Home() {

  return (
    <div className="xcontainer">
      <Head>
        <title>My Cool App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="main">
          <Header />
          <h1 className="title m-5">
            Welcome to My App
          </h1>
          <img src={image} />
        </div>
      </main>
    </div>
  )
}
