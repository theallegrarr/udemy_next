
import { Form, Button, Modal, Alert } from 'react-bootstrap'

const Login = ({ show, setShow, form, setFormValue, signIn, isLoading, error }) =>{

  return(<>
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login to Your Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {error &&
          <Alert variant='danger'>
            {error}
          </Alert>
        }
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email"
              onChange={(e) => setFormValue({ ...form, email: e.target.value})} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password"
              onChange={(e) => setFormValue({ ...form, password: e.target.value})} />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={() => signIn()}
            disabled={isLoading}>
            {isLoading ? '...loading' : 'Sign In'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  </>)
}

export default Login;