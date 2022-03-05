import axios from 'axios'

const instance =  axios.create({ 
  baseURL: 'http://localhost:5001/clone-7c185/us-central1/api' // The API (Cloud Function) URL 
})

export default instance
