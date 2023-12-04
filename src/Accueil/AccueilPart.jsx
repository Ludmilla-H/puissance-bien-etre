import React from 'react'
import imageAccueil from "/src/images/image1.png";


const AccueilPart = () => {
    return (
        <div className="hero min-h-screen bg-black">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={imageAccueil} alt="Accueil" className="max-w-s rounded-lg" />
                <div className='text-center'>
                    <h1 className="text-5xl font-bold text-white py-8 text-center">Le sport, a <br/>quoi ça sert ? </h1>
                    <p className="py-6 mb-10 text-white text-center text-xl">Le sport est bien plus qu'u ne simple activité physique, c'est un mode de vie, <br /> une passion qui transcende les frontières
                        et unit les individus à travers le monde.
                    </p>
                    <a className="btn bg-yellow-300 rounded-full font-bold border-hidden text-1xl">En savoir plus ?</a>
                    
                </div>
            </div>
        </div>
    )
}

export default AccueilPart