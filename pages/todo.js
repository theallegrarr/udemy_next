import Head from 'next/head'
import { connect } from "react-redux"
import { useEffect, useState } from "react"
import { ListGroup, Button } from 'react-bootstrap'
import { getTodos, createTodo, updateTodo, deleteTodo } from "../redux/actions/main"
import Header from  './components/Header'
import NewTodo from  './components/NewTodo'
import style from "../style/index.less"
// styling(less, css, scss... ), images

function Todo(props) {
  const { todos, loading, error } = props.userInfo
  const { updateTodo, deleteTodo } = props

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  
  useEffect(() => {
    props.getTodos()
  }, [])

  const createTodo = () => {
    props.createTodo(title)
  }

  return (
    <div className="xcontainer">
      <Head>
        <title>My Todos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NewTodo 
          show={show}
          setShow={setShow}
          title={title}
          setTitle={setTitle}
          isLoading={loading}
          error={error}
          createTodo={createTodo}
        />
        <div className={style.main}>
          <Header />
          <h1 className="title">
            Cool Stuff todo Today
          </h1>
          <Button 
            variant="info" 
            className='mt-2 mb-2'
            onClick={() => setShow(!show)}>
            + Add Todo
          </Button>
          {
            todos.length > 0 ?
            todos.map((todo,i) =>
            <ListGroup horizontal key={i} className="mt-2">
              <ListGroup.Item>{todo.title}</ListGroup.Item>
              <ListGroup.Item className={todo.done ? `bg-success` : `bg-warning`}>
                {todo.done ? "Completed" : "Pending"}
              </ListGroup.Item>
              <Button 
                variant="success" 
                className='ml-2 mr-2'
                onClick={() => updateTodo(todo._id, todo.title, true)}
                disabled={todo.done}
                >
                {todo.done ? "Done" : "Mark Completed" }
              </Button>
              <Button 
                variant="danger"
                onClick={() => deleteTodo(todo._id)}>
                Delete
              </Button>
            </ListGroup>
            )
          : "No Todays Yet"
          }
        </div>
      </main>
    </div>
  )
}

const mapStateToProps = state => ({
  userInfo: state.main
})

const mapDispatchToProps = {
  getTodos, createTodo, updateTodo, deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)