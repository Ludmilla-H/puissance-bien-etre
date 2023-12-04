import React from 'react'
import monLogo from "/src/images/logo.jpg";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Accueil</a></li>
                        <li><a>Quis-suis-je ?</a></li>
                        <li><a>Le MLM, c'est quoi ?</a></li>
                        <li><a>Rejoignez l'équipe !</a></li>
                    </ul>
                </div>
                <img src={monLogo} alt="Mon Logo" className="btn btn-ghost text-xl"/>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-bold ">
                    <li><a>Accueil</a></li>
                    <li><a>Quis-suis-je ?</a></li>
                    <li><a>Le MLM, c'est quoi ?</a></li>
                    <li><a>Rejoignez l'équipe !</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-yellow-300 text-lg rounded-full font-bold">Contactez-moi</a>
            </div>
        </div>
    )
}

export default Navbar