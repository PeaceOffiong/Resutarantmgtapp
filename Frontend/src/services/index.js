import axios from "axios";

const USER_URL = "http://localhost:3002/api/restaurants/users";

const updateUsers = (content) => {
  const response = axios.post(USER_URL, content);
    return response.then(response => response
  );
};

const fetchData = () => {
  const response = fetch(USER_URL);
  return response.then(response => response.json());
}

export default {
  updateUsers,
  fetchData,
};
