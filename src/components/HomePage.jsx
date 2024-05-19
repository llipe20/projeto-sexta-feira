import React from "react";
import Header from "./Header";

const Home = ({user}) => {
    return (
        <div className="flex flex-col justify-start items-center w-full min-h-screen">
            <Header nome={user.nome} foto={user.foto} />
        </div>
    )
}

export default Home