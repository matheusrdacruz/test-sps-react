import api from "./api";

class LoginService {

  async login(email, password) {
    try {
      const response = await api.post(`/auth/login`, { email, password });
      return response.data;
    } catch (error) {
      throw error.response?.data || {
        message: "Erro ao comunicar com o servidor."
      }
    }
  }
}

const loginService = new LoginService();

export default loginService;
