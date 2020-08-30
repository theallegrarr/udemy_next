import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { connect } from "react-redux"
import { userSignUp, userSignIn, signOut, restore } from "../../redux/actions/main"
import Register from './Register';
import SignIn from './Login';
// styling(less, css, scss... ), images

function Header(props) {
  const [ show, handleClose ] = useState(false)
  const [ showSignIn, handleCloseSignIn ] = useState(false)
  const [ form, setFormValue ] = useState({})
  const { userInfo, restore } = props

  const register = () => props.userSignUp(form);
  const signIn = () => props.userSignIn(form);

  
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_info"))
    if(userData){
      restore(userData)
    }
  }, [])

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
        {userInfo.token &&
        <Nav>
          <NavDropdown title={`Welcome `+userInfo.name} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => props.signOut()}>Sign Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        }
        {!userInfo.token &&
        <Nav>
          <Nav.Link onClick={() => handleCloseSignIn(true)}>
            Sign In
          </Nav.Link>
          <Nav.Link onClick={() => handleClose(true)}>
            Register
          </Nav.Link>
        </Nav>
        }
      </Navbar.Collapse>
    </Navbar>

    <Register 
      show={show && !userInfo.token} 
      setShow={handleClose}
      form={form}
      setFormValue={setFormValue}
      register={register}
      error={userInfo.error}
      isLoading={props.userInfo.loading} />

    <SignIn 
      show={showSignIn && !userInfo.token} 
      setShow={handleCloseSignIn}
      form={form}
      setFormValue={setFormValue}
      error={userInfo.error}
      signIn={signIn}
      isLoading={props.userInfo.loading} />

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


const mapStateToProps = state => ({
  userInfo: state.main
})

const mapDispatchToProps = {
  userSignUp, userSignIn, signOut, restore
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)