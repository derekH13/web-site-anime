import React, { FormEvent, useEffect, useState } from "react";
import './Pesquisa.css'
import NavBar from "../../shared/componentes/NavBar/NavBar";
import { Util } from "../../Util/Util";
import { motion } from "framer-motion";


import { dadosBuscados } from "../../Interface/Interface";
import { objetoPopular } from "../../data/objetosUtil";
import Card from "../../shared/componentes/Card/Card";


export function Pesquisa(){

    const [pesquisa, setPesquisa] = useState('')
    const [resultP, setResultP] = useState<dadosBuscados[]>(objetoPopular)
    const [erroPesquisa, setErroPesquisa] = useState(false)

    function buscar(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        Util.requisicao('anime', pesquisa, 20).then((data) => {
            setResultP(data)

            if(data.length < 1){
                setErroPesquisa(true)            
        
                setTimeout(() => {
                setErroPesquisa(false)  
                }, 4900)
                
            }
        }) 
    }


    //pesquisa no inicio para aparecer cards
    useEffect(() => {
        Util.requisicao('anime',pesquisa, 20).then((data) => {
            setResultP(data)             
        }) 
    }, [])

    



    return(
        <div className="container-pesquisa">

            <NavBar />

            {
                    (erroPesquisa)? <div className="alert alert-danger alert-erro" role="alert">
                    ⚠️ Nome não encontado, Tente Novamente!
                    <p></p>
                    </div> : ''
                }


            <div className="fundo-pesquisa">
                <img src="/assets/japao/fundo.png" alt="" />
            </div>

             <div className="interface-pesquisa">

  

                <div className="container-input">
                <form 
                onSubmit={(e) => buscar(e)}
                action="" 
                className="form-pesquisa">
                    <input type="text" 
            
                    placeholder="Procure por um anime, por exemplo Naruto" 
                    className="pesquisa"
                    onChange={(e) => setPesquisa(e.target.value)}
                    />

                    <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="submit" 
                    className="btn-pesquisar"
                    >
                    Pesquisar
                    </motion.button>
                </form>
                </div>
                
                <motion.div
                initial={{y: 600, opacity: .5 }}
                animate={{y: 0, opacity: 1 }}
                transition={{duration: .9}} 
                className="container-result"
                >
                    <div className="grid">

                    {
                        resultP.map((item, index) => <Card key={index} data={item} />)
                    }

                    </div>
                </motion.div>


             </div>
        </div>
    )
}

