import { useEffect, useState } from "react";
import { Professor } from "../../@types/Professor";
import { ApiService } from "../../services/ApiServices";

export function useIndex() {
  const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [professorSelecionado, setProfessorSelecionado] = useState<Professor | null>(null);
  const [mensagem,setMensagem] = useState('');

  useEffect(() => {
    ApiService.get("/professores").then((response) => {
      setListaProfessores(response.data);
    });
  }, []);

  useEffect(() => {limpaFormulario()},[professorSelecionado])

  function marcarAula() {
    if (professorSelecionado !== null) {
      if (validaAula()) {
        ApiService.post("/professores/" + professorSelecionado.id + "/aulas", {
          nome,
          email,
        })
          .then(() => {
            setProfessorSelecionado(null)
            setMensagem('Cadastrado com sucesso')
          })
          .catch((error) => {
            setMensagem(error.response?.data.message);
          });
      } else {
        setMensagem("Cheque se os dados foram preenchidos corretamente");
      }
    }
  }

  function validaAula() {
    return nome.length > 0 && email.length > 0;
  }

  function limpaFormulario(){
    setNome('')
    setEmail('')
  }

  return {
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
  };
}
