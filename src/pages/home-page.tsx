import { FC } from "react";
import Header from "../components/header";
import Chat from "../components/chat-ai";
import LatestArticle from "../components/latest-article";


const Home : FC = () => {

    return (
        <>
        <div className="h-screen bg-gradient-to-r from-black to-black" >
       <Header/>
     
                   <Chat/>
                   <LatestArticle/>
     
        </div>
        </>
    )
}
export default Home