import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//BLOCO DE ROTAS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import EditarProdutos from './routes/EditarProdutos.jsx';
import Erro404 from './routes/Erro404.jsx';

const router = createBrowserRouter([
  {path: "/", element:<App/>, 
    children:[
      {path: "/", element:<Home/>},
      {path: "/", element:<Produtos/>}, 
      {path: "/", element:<EditarProdutos/>}, 
      {path: "/", element:<Erro404/>},  
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
