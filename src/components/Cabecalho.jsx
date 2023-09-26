import { Link } from "react-router-dom"
import styles from "./Cabecalho.module.css"

export default function cabecalho() {
  return (
    <>
      <header className={styles.cabecalho}>
        <h1>Vite + React</h1>
        <img src="/public/img/produtos.png" alt="Carrinho de compras" />

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
