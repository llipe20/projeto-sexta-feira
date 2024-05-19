import React from "react";
import Header from "./Header";
import Main from "./Main";

const Home = ({user}) => {
    return (
        <div className="flex flex-col justify-start items-center gap-5 w-full min-h-screen">
            <Header nome={user.nome} foto={user.foto} />
            <Main />
        </div>
    )
}

export default Home