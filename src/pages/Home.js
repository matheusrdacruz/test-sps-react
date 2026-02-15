import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";

function Home() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" align="center" component="h1">
        Bem-vindo ao Test SPS
      </Typography>
    </Container>
  );
}

export default Home;
