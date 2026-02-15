import {
  Box,
  Button, 
  Typography,
  Container
} from "@mui/material";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TableComponent from "../components/TableComponent";
import { useNavigate } from "react-router-dom";
import userService from "../services/UserService";


const Users = () => {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {

    async function loadUsers() {
      const users = await userService.list();
      setUsers(users);
    }

    loadUsers();
  }, []);


  function openEdit(user) {
    navigate(`/users/${user.id}`);
  }

  async function deleteUser(id) {
    if (window.confirm("Remover usuário?")) {
      try {
        await userService.delete(id);
        setUsers(users.filter(u => u.id !== id));
      } catch (error) {
        window.alert(error.message);
        //console.error(error);
      }
    }
  }

  const columns = [
    { field: "name", headerName: "Nome", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "type", headerName: "Tipo", flex: 1 },
    { field: "type", headerName: "Editar", flex: 1 },
    { field: "type", headerName: "Remover", flex: 1 },

  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", padding: "16px", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h5">Usuários</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<AddIcon />}
          onClick={() => navigate('/users/new')}>
          Novo Usuário
        </Button>
      </Box>
      <TableComponent columns={columns} rows={users} editUser={openEdit} deleteUser={deleteUser} />
    </Container>
  );
}


export default Users;