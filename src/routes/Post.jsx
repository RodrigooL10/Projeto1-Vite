import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostarProdutos() {
  const navigate = useNavigate();

  const [produto, setProduto] = useState({
    id: null, // Adiciona um campo para o ID
    nome: '',
    descricao: '',
    preco: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Gere um ID único (por exemplo, usando a função Date)
    const id = maxId + 1;

    // Crie o objeto para postagem com o ID gerado
    const post_data = {
      id,
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco,
    };

    fetch(`http://localhost:5000/produtos`, { // Remove o '/${id}' para criar um novo produto
      method: "POST",
      body: JSON.stringify(post_data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate('/postar/produtos'); 
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>ADICIONAR PRODUTOS</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Produto Selecionado</legend>
          <div>
            <label htmlFor="idNome">Nome</label>
            <input
              type="text"
              name="nome"
              id="idNome"
              placeholder="Digite o nome do produto"
              value={produto.nome}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idDesc">Descrição</label>
            <input
                type="text"
                name="descricao" // Corrija o name para "descricao"
                id="idDesc"
                placeholder="Digite a descrição do produto"
                value={produto.descricao}
                onChange={handleChange}
            />
            </div>
          <div>
            <label htmlFor="idPreco">Valor</label>
            <input
              type="number"
              name="preco"
              id="idPreco"
              placeholder="Digite o preço do produto"
              value={produto.preco}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" id="btnAdicionar">
              ADICIONAR
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
