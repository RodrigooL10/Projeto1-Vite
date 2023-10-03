import { useParams } from 'react-router-dom'

export default function EditarProdutos() {
 
  //Recuperando o parâmetro ID com o useParams();

    const {id} = useParams();

    document.title = "Editar Produtos " + id;
  
  return (
    <div>Editar Produtos</div>
  )
}
