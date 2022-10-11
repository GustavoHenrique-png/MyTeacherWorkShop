import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import type { NextPage } from "next";
import { Professor } from "../src/@types/Professor";
import Lista from "../src/components/Lista/Lista";
import { useIndex } from "../src/hooks/pages/useIndex";

const Home: NextPage = () => {
  const {
    listaProfessores,
    nome,
    setNome,
    email,
    setEmail,
    professorSelecionado,
    setProfessorSelecionado,
    marcarAula,
    mensagem,
    setMensagem,
  } = useIndex();

  return (
    <div>
      <Box sx={{ backgroundColor: "secondary.main" }}>
        <Lista
          professores={listaProfessores}
          onSelect={(professor) => setProfessorSelecionado(professor)}
        />
      </Box>
      <Dialog
        onClose={() => setProfessorSelecionado(null)}
        open={professorSelecionado !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Digite seu nome aqui"
              type="text"
              value={nome}
              fullWidth
              onChange={(e) => setNome(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Digite seu email aqui"
              type="email"
              value={email}
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{ mt: 5 }}>
          <Button onClick={() => setProfessorSelecionado(null)}>
            Cancelar
          </Button>
          <Button onClick={() => marcarAula()}>Marcar</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        onClose={() => setMensagem("")}
        autoHideDuration={2000}
        message={mensagem}
        open={mensagem.length > 0}
      />
    </div>
  );
};

export default Home;
