import React from "react";
import { motion } from "framer-motion";
import './Ladding.css'


function Ladding(){
    return(
        <div>
            <div className="ladding-conteudo">
                <div className="fundo-ladding">
                    <img src="/assets/japao/ladding.png" alt="" />
                </div>

                <div className="garota-japao">
                <img  src="/assets/japao/garota.png" alt="" />
                </div>
               

                <img className="japao-text" src="/assets/japao/JAPÃO.png" alt="" />

                <div className="container-texto">
                <p>Mergulhe no universo vibrante da cultura japonesa e descubra uma vasta coleção de séries e animações que cativam e inspiram! Venha explorar o mundo dos animes e mangas, onde histórias envolventes e visuais deslumbrantes se encontram para criar uma experiência única e inesquecível.</p>
                </div>
                        
                <div className="btn-play">
                    <div className="girar">
                        <img src="/assets/japao/Group.png" alt="" />
                    </div>
                    
                    <div className="circulo">

                        <img className="triangulo" src="/assets/japao/Polygon 1.png" alt="" />
                    </div>
                </div>


                <img className="vector-baixo" src="/assets/japao/Vector 5.png" alt="" />

            </div>
        </div>
    )
}

export default Ladding