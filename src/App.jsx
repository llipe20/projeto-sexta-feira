import './App.css'
import Login from './components/LoginPage'
import Home from './components/HomePage'
import { useState, useEffect } from 'react'

function App() {
    const [isLogin, setIsLogin] = useState(false)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({})
    const [display, setDisplay] = useState(false)
    const [msg, setMsg] = useState('')

    const GetLogin = async (e) => {
        e.preventDefault()
        const req = await fetch('https://json-server-rho-brown.vercel.app/usuarios')
        const res = await req.json()
        const usuario = res.find(u => u.login === login)

        if(usuario !== undefined) {
          if(usuario.senha === password) {
            setIsLogin(true)
            setUser(usuario)
          } else {
            setMsg('Senha incorreta!')
            setDisplay(true)
            const relogio = setTimeout(() => {
                setDisplay(false)
                setMsg('')
                clearInterval(relogio)
            }, 2000)
            console.log('Senha errada')
          }
        } else {
            console.log('Usuario inexistente')
            setMsg('Usuário errado!')
            setDisplay(true)
            const relogio = setTimeout(() => {
                setDisplay(false)
                setMsg('')
                clearInterval(relogio)
            }, 2000)
        }
    }

    useEffect(() => {
        if (isLogin) {
          console.log('Usuário logado:', user)
        }
    }, [isLogin, user])

    const isUser = (value) => {
        setLogin(value)
    };

    const isPass = (value) => {
        setPassword(value)
    };

    return (
      <div className="flex justify-center items-center w-screen min-h-screen bg-gray-200">
          {
            !isLogin ? (
                <Login
                  password={password} login={login} setLogin={isUser} setPassword={isPass} GetLogin={GetLogin} display={display} msg={msg}
                />
            ) : (
                <Home user={user} display={display} msg={msg} />
            )
          }
      </div>
    )
}

export default App;
