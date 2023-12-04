import React from 'react'
import mlm from "/src/images/MLM.jpeg";
import component10 from "/src/images/component10.png";



const Mlm = () => {
    return (


            <div className=" min-h-screen bg-black ">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-5xl font-bold text-white mb-20 mt-28">Le MLM</h1>
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={mlm} className="max-w-xs rounded-lg shadow-2xl " />
                                <div className='text-right '>
                                <p className="py-6 text-white text-xl">Le sport est bien plus qu'une simple activité physique,<br /> c'est un mode de vie, une passion qui <br /> transcende les frontières et unit les individus à travers le monde.
                                </p>
                                <p className="py-6 text-white text-xl">Le sport est bien plus qu'une simple activité physique,<br /> c'est un mode de vie, une passion qui <br /> transcende les frontières et unit les individus à travers le monde.
                                </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    )
}

export default Mlm