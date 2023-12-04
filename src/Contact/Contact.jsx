import React from 'react'
import { addDataToCollection } from '../CommonJs/db';
import './Contact.css'

const Contact = () => {

    const enregistrer = (event) => {
        //stopper le raffraichissement (preventDefault)
        event.preventDefault();

        // recuperations des champs du formulaire
        const { name, email, numero, question } = event.target;

        const data = {

            //prenom de la base de donnés , prenom du formulaire
            Nom: name.value,
            Email: email.value,
            Numero: numero.value,
            Question: question.value,

        }
        addDataToCollection('contact', data);

        // Réinitialisation du formulaire après l'envoi des données
        event.target.reset();

        alert('Votre message a bien été envoyé!');
    }


    return (
        <div>
            {/* SECTION CONTACT ABOUT */}
            <div className="contact bg-black" id="Contact">
                <div className="contact-text">
                    <h4>Si vous avez un message,<br/> ou souhaiter prendre un rendez-<br/>vous,
                        vous pourrez me le <br/>transmettre a travers ce formulaire <br/>afin que je puissent vous recontactez.</h4>
                    <div className="list">
                        <li><a href="#">contactjordanfarouil@gmail.com</a></li>
                        <li><a href="#">Mes réseaux professionels <br/>sont les suivants :</a></li>
                    </div>
                    <div className="contact-icons">
                        <a href=""><i className='bx bxl-linkedin' ></i></a>
                        <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>

                <div className="contact-form">
                    <div>
                        <h1 className='text-white text-3xl mb-5 text-center'>FORMULAIRE DE CONTACT</h1>
                    </div>
                    <form onSubmit={enregistrer}>

                        <input type="name" name="name" placeholder="Prénom" required></input>
                        <input type="email" name="email" placeholder=" Adresse e-mail" required></input>
                        <input type="number" name="numero" placeholder="Numéro de téléphone" required></input>
                        <textarea name="question" id="" cols="35" rows="10" placeholder="Avez-vous une question ?"></textarea>
                        <input type="submit" value="Envoyer" className="button"></input>
                    </form>

                </div>
            </div>
            {/* FIN SECTION CONTACT ABOUT  */}


        </div>
    )
}

export default Contact