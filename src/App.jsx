import React from 'react'
import AccueilPart from './Accueil/AccueilPart'
import Mlm from './Accueil/MLM/Mlm'
import Contact from './Contact/Contact'
import JoinUs from './joinUs/JoinUs'
import Navbar from './Navbar/Navbar'
import QuiSuisJe from './Qui-suis-je/QuiSuisJe'

const App = () => {
  return (
    <>
      <Navbar />
      <AccueilPart />
      <QuiSuisJe/>
      <Mlm/>
      <JoinUs/>
      <Contact/>
    </>
  )
}

export default App