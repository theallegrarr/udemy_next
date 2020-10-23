const mongoose = require("mongoose")
const { Schema } = mongoose;

const TodoSchema = new Schema(
  {
    title: {
      type: String,
      minlength: 3,
      unique: false
    },
    done: {
      type: Boolean,
      unique: false
    },
    email: {
      type: String,
      minlength: 3,
      unique: false
    }
  }
)

const Todo = mongoose.model("todo", TodoSchema);
module.exports = Todo;