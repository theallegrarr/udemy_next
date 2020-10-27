const validate = require('../middlewares/validate')
const router = require('express').Router()
require('dotenv').config()
const TodoSchema = require('../model/schemas/todo')

function routes(){
  router.post('/new', validate, (req, res) => {
    let todo=req.body

    const newTodo = new TodoSchema(todo)

    newTodo.save()
      .then(saved => {
        res.status(201).json({
          success: true,
          todo: {
            title: saved.title,
            email: saved.email,
            done: saved.done
          }
        })
      }).catch(error => res.status(500).json({ success: false, error: error }))
  })

  router.post('/my', validate, (req, res) => {
    let info=req.body

    TodoSchema.find({ email: info.email })
      .then(todo => {
        res.status(200).json({
          success: true,
          todos: todo
        })
      }).catch(error => res.status(500).json({ success: false, error: error }))
  })

  router.post('/update', validate, async (req, res) => {
    let info=req.body

    try {
      const todo = await TodoSchema.update({ 
          _id: info.id 
        },{
          $set: {
            title: info.title,
            done: info.done
          }
        })

        if(todo) {
          const todos = await TodoSchema.find({ email: info.email })
          res.status(200).json({
            success: true,
            todos: todos
          })
        }
    } catch(error){
      res.status(500).json({ success: false, error: error })
    }
  })

  router.post('/delete', validate, async (req, res) => {
    let info=req.body
    try {
      const todo = await TodoSchema.deleteOne({ 
          _id: info.id 
        })
      if(todo) {
        const todos = await TodoSchema.find({ email: info.email })
        res.status(200).json({
          success: true,
          todos: todos
        })
      }
    }catch(error){
      res.status(500).json({ success: false, error: error })
    }
  })

  return router;
}

module.exports = routes