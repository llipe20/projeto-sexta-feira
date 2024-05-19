import React from "react";
import Card from "./Card";

const Main = ({produtos}) => {
    return (
        <div className="flex flex-col justify-start items-center gap-5 p-5 pt-0 w-full lg:w-10/12 min-h-screen">
            <div className="flex justify-start items-center w-full lg:10/12 h-12 bg-white rounded-lg shadow pl-5">
                <span>Materiais disponiveis</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 justify-center items-center gap-5 rounded-lg w-full h-auto">
                {
                    produtos.map(trade => (
                        <Card produto={trade} />
                    ))
                }
            </div>
        </div>
    )
}

export default Main