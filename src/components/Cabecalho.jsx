import { Link } from "react-router-dom"
import styles from "./Cabecalho.module.css"

export default function cabecalho() {
  return (
    <>
      <header className={styles.cabecalho}>
        <img src="/public/img/produtos.png" alt="Carrinho de compras" />

        <nav>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/produtos'>PRODUTOS</Link></li>

          </ul>
        </nav>
      </header>
    </>
    )
}
