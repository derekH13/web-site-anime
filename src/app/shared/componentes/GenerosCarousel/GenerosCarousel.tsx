import './GenerosCarousel.css'
import React, { useContext, useEffect, useRef, useState } from 'react'
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

//ccaregar a pagina ja faz a requisição dos generos
useEffect(() => {
    Util.requisicaoGenero(tipo, genero, 18).then((data) => {
        
        setDadosJapao(data)
        carregou.current = true
    })
}, [genero])








    return(


<div id="indicators-carousel" className="relative container-carousel" data-carousel="static">
     <h1 className='title-carousel'>{genero}</h1> <br />

{
    (carregou.current?    <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
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
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
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
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
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
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <div className="carousel-cardHorizontal">
         
        <Card  data={dadosJapao[12]}/>
        <Card data={dadosJapao[13]}/>

            <span className="descktop">
                <Card data={dadosJapao[14]}/>
            </span>

            <span className="descktop">
                <Card data={dadosJapao[15]}/>
            </span>
            </div>
        </div>
    </div>
        : <h1>carregando ...</h1>
)



}

 
    
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full btn-passar dark:bg-gray-800/30 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none ">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full btn-passar dark:bg-gray-800/30 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

    )
}

export default GenerosCarousel