import axios from "axios";

const fetchUser = (url) => {
    const response =  axios.get(url);
     const data = response.then(response => response.data)
     return data
}

export default fetchUser