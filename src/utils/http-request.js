import axios from "axios";
let uri = 'https://ticket-server-five.vercel.app/ticket'; // general

// if (process.env.REACT_APP_ENVIRONMENT == 'development') {
//     uri = 'http://localhost:7000' // local
// } else if (process.env.REACT_APP_ENVIRONMENT == 'staging') {
//     uri = 'https://ticket-server-five.vercel.app/ticket'; // local
// } else if (process.env.REACT_APP_ENVIRONMENT == 'production') {
//     uri = 'https://ticket-server-five.vercel.app/ticket';// local
// } else {
    // const uri = 'http://localhost:7100/ticket' 
// }
console.log(uri);
const Axios = axios.create({ baseURL: uri });


export const BaseURL = uri;
export default Axios;