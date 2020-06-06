import { combineReducers } from "redux"
import main from "./main"

const rootReducer = combineReducers({
  main: main
})

export default rootReducer;