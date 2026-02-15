import axios from "axios";

class LoginService {

  async login(email, password) {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, { email, password });
    return response.data;
  }

}

const loginService = new LoginService();

export default loginService;
