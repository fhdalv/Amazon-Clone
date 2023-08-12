import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-c1a98/us-central1/api' // The API (cloud function) URL
});

export default instance;