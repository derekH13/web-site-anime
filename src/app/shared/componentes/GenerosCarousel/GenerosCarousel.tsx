import './GenerosCarousel.css'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import CardHorizontal from '../CardHorizontal/CardHorizontal'
import { Util } from '../../../Util/Util'
import CardPol from '../CardPol/CardPol'

// interface
import { dadosBuscados, generos } from '../../../Interface/Interface'

// objeto
import { objetoPopular } from '../../../data/objetosUtil'
import Card from '../Card/Card'
import { log } from 'console'



// slick carousel

type paramCaroucel = {
    tipo: string
    genero: generos
}


function GenerosCarousel({tipo, genero}: paramCaroucel){

    //inicia o state com um objeto pronto
    const [dadosJapao, setDadosJapao] = useState<dadosBuscados[]>(objetoPopular)
    const carregou = useRef(true)


    const carouselId = useRef(`carousel-${Math.random().toString(36).substr(2, 9)}`).current;

//ccaregar a pagina ja faz a requisição dos generos

useEffect(() => {
    Util.requisicaoGenero(tipo, genero, 12).then((data) => {

        setDadosJapao(data)
        carregou.current = true
    })
}, [genero, tipo])





    return(


<div id={carouselId} className="relative container-carousel" data-carousel="static">
     <h1 className='title-carousel'>{genero}</h1> <br />

{
    (carregou.current?  
    
        <div id={`carouselExample${carouselId}`} className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
                <div className="carousel-cardHorizontal">
                
                <Card  data={dadosJapao[0]}/>
                <Card data={dadosJapao[1]}/>

                    <span className="descktop">
                        <Card data={dadosJapao[2]}/>
                    </span>

                    <span className="descktop">
                        <Card data={dadosJapao[3]}/>
                    </span>
                </div>

          </div>

          <div className="carousel-item">
            <div className="carousel-cardHorizontal">
            
                    <Card  data={dadosJapao[4]}/>
                    <Card data={dadosJapao[5]}/>

                    <span className="descktop">
                        <Card data={dadosJapao[6]}/>
                    </span>
        
                    <span className="descktop">
                        <Card data={dadosJapao[7]}/>
                    </span>
                
                </div>
          </div>

          <div className="carousel-item">
            
          <div className="carousel-cardHorizontal">
                <Card  data={dadosJapao[8]}/>
                <Card data={dadosJapao[9]}/>

                <span className="descktop">
                    <Card data={dadosJapao[10]}/>
                </span>

                <span className="descktop">
                    <Card data={dadosJapao[11]}/>
                </span>
          </div>

          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample${carouselId}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon next-color" aria-hidden="true"></span>
          <span className="visually-hidden"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample${carouselId}`} data-bs-slide="next">
          <span className="carousel-control-next-icon " aria-hidden="true"></span>
          <span className="visually-hidden next-color"></span>
        </button>
      </div>
    
        : 
        
        (<h1>carregando ...</h1>)

    )
}

</div> 
)
}

export default GenerosCarousel