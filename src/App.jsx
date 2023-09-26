import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import { Outlet } from "react-router-dom";
import styles from "./App.module.css";

export default function App() {
  let listaLinks = [<li>Github</li>, <li>X</li>, <li>Reddit</li>];

  return (
    <>
      <div className="container">
        <Cabecalho />
        <Outlet />
        <Rodape listaProps={listaLinks} />
      </div>
    </>
  );
}
