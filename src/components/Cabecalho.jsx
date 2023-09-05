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
            <li><Link to='/editar/produtos/:id'>Editar Produtos</Link></li>
          </ul>
        </nav>
      </header>
    </>
    )
}
