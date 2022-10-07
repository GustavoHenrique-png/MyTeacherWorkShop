import { Professor } from "../../@types/Professor";
import { Button } from "@mui/material";
import {
  Informacoes,
  Valor,
  Descricao,
  Nome,
  Foto,
  ItemLista,
  ListaStyled,
  ListaVazia
} from "./Lista.style";

interface ListaProps {
  professores: Professor[];
}

const Lista = (props: ListaProps) => {
  return (
    <div>
      {props.professores.length > 0 ? (
        <ListaStyled>
          {props.professores.map((professor) => (
            <ItemLista key={professor.id}>
              <Foto src={professor.foto}></Foto>
              <Informacoes>
                <Nome>{professor.nome}</Nome>
                <Valor>
                  {professor.valorHora.toLocaleString('pt-br',{minimumFractionDigits:2,style:'currency', currency:'BRL'})} por
                  hora
                </Valor>
                <Descricao>
                  {professor.descricao}
                </Descricao>
                <Button
                  sx={{ width: "70%" }}
                >
                  Marcar Aula com {professor.nome}
                </Button>
              </Informacoes>
            </ItemLista>
          ))}
        </ListaStyled>
      ) : (
        <ListaVazia>Nenhum item encontrado</ListaVazia>
      )}
    </div>
  );
};

export default Lista;
