import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Header = ({nome, foto, getRequest}) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-auto bg-blue-950 p-5 pt-3 text-white">
            <div className="flex justify-between items-center w-full lg:w-10/12 h-auto">
                <span className="text-lg lg:text-2xl">HUB do MKT</span>
                <div className="flex justify-center items-center gap-3">
                    <span>
                        {nome}
                    </span>
                    <span className="w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-white overflow-hidden">
                        <img src={foto} alt="user" className="w-full"/>
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-center w-full lg:w-10/12">
                <img src="Logo Discar-08.png" alt="logo-discar" className="w-16 lg:w-28 bg-white rounded-lg lg:p-1" />
                <div className="flex jsutify-center items-center w-1/2 bg-white rounded-lg overflow-hidden shadow">
                    <button className="flex justify-center items-center pl-2">
                        <FiSearch className="text-black" />
                    </button>
                    <input type="text" className="w-1/2 h-8 lg:h-10 rounded-lg pl-2 text-black outline-0 border-0" placeholder="Pesquisar" />
                </div>
                <button onClick={() => getRequest()} className="flex justify-center items-center gap-2 border-0 outline-0 p-2 h-12 hover:scale-110">
                    <span>
                        Envios
                    </span>
                    <FaShoppingCart />
                </button>
            </div>
        </div>
    )
}

export default Header