import axios from "axios";

class UserService {
  async list() {
    const users = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return users.data;
  }

  async get(id) {
    const user = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return user.data;
  }

  async create(data) {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/users`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }

  async delete(id) {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }

  async update(id, data) {
    await axios.put(`${process.env.REACT_APP_SERVER_URL}/users/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }
}

const userService = new UserService();

export default userService;
