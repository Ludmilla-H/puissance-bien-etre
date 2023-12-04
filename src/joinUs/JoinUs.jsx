import React from 'react'
import photogroupe1 from "/src/images/photogroupe1.jpg";
import photogroupe2 from "/src/images/photogroupe2.jpg";
import rectangle23 from "/src/images/rectangle23.png";
import rectangle24 from "/src/images/rectangle24.png";
import rectangle26 from "/src/images/rectangle26.png";


const JoinUs = () => {
    return (

        <>
            <div class="py-16 max-h-full bg-white">

                <div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
                    <h1 class="text-4xl text-black font-bold md:text-5xl text-center mb-10">Rejoignez-nous</h1>

                    <div class="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
                        <div class="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                            <p class="text-lg text-center text-black">Bienvenue dans l’équipe de la Puissance Bien-Être, une communauté engagée en collaboration avec Herbalife. Nous sommes fiers de vous offrir une approche complète du bien-être, alliant professionnalisme, qualité des produits Herbalife, et intégration harmonieuse du sport, du bien-être et de la nutrition.

                                En tant que membre de notre équipe, vous bénéficierez d’un accompagnement individualisé, mettant l’accent sur la réalisation de vos objectifs de santé et de bien-être. Nous croyons fermement que l’équilibre entre l’activité physique, le bien-être mental et la nutrition équilibrée est la clé d’un mode de vie épanouissant.

                                Rejoignez-nous pour faire partie d’une aventure où le bien-être devient une priorité quotidienne. Nous sommes là pour soutenir votre parcours vers une vie plus saine et plus énergique. En intégrant la Puissance Bien-Être, vous embrasserez une vision holistique du bien-être, tout en ayant accès à des produits Herbalife de qualité pour vous accompagner dans cette démarche. Joignez-vous à nous et contribuez à façonner un futur où chacun peut atteindre ses objectifs de santé et de bien-être de manière durable.</p>
                        </div>
                        <div class="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                            <div class="col-span-4 row-span-2">
                                <img src={photogroupe1} class="w-full h-full object-cover object-top rounded-xl" width="640" height="427" alt="shoe" />
                            </div>
                            <div class="col-span-5 h-56 row-span-3 ml-8">
                                <img src={photogroupe2} className="w-full h-full object-cover object-top rounded-xl" width="640" height="427" alt="shoes" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinUs