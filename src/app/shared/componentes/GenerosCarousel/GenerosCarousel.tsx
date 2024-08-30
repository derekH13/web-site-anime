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
    Util.requisicaoGenero(tipo, genero, 13).then((data) => {

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
            
                    <Card  data={dadosJapao[6]}/>
                    <Card data={dadosJapao[7]}/>

                    <span className="descktop">
                        <Card data={dadosJapao[4]}/>
                    </span>
        
                    <span className="descktop">
                        <Card data={dadosJapao[5]}/>
                    </span>
                
                </div>
          </div>

          <div className="carousel-item">
            
          <div className="carousel-cardHorizontal">
                <Card  data={dadosJapao[12]}/>
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
          <span className=" next-color" aria-hidden="true">
            <svg className=" color-arrow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke=" red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 8-4 4 4 4"/>
            </svg>

          </span>
          <span className="visually-hidden"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample${carouselId}`} data-bs-slide="next">
          <span className=" " aria-hidden="true">
            <svg className=" color-arrow2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke=" red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
            </svg>

          </span>
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