import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";

const Home = ({user}) => {
    const [trades, setTrades] = useState([])

    useEffect(() => {
        getTrades()
    }, [user])

    const getTrades = async () => {
        try {
            const req = await fetch('https://json-server-rho-brown.vercel.app/estoque')
            const res = await req.json()
            setTrades(res)
            console.log(res)   
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    return (
        <div className="flex flex-col justify-start items-center gap-5 w-full min-h-screen">
            <Header nome={user.nome} foto={user.foto} />
            <Main produtos={trades} />
        </div>
    )
}

export default Home