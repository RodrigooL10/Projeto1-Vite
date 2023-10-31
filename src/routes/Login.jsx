import { useState } from "react"

export default function Login(){

    //Vai receber os dados do Formulário!!
    //É um OBJETO
    const [usuario, setUsuario] = useState({
        email: "",
        password:""
    })

    const handleChange = async (e)=>{
        //Destructuring
        const{name,value} = e.target;
        
        
        //Preenchendo o objeto atavés do useState
        //Utilizando o evengo OnChange e Operador SPREAD(...)

        await setUsuario({...usuario,[name]:value})

    }

    const handleSubmit = async (e) =>{
        e.preventDefault();


        try {
            const response = await fetch("http://localhost:5000/usuarios")
            if (response.ok){
                console.log(response.json)
            }
        }

        catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <h1>Login - Informações do Usuário</h1>

            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Dados de Acesso: </legend>
                        <div>
                            <label htmlFor="idEmail">Email:</label>
                            <input type="email" name="email" id="idEmail" value={usuario.email} placeholder="Digite seu email." onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="idSenha">Senha:</label>
                            <input type="senha" name="senha" id="idSenha" value={usuario.senha} placeholder="Digite sua senha."/>
                        </div>
                        <div>
                            <button>LOGIN</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}