import React from 'react';
import Bouton from '../../components/atoms/cta-bouton/CTABouton';
import Card from '../../components/organisms/cards/Card';
import Bubble from '../../components/atoms/bubbles/Bubble';
import ClientReview from '../../components/atoms/client-review/ClientReview';
import ContactForm from '../../components/atoms/contact-form/ContactForm';

import IconQuizz from '../../assets/icons/global/quizz.svg';
import IconCommunaute from '../../assets/icons/global/communaute.svg';
import IconDecouverte from '../../assets/icons/global/decouverte.svg';
import IconSuivi from '../../assets/icons/global/suivi.svg';

import ReZeroImage from '../../assets/img/rezero.png';
import DemonSlayerImage from '../../assets/img/demon_slayer.png';
import SpyXImage from '../../assets/img/spyx.png';
import XImage from '../../assets/img/x.png';
import MyHeroImage from '../../assets/img/myhero.png';
import StarImage from '../../assets/img/star.png';
import QuizzImage from '../../assets/img/quizz-app.png';

import { ReactComponent as BackgroundSVG } from '../../assets/icons/global/backround.svg';
import Max from '../../assets/img/max.png';
import Lina from '../../assets/img/lina.png';
import LogoBW from '../../assets/logos/logo_VBW.png';


import './HomePage.css';


