import { FC, useState } from "react";
import { Link } from "react-router-dom";
import {Menu,X} from 'lucide-react'

const Header : FC =  () => {
 const[hamburger,setHamburger] = useState<boolean>(false)
 const toggleHamburger = () => {
    setHamburger(!hamburger)
 }
    return (
        <>
        <nav className="sticky top-0 z-50 backdrop-blur-lg border-b" >
             <div className="container px-4 mx-auto relative text-sm " >
                        <div className="items-center flex justify-between " >
                                   <Link to='/' >
                                   <div className="flex items-center flex-shrink-0">
                                    <span className="tracking-tight text-xl" >
                                        EcoCare
                                    </span>
                                   </div>
                                   </Link>
                                   <div className="hidden lg:flex justify-center space-x-12 items-center " >
                                    <Link to='/' > Collaborators </Link>

                                   </div>
                                   <div className="lg:hidden md:flex  flex-col justify-end">
                                           <button onClick={toggleHamburger}>
                                                 {hamburger ? <Menu/> : <X/> }
                                           </button>
                                   </div>
                        </div>
                        // Hamburger Logic
             </div>
        </nav>
        </>
    )
}
export default Header