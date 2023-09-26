import React from 'react'
import { useParams } from 'react-router-dom';

export default function ExcluirProdutos() {

    //Recuperando o parâmetro ID com o HOOK useParams();

    const {id} = useParams();

    document.title = "EXCLUIR PRODUTOS " + id;

  return (
    <div>Excluir Produto</div>
  )
}
