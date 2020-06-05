import Link from 'next/link'
// styling(less, css, scss... ), images

export default function Header() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/weather">Weather</Link>
      <Link href="/todo">Todo</Link>
    </nav>
  )
}
