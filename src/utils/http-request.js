import axios from "axios";

// let uri = 'https://vastovers-server.vercel.app/ticket';

// let uri = import.meta.env.VITE_BASE_URL
let uri = 'https://ticket-server-five.vercel.app/ticket'
console.log(uri);
const Axios = axios.create({ baseURL: uri });


export const BaseURL = uri;
export default Axios;