import api from "./api";

class UserService {
  async list() {
    try {
      const users = await api.get(`/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      return users.data;
    } catch (error) {
      throw error.response?.data || {
        message: "Erro ao comunicar com o servidor."
      }
    }
  }

  async get(id) {
    try {
      const user = await api.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      return user.data;
    } catch (error) {
      throw error.response?.data || {
        message: "Erro ao comunicar com o servidor."
      }
    }
  }

  async create(data) {
    try {
      const response = await api.post(`/users`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      return response.data
    } catch (error) {
      throw error.response?.data || {
        message: "Erro ao comunicar com o servidor."
      }
    }
  }

  async delete(id) {
    try {
      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      throw error.response?.data || {
        message: "Erro ao comunicar com o servidor."
      }
    }
  }

  async update(id, data) {
    try {
      await api.put(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      throw error.response?.data || {
        message: "Erro ao comunicar com o servidor."
      }
    }
  }
}

const userService = new UserService();

export default userService;
