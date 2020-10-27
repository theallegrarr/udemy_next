import axios from 'axios';

export const request = axios.create({
  baseURL: process.env.API_ADDRESS,
  headers: {
    "Content-Type": "application/json"
  }
})

request.interceptors.request.use(function(config){
  const userData=JSON.parse(localStorage.getItem("user_info"))
  const token=userData ? userData.token : ""
  config.headers.Authorization = token

  return config;
})

// HEROKU or VERCEL should still have the below address
// I mean your mongoDB account server address
//MONGO_DB_URI=mongodb+srv://dbUser:dbPassword@cluster0.iserw.mongodb.net/Cluster0?retryWrites=true&w=majority
