import axios from 'axios'; 
require ('dotenv').config();
const API_KEY = process.env.REACT_APP_UNSPLASH;

export default axios.create({
  baseURL: 'https://api.unsplash.com/', 
  headers: {
    Authorization: API_KEY
  }
});