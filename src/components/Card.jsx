import React, { useEffect, useState } from "react";

const Card = ({ produto, user, type }) => {
    const [time, setTime] = useState(0)
    const [status, setStatus] = useState('')
    const [status2, setStatus2] = useState('')
    const [qtd, setQtd] = useState(0)
    const [pdv, setPdv] = useState('')
    const [display, setDisplay] = useState(false)
    const [msg, setMsg] = useState('')

    useEffect(() => {
        if(type === 'origin') {
           let calculatedQtd;
            switch(user.id) {
                case 1:
                    calculatedQtd = Math.round(produto.quantidade * 0.32)
                    break
                case 2:
                    calculatedQtd = Math.round(produto.quantidade * 0.60)
                    break
                case 3:
                    calculatedQtd = Math.round(produto.quantidade * 0.28)
                    break
                default:
                    calculatedQtd = produto.quantidade
                    break
            }

            setQtd(calculatedQtd)

            if (calculatedQtd <= 0) {
                setStatus("Indisponível")
            } else {
                setStatus("Disponível")
            } 
        } else {
            setStatus2('Solicitado')
        }
    }, [user, produto, type])

    const Mahoraga = async (e) => {
        e.preventDefault()

        if(pdv === '' || time <= 0) {
            setDisplay(true)
            setMsg('Preencha os campos corretamente')
            const relogio = setTimeout(() => {
                setDisplay(false)
                setMsg('')
                clearInterval(relogio)
            }, 2000)
        } else if (status === 'Indisponivel') {
            setDisplay(true)
            const relogio = setTimeout(() => {
                setDisplay(false)
                setMsg('')
                clearInterval(relogio)
            }, 2000)
            setMsg('Saldo indisponivel')
        } else {
            const today = new Date()
            const day = String(today.getDate()).padStart(2, '0')
            const month = String(today.getMonth() + 1).padStart(2, '0')
            const year = today.getFullYear()
            const date = `${day}/${month}/${year}`
            const data = {
                pdv : pdv,
                produto : produto.id,
                qtd : time,
                user : user.id,
                date : date
            }

            console.log(data)
            setTime(0)
            setPdv('')
            setDisplay(true)
            setMsg("Enviada com sucesso!")
            const relogio = setTimeout(() => {
                setDisplay(false)
                setMsg('')
                clearInterval(relogio)
            }, 2000)
        }
    }

    return (
        <div className="flex flex-col justify-start items-start gap-2 w-full h-64 bg-white rounded-lg p-3 shadow relative">
            <div className={`rounded-lg ${display === true ? "absolute" : "hidden"} top-10 left-10 w-auto p-2 ${ msg === "Enviada com sucesso!" ? "bg-green-600" : "bg-red-600"} text-white`}>
                {msg}
            </div>
            <div className="flex justify-start items-start w-full h-auto">
                <span className="text-base lg:text-lg font-bold p-1">
                    {produto.produto}
                </span>
            </div>
            <div className="flex justify-between items-center gap-3 w-full h-44">
                <div className="flex justify-center items-center w-48 h-full bg-gray-200 rounded-lg">
                    <img src={produto.foto} alt={produto.id} className="w-44" />
                </div>
                <div className="flex flex-col justify-start items-start gap-2 w-48 h-44">
                    {
                        type === 'origin' ? (
                            <div className="flex justify-between items-center w-full text-sm">
                                <span>
                                    Código
                                </span>
                                <span className="font-bold">
                                    {produto.id}
                                </span>
                            </div> 
                        ) : (
                            <div className="flex justify-between items-center w-full text-sm">
                                <span>
                                    Data de pedido
                                </span>
                                <span className="font-bold">
                                    20 de maio
                                </span>
                            </div>
                        )
                    }
                    {
                        type === 'origin' ? (
                            <div className="flex justify-between items-center w-full text-sm">
                                <span>Estoque</span>
                                <span className="w-12 text-start font-bold">
                                    {qtd}
                                </span>
                            </div>
                        ) : (
                            <div className="flex justify-between items-center w-full text-sm">
                                <span>Data de envio</span>
                                <span className="font-bold">
                                    22 de maio
                                </span>
                            </div>
                        )
                    }
                    <div className="flex justify-between items-center w-full">
                        {
                            type === 'origin' ? (
                                <span className={`pl-1 pr-1 ${status === "Disponível" ? "bg-green-600" : "bg-red-600"} text-white rounded-lg shadow text-xs`}>
                                    {status}
                                </span>
                            ) : (
                                <span className={`pl-1 pr-1 ${status2 === "Entregue" ? "bg-green-600" : status2 === "Cancelado" ? "bg-red-600" : "bg-gray-400"} text-white rounded-lg shadow text-xs`}>
                                    {status2}
                                </span>
                            )
                        }
                        {
                            type === 'origin' ? (
                                <span className="w-full text-end font-bold text-lg">
                                    {`R$ ${produto.valor}`}
                                </span>
                            ) : (
                                <span className="h-10 w-full text-end font-bold text-lg">
                                    
                                </span>
                            )
                        }
                    </div>
                    {
                        type === 'origin' ? (
                            <div className="flex justify-start items-center gap-2 w-full text-white scale-90">
                                <button
                                    onClick={() => setTime(prevTime => Math.max(prevTime - 1, 0))}
                                    className="p-1 w-8 border-none outline-none bg-blue-950 rounded-lg hover:scale-105"
                                >
                                    -
                                </button>
                                <span className="w-8 text-center text-black font-bold">
                                    {time}
                                </span>
                                <button
                                    onClick={() => setTime(prevTime => prevTime + 1)}
                                    className="p-1 w-8 border-none outline-none bg-blue-950 rounded-lg hover:scale-105"
                                >
                                    +
                                </button>
                            </div>
                        ) : (
                            <div className="flex justify-start items-center gap-2 w-full text-black scale-90">
                                <button
                                    className="p-1 w-8 border-none outline-none bg-gray-200 rounded-lg"
                                >
                                    -
                                </button>
                                <span className="w-8 text-center text-black font-bold">
                                    {time}
                                </span>
                                <button
                                    className="p-1 w-8 border-none outline-none bg-gray-200 rounded-lg"
                                >
                                    +
                                </button>
                            </div>
                        )
                    }
                    <form onSubmit={(e) => Mahoraga(e)} className="flex justify-between items-center gap-2 w-full">
                        {
                            type === 'origin' ? (
                                <input 
                                    disabled={type === 'origin'} 
                                    value={pdv} 
                                    onChange={(e) => setPdv(e.target.value) } 
                                    type="number" 
                                    className="text-sm outline-0 border-0 w-1/2 h-8 rounded-lg bg-gray-100 pl-2 shadow mt-1" 
                                    placeholder="Cód PDV" 
                                />
                            ) : (
                                <input 
                                    disabled
                                    value={pdv}  
                                    type="number" 
                                    className="text-sm outline-0 border-0 w-1/2 h-8 rounded-lg bg-gray-100 pl-2 shadow mt-1" 
                                     
                                />
                            )
                        }
                        {
                            type === 'origin' ? (
                                <button type="submit" className="w-16 h-8 p-1 bg-blue-950 text-white rounded-lg hover:scale-105">
                                    Enviar
                                </button>
                            ) : (
                                <span className={`text-center cursor-pointer w-16 h-8 p-1 ${ status2 === 'Solicitado' ? "bg-gray-400" : "bg-red-950"} text-white rounded-lg hover:scale-105`}>
                                    Excluir
                                </span>
                            )
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Card;
