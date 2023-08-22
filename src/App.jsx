import React from 'react';
import Cabecalho from "./components/Cabecalho";

export default function App() {
  return (
    <>
      <div className='container'>

        <Cabecalho/>
        
        <section>
          <p><a href="/">Home page</a></p>
          <button onClick={()=> alert("Hello World!")}>Click me!</button>
        </section>

        <footer>
          <p>&copy;2021, Vite.js and React.</p>
        </footer>
      </div>
    </>
  )
}