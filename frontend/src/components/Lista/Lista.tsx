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
  ListaVazia,
} from "./Lista.style";
import { useState } from "react";
import { FomatadorServices } from "../../services/FormatadorService";

interface ListaProps {
  professores: Professor[],
  onSelect: (professor:Professor) => void
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
                  {FomatadorServices.valorMonetario(professor.valorHora)} por
                  hora
                </Valor>
                <Descricao>
                  {FomatadorServices.limitarTexto(professor.descricao, 200)}
                </Descricao>
                <Button onClick={()=>props.onSelect(professor)} sx={{ width: "70%" }}>
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
