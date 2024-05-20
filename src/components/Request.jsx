import React from "react"
import Card from "./Card"

const Request = ({postDisplay, produtos, user}) => {
    return (
        <div className="flex flex-col justify-start items-center gap-5 p-5 pt-0 w-full lg:w-10/12 min-h-screen relative">
            <div className="flex justify-between items-center w-full lg:10/12 h-12 bg-white rounded-lg shadow pl-5">
                <span>
                    Histórico de envios
                </span>
                <button onClick={() => postDisplay()} className="w-16 border-0 outline-0 text-blue-900 hover:scale-105">
                    Voltar
                </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 justify-center items-center gap-5 rounded-lg w-full h-auto">
                {
                    produtos.map(trade => (
                        <Card produto={trade} user={user} type={''} />
                    ))
                }
            </div>
            <div className="flex justify-center items-center w-10 h-10 rounded-full cursor-pointer hover:scale-105 bg-green-600 text-white absolute -right-10 top-1">
                <span>CSV</span>
            </div>
        </div>
    )
}

export default Request