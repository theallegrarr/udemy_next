import Link from 'next/link'
import Head from 'next/head'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
// styling(less, css, scss... ), images

export default function Header() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      </Head>

      <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">My Cool App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/weather">Weather</Nav.Link>
        <Nav.Link href="/todo">Todo</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
{/* 
      <nav>
        <Link href="/">Home</Link>
        <Link href="/weather">Weather</Link>
        <Link href="/todo">Todo</Link>
      </nav> */}
    </>
  )
}
