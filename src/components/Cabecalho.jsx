import { Link } from "react-router-dom";

export default function cabecalho() {
  return (
    <>
      <header>
        <h1>Vite + React</h1>

        <nav>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/produtos'>Produtos</Link></li>
            <li><Link to='/editar/produtos/1'>Produto - 1</Link></li>
            <li><Link to='/editar/produtos/2'>Produto - 2</Link></li>
            <li><Link to='/editar/produtos/3'>Produto - 3</Link></li>

          </ul>
        </nav>
      </header>
    </>
    )
}
