import React from 'react'
import Card from '../Card/Card'
import './QuiSuisJe.css'
import HeartEmoji from '../images/heartemoji.png'
import Glasses from '../images/glasses.png'
import Humble from '../images/humble.png'
// import Sport from '../../images/sport.png'

const QuiSuisJe = () => {
  return (
<div className="services" id="Services">
    {/* Left side */}
    <div className="awesome">
        <span>Qui</span>
        <span>Suis-Je ?</span>
    </div>

    {/* right side */}
    <div className="cards">

        {/* first card */}
        <div style={{left : "30rem" , top: "-5rem"}}>
            <Card
            emoji = {HeartEmoji}
            heading = {"Puissance bien-être, c’est quoi ?"}
            detail = {"Chez 'Nom de votre entreprise/organisation', nous croyons fermement en l'importance du sport. Nous nous engageons à soutenir les sportifs. "}
            />
        </div>

        {/* second card */}
        <div style={{top : "4rem" , left : "5rem"}}>
            <Card
            emoji = {Glasses}
            heading = {"Mon Activité !"}
            detail = {"Mais le sport va au-delà de ses bienfaits physiques. Il enseigne des valeurs essentielles telles que la discipline, la persévérance, le travail d'équipe et le fair-play."}
            />
        </div>

        {/* third card */}
        <div style={{top : "19rem" , left : "25rem"}}>
            <Card 
            emoji = {Humble}
            heading = {"Herbalife"}
            detail = {"Notre gamme de [produits/services] est conçue pour accompagner les passionnés de sport à tous les niveaux"}
            />
        </div>
        <div className="blur s-blu2" style={{background : 'var(--purple)'}}></div>

    </div>
</div>  
)
}

export default QuiSuisJe