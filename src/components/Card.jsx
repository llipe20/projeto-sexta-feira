import React from "react";

const Card = ({produto}) => {
    return (
        <div className="flex flex-col justify-start items-start gap-2 w-full h-60 bg-white rounded-lg p-3 shadow">
            <div className="flex justify-start items-start w-full h-auto">
                <span className="text-base lg:text-lg font-bold">
                    {produto.produto}
                </span>
            </div>
            <div className="flex justify-between items-center gap-3 w-full h-44">
                <div className="flex justify-center items-center w-48 h-full bg-gray-200 rounded-lg">
                    <img src={produto.foto} alt={produto.id} className="w-44" />
                </div>
                <div className="flex flex-col justify-start items-start gap-2 w-48 h-44">
                    <div className="flex justify-between items-center w-full">
                        <span>
                            Código
                        </span>
                        <span className="font-bold">
                            {produto.id}
                        </span>
                    </div>
                    <div className="flex justify-between items-center w-full text-sm">
                        <span>Estoque</span>
                        <span className="font-bold">
                            {produto.quantidade}
                        </span>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <span className="pl-1 pr-1 bg-green-600 text-white rounded-lg shadow text-xs">
                            Disponivel
                        </span>
                        <span className="w-full text-end font-bold text-lg">
                            {`R$ ${produto.valor}`}
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full text-white scale-90">
                        <button className="p-1 w-8 border-none outline-none bg-blue-950 rounded-lg hover:scale-105">
                            -
                        </button>
                        <span className="text-black font-bold">0</span>
                        <button className="p-1 w-8 border-none outline-none bg-blue-950 rounded-lg hover:scale-105">
                            +
                        </button>
                    </div>
                    <form className="flex justify-betweem items-center gap-2 w-full">
                        <input type="number" className="text-sm outline-0 border-0 w-1/2 h-8 rounded-lg bg-gray-100 pl-2 shadow mt-1" placeholder="Cód PDV" />
                        <button type="submit" className="w-16 h-8 p-1 bg-blue-950 text-white rounded-lg hover:scale-105">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Card