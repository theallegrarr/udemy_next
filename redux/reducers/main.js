import * as t from "../types";

const main = (state = {
    name: "guest",
    loading: false,
    error: null
}, action) => {
  switch(action.type){
    case t.SET_NAME:
      return { 
        ...state,
        name: action.payload
      };
    case t.REGISTER:
      return { 
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        age: action.payload.age,
        token: action.payload.token,
        loading: false,
        error: null
      };
    case t.LOADING:
      return { 
        ...state,
        loading: action.payload
      };
    case t.SIGN_OUT:
      return {
        name: "guest",
        loading: false
      }
    case t.ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return {...state};
  }
};

export default main;