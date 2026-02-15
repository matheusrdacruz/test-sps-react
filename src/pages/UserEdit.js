import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Container, Box, Typography, Button, MenuItem } from "@mui/material";
import userService from "../services/UserService";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "../components/Toast";

function EditUser() {

  const navigate = useNavigate();
  const { showToast } = useToast();

  const [user, setUser] = useState({id: 0, name: "", email: "", type: "", password: ""});
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { userId } =  useParams()

  useEffect(() => {
    userService.get(userId).then((user) => {
      setUser(user);
    }).catch((error) => {
      console.error(error);
      showToast(error.error, "error");
    });
  }, [userId]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setButtonDisabled(true);
        await userService.update(user.id, user).then(() => {
          showToast("Usuário atualizado com sucesso!", "success");
          navigate("/users");
        });
      } catch (error) { 
        console.error(error);
        showToast(error.error, "error");
      } finally {
        setButtonDisabled(false);
      }
    };

    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };

  return (
    <Container maxWidth="md">
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
        <Typography variant="h5" component="h1">
          Editar Usuário
        </Typography>

        <TextField
          label="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          select
          label="Type"
          name="type"
          value={user.type}
          onChange={handleChange}
          fullWidth
          required
        >
          {/* TODO: Se for um enum, adicionar os valores */}
          <MenuItem value="admin">Admin</MenuItem>
        </TextField>

        <TextField
          label="Email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          fullWidth
          required
        />

        <Box sx={{ display: "flex", padding: "16px", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Button
            disabled={buttonDisabled}
            type="button"
            variant="contained"
            color="error"
            size="large"
            onClick={() => navigate("/users")}
          >
            Cancelar
          </Button>
          <Button
            disabled={buttonDisabled}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            >
            Salvar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default EditUser;
