import { useEffect } from 'react'
import BtnPaginas from '../../shared/componentes/BtnPaginas/BtnPaginas'
import Footer from '../../shared/componentes/Footer/Footer'
import GenerosCarousel from '../../shared/componentes/GenerosCarousel/GenerosCarousel'
import Ladding from '../../shared/componentes/Ladding/Ladding'
import NavBar from '../../shared/componentes/NavBar/NavBar'

import Populares from '../../shared/componentes/Populares/Populares'
import Provider from '../../shared/contexts/Provider'



        
import '../../style.css'
import './Dorama.css'


export function Dorama(){



    return(
                <Provider>
                    <div className='home'>
        
                        

                        <Ladding />
                        <NavBar />
        
                    <section className='conteudo-japao'>
                        <Populares />
        
                    <div className="alinhar-center">
                         <BtnPaginas />
                    </div>
                            
        
                    <div className="coluna-conteudo">
                        <GenerosCarousel tipo={'manga'} genero={'Action'} />
                        <GenerosCarousel tipo={'manga'} genero={'Drama'} />
                        <GenerosCarousel tipo={'manga'} genero={'Action'} />
                    </div>
                           
                        <Footer />
                        </section>
        
                        
                        
                    
                        
        
                    </div>
                    
                </Provider> 
            )
        
        }
