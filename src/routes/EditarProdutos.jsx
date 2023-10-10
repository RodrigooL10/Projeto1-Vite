import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function EditarProdutos() {
 
  //Recuperando o parâmetro ID com o useParams();

    const {id} = useParams()
    document.title = "Editar Produtos " + id

    const [produto, setProduto] = useState({
      id:id,
      nome:'',
      desc:'',
      preco:''
    })

    useEffect(() => {
      fetch(`http://localhost:5000/produtos/${id}`)
        .then((response)=> response.json())
        .then((response)=> setProduto(response))
        .catch(error => console.log(error))
    }, [id])
  
  return (
    <div>
      <h1>EDITAR PRODUTOS</h1>

      <form>
        <fieldset>
          <legend>Produto Selecionado</legend>
          <div>
            <label htmlFor="idNome">Nome</label>
            <input type="text" name="nome" id="idNome" placeholder="Digite o nome do produto" value={produto.nome} onChange={(e)=> setProduto(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="idDesc">Descricao</label>
            <input type="text" name="desc" id="idDesc" placeholder='Digite a descrição do produto' value={produto.desc} onChange={(e)=> setProduto(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="idPreco">Valor</label>
            <input type="number" name="preco" id="idPreco" placeholder='Digite o preço do produto' value={produto.preco} onChange={(e)=> setProduto(e.target.value)}/>
          </div>
          <div>
            <button>EDITAR</button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}