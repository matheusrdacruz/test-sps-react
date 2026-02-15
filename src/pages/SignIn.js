import { useState } from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import loginService from "../services/LoginService";
import { useToast } from "../components/Toast";

function SignIn() {

  const navigate = useNavigate();
  const { showToast } = useToast();   

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setButtonDisabled(true);
      await loginService.login(formData.email, formData.password).then((res) => {
        localStorage.setItem("token", res.token);
        navigate("/");
      })
      .catch((error) => {
        showToast(error.error, "error");
      });

    } catch (error) {
      showToast(error.error, "error");
    } finally {
      setButtonDisabled(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2
        }}
      >
        <Typography variant="h5" align="center" component="h1">
          Login
        </Typography>

        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          required
        />

        <Button
          disabled={buttonDisabled}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Logar
        </Button>
      </Box>
    </Container>
  );
}

export default SignIn;
