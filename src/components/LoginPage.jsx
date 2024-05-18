import React from "react"
import Messeger from "./Msg"

const Login = ({setLogin, setPassword, login, password, GetLogin, color}) => {
    return (
        <div className="flex justify-center items-center w-full min-h-screen bg-blue-950">
            <div className="flex flex-col justify-evenly items-center w-1/2 lg:w-1/3 h-96 bg-gray-100 rounded-lg shadow">
                <img src="Logo Discar-08.png" alt="logo-discar" className="w-40" />
                <form onSubmit={GetLogin} className="flex flex-col justify-center items-center gap-5 w-full">
                    <input 
                        type="text" 
                        className="w-3/4 h-12 pl-3 border-0 outline-0 rounded-lg bg-white shadow" 
                        placeholder="Insira seu usuário"
                        onChange={(e) => setLogin(e.target.value)}
                        value={login}     
                    />
                    <input 
                        type="text" 
                        className="w-3/4 h-12 pl-3 border-0 outline-0 rounded-lg bg-white shadow" 
                        placeholder="Insira sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}     
                    />
                    <button type="submit" className="w-2/4 h-12 rounded-lg bg-blue-950 text-white scale-95 hover:scale-100">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login