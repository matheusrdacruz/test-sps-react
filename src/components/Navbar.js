import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography onClick={() => navigate("/")} variant="h6" sx={{ flexGrow: 1 }} >
          Test SPS
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>

          <Button color="inherit" onClick={() => navigate("/users")}>
            Users
          </Button>

          <Button color="error" variant="contained" onClick={handleLogout}>
            Sair
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    </Box>
  );
}
