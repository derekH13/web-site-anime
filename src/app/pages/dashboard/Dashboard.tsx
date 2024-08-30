import { Link } from 'react-router-dom'
import Provider from '../../shared/contexts/Provider'
import { Util } from '../../Util/Util'
import { motion } from 'framer-motion'


import '../../style.css'
import './Dashboard.css'



// =============componentes
import Ladding from '../../shared/componentes/Ladding/Ladding'

import Populares from '../../shared/componentes/Populares/Populares'

import Footer from '../../shared/componentes/Footer/Footer'
import BtnPaginas from '../../shared/componentes/BtnPaginas/BtnPaginas'
import NavBar from '../../shared/componentes/NavBar/NavBar'
import GenerosCarousel from '../../shared/componentes/GenerosCarousel/GenerosCarousel'




//aqui é uma pagina
export const Dashboard = () => {



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
                <GenerosCarousel tipo={'anime'} genero={'Dragon'} />
                <GenerosCarousel tipo={'anime'} genero={'naruto'} />
                <GenerosCarousel tipo={'anime'} genero={'Drama'} />
            </div>
                   
                <Footer />
                </section>

                
                
            
                

            </div>
            
        </Provider> 
    )

}