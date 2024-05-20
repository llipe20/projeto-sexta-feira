import React, { useEffect, useState } from "react";
import Header from "./Header";
import Request from "./Request";
import Main from "./Main";

const Home = ({user}) => {
    const [trades, setTrades] = useState([])
    const [isRequest, setIsRequest] = useState(false)

    useEffect(() => {
        getTrades()
    }, [user])

    const getTrades = async () => {
        try {
            const req = await fetch('https://json-server-rho-brown.vercel.app/estoque')
            const res = await req.json()
            setTrades(res)   
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    const getRequest = () => {
        setIsRequest(true)
    }

    const postDisplay = () => {
        setIsRequest(false)
    }

    return (
        <div className="flex flex-col justify-start items-center gap-5 w-full min-h-screen">
            <Header nome={user.nome} foto={user.foto} getRequest={getRequest} />
            {
                isRequest === true ? (
                    <Request produtos={trades} user={user} postDisplay={postDisplay} />
                ) : (
                    <Main produtos={trades} user={user} />
                )
            }
        </div>
    )
}

export default Home