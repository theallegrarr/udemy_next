import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Register from './Register';
import SignIn from './Login';
// styling(less, css, scss... ), images

export default function Header() {
  const [ show, handleClose ] = useState(false)
  const [ showSignIn, handleCloseSignIn ] = useState(false)
  const [ form, setFormValue ] = useState({})

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      </Head>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link href="/">
          <a className="text-white">
            My Cool App
          </a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Link href="/weather"><a className="text-white mr-2 mt-1">Weather</a></Link>
        <Link href="/todo"><a className="text-white mr-2 mt-1">Todo</a></Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={() => handleCloseSignIn(true)}>
            Sign In
          </Nav.Link>
          <Nav.Link onClick={() => handleClose(true)}>
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Register 
      show={show} 
      setShow={handleClose}
      form={form}
      setFormValue={setFormValue} />

    <SignIn 
      show={showSignIn} 
      setShow={handleCloseSignIn}
      form={form}
      setFormValue={setFormValue} />

      {/* <Navbar bg="primary" variant="dark">
      <Navbar.Brand>
        <Link href="/">
          <a className="text-white">
            My Cool App
          </a>
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Link href="/weather"><a className="text-white">Weather</a></Link>
        <Link href="/todo"><a className="text-white">Todo</a></Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar> */}
{/* 
      <nav>
        <Link href="/">Home</Link>
        <Link href="/weather">Weather</Link>
        <Link href="/todo">Todo</Link>
      </nav> */}
    </>
  )
}

