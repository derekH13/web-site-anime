import React from "react";
import { motion, Variants } from "framer-motion";
import './Ladding.css'


function Ladding(){




    return(
        <div className="alinhar-btnPaginas">
            <div className="ladding-conteudo">
                <div className="fundo-ladding">
                    <img src="/assets/japao/ladding.png" alt="" />
                </div>

                <div className="garota-japao">

                <motion.img  
                initial={{x: 200, opacity: .5 }}
                animate={{x: 0, opacity: 1 }}
                transition={{duration: 1.1}}
                src="/assets/japao/garota.png" alt="" 
                />

                </div>
               

                <motion.img
                initial={{scale: 0.9, zIndex: -1, opacity: 0 }}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 1.1}}
                className="japao-text"
                src="/assets/japao/JAPÃO.png"
                alt="" 
                />

                <motion.div 
                initial={{x: -600, opacity: .0 }}
                animate={{x: 0, opacity: 1 }}
                transition={{duration: 1.1}}
                className="container-texto"
                >
                <p>Mergulhe no universo vibrante da cultura japonesa e descubra uma vasta coleção de séries e animações que cativam e inspiram! <span className="descktop"> Venha explorar o mundo dos animes e mangas, onde histórias envolventes e visuais deslumbrantes se encontram para criar uma experiência única e inesquecível.</span> </p>
                </motion.div>

               <a href="https://myanimelist.net/" target="_blank">         
                    <div 
 
                    className="btn-play">
                    
                        <div className="girar">
                            <img src="/assets/japao/Group.png" alt="" />
                        </div>
                    
                        <motion.div 
                        initial = {{ scale: 0.5, rotate: -360 }}
                        animate = {{ scale: 1, rotate: 0 }}
                        whileHover={{ scale: 0.9, transition: { duration: .3}}}
                        transition = {{ duration: 1.1}}
                        whileTap={{ scale: 0.9 }}

                        className="circulo"
                        >
                            <img className="triangulo" src="/assets/japao/Polygon 1.png" alt="" />
                        </motion.div>
                    </div>
                </a>


                <img className="vector-baixo" src="/assets/japao/Vector 5.png" alt="" />

            </div>
        </div>
    )
}

export default Ladding