function HomePage() {

    return (
        <>
            {/* <Menu /> */}
                    
            <div className="container hero">                               
                <div className="bubble-container">
                    <div className="rezero bubble-effect">
                        <Bubble src={ReZeroImage} size={"medium"}/>
                    </div>

                    <div className="demon_slayer bubble-effect">
                        <Bubble src={DemonSlayerImage} size={"large"}/>
                    </div>
                    <div className="spyx bubble-effect">
                        <Bubble src={SpyXImage} size={"large"}/>
                    </div>
                    <div className="x bubble-effect">
                        <Bubble src={XImage} size={"medium"}/>
                    </div>
                    <div className="myhero bubble-effect">
                        <Bubble src={MyHeroImage} size={"small"}/>
                    </div>
                </div>
                <div className="container">
                    <div className="title-container">
                        <h1 className="title">Break Anime</h1>
                        <p >Ne perds plus de temps à chercher quoi regarder,
                        <br />laisse l'application te proposer des animés
                        <br />adaptés à tes goûts.</p>
                    </div>
                    <div className="button-container">
                    <Bouton name="Télécharger" onClick={() => console.log('Bouton cliqué')} />
                </div>
                </div>
            </div>
            
            <div className="scroll-container">
                <p className="scroll-text">Scroll</p>
                <svg className="scroll-arrow" width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.49996 6.00075L0.256958 1.75775L1.67196 0.34375L4.49996 3.17275L7.32796 0.34375L8.74296 1.75775L4.49996 6.00075Z" fill="#808080"/>
                </svg>
            </div>            
            <div className="universe-container">
                <h2 >L'univers</h2>
                <p >Dans l'univers complexe de l'anime, 
                <br />Break Anime simplifie la découverte en proposant une approche 
                <br /><span style={{color: '#F2A007'}}>Rapide, amusante et adaptée</span> à chaque utilisateur.</p>
                <div className="card-container">
                    <Card 
                        icon={IconQuizz} 
                        title="Quizz" 
                        text={<>Trouvez des animes qui<br />vous correspondent</>} 
                        className="card"
                    />
                    <Card 
                        icon={IconSuivi} 
                        title="Suivi Facile" 
                        text={<>Gardez une trace de tout<br />ce que vous regardez</>} 
                        className="card"
                    />
                    <Card 
                        icon={IconCommunaute} 
                        title="Communaute" 
                        text={<>Laissez des commentaires,<br />notez vos animes préférées</>} 
                        className="card"
                    />
                    <Card 
                        icon={IconDecouverte} 
                        title="Decouverte" 
                        text={<>Une bibliothèque d'anime,<br />constamment mise à jour</>} 
                        className="card"
                    />
                </div>
            </div>

            <div className="problematic-container">
                <div className="problematic">
                    <h2>PROBLEMATIQUE</h2>
                    <p>La quête pour trouver le prochain chef-d'œuvre peut souvent sembler être un défi de taille. Les amateurs d'anime sont confrontés à une myriade de choix sur les plateformes de streaming, mais la sélection du titre parfait peut s'avérer être un <strong>parcours semé d'embûches.</strong></p>
                </div>
                <div className="solution">
                    <h2>SOLUTION</h2>
                    <img src={StarImage} alt="Icone Quizz" className='little-star'/>
                    <img src={StarImage} alt="Icone Quizz" className='big-star'/>
                    <p>
                    Répondez à un quizz rapide pour définir vos préférences. Break Anime génère alors une sélection personnalisée d'animes correspondant à vos envies, économisant ainsi temps et frustration.
                    </p>
                </div>
            </div>

            <div className="quizz-container">
                <div className='quizz-content'>
                    <h2>Quizz</h2>
                    <p>
                        Répondez à quelques questions, et découvrez des recommandations personnalisées d'anime qui correspondent parfaitement à vos goûts.<strong><br/>C'est rapide, amusant et vous permettra de trouver votre prochaine série préférée en un rien de temps !</strong>
                    </p>
                </div>
                <div className='quizz-img'>
                    <img src={QuizzImage} alt="Icone Quizz" className='quizz-img'/>
                </div>
            </div>
            <div className='easy'>
                <div class="custom-shape-divider-top-1716114785">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className='easy-content'>
                    <div className='easy-image'>
                        <img src={QuizzImage} alt="Icone Quizz" className='quizz-img'/>
                    </div>
                    <div className='easy-text'>
                        <h2>Suivi facile</h2>
                        <p>
                            Gardez une liste organisée de vos séries en cours, terminées et à voir, avec la possibilité de noter et de laisser des commentaires sur chaque épisode. <br/>
                            Suivez votre progression, ne manquez aucun épisode, et partagez vos impressions. <br/>
                            <strong>Simplifiez votre expérience de visionnage dès maintenant !</strong>
                        </p>
                    </div>
                    
                </div>   
                <div class="custom-shape-divider-bottom-1716115317">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                    </svg>
                </div>     
            </div>
            <div className='client'>
                <ClientReview 
                    imageSrc={Lina} 
                    altText="Icone Quizz" 
                    reviewText="Break Anime a transformé ma façon de découvrir de nouveaux anime. Grâce au quizz, je trouve rapidement des recommandations personnalisées qui correspondent parfaitement à mes envies. Une application incontournable pour tous les fans d'anime !" 
                    reviewer="Lina, 24 ans" 
                />      
                <ClientReview 
                    imageSrc={Max} 
                    altText="Icone Quizz" 
                    reviewText="Break Anime a transformé ma façon de découvrir de nouveaux anime. Grâce au quizz, je trouve rapidement des recommandations personnalisées qui correspondent parfaitement à mes envies. Une application incontournable pour tous les fans d'anime !" 
                    reviewer="Maxime, 32 ans" 
                />                            
            </div>
            <div className='contact'>
                <div className='right-group-star'>
                    <img src={StarImage} alt="Icone Quizz" className='rgs-1'/>
                    <img src={StarImage} alt="Icone Quizz" className='rgs-2'/>
                    <img src={StarImage} alt="Icone Quizz" className='rgs-3'/>
                </div>
                
                <ContactForm />

                <div className='left-group-star'>
                    <img src={StarImage} alt="Icone Quizz" className='lgs-1'/>
                    <img src={StarImage} alt="Icone Quizz" className='lgs-2'/>
                    <img src={StarImage} alt="Icone Quizz" className='lgs-3'/>
                </div>                
            </div>
            <footer>
                <div className='footer-logo'>
                    <img src={LogoBW} alt="Icone Quizz" className='logo'/>
                </div>
                <div className='footer-col-1'>
                    <h5>Entreprise</h5>
                    <li>Contact</li>
                    <li>Confidentialité</li>
                    <li>CGU</li>
                </div>
                <div className='footer-col-2'>
                    <h5>Découvrir</h5>
                    <li>L’univers</li>
                    <li>Contexte</li>
                    <li>Les plus</li>
                    <li>Témoignage</li>
                </div>
            </footer>
        </>
    );
}

export default HomePage;