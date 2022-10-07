import { Box } from "@mui/material";
import type { NextPage } from "next";
import { Professor } from "../src/@types/Professor";
import Lista from "../src/components/Lista/Lista";

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Professor1",
      foto: "https://avatars.githubusercontent.com/u/82185385?v=4",
      descricao: "Mto gay mesmo olha lá",
      valorHora: 100,
    },
    {
      id: 2,
      nome: "Professor2",
      foto: "https://avatars.githubusercontent.com/u/82185385?v=4",
      descricao: "Mto gay mesmo olha lá",
      valorHora: 200,
    }
  ];

  return (
    <Box sx={{ backgroundColor: "secondary.main" }}>
      <Lista professores={professores}/>
    </Box>
  );
};

export default Home;
