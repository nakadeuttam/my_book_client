import axios from "axios";
const api =axios.create({baseURL:'https://my-book-backend-i0z0.onrender.com/auth'});
export const googleAuth = (code)=>api.get(`/google?code=${code}`);