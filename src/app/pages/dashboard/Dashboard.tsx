import { Link } from 'react-router-dom'
import Provider from '../../shared/contexts/Provider'
import { Util } from '../../Util/Util'
import { motion } from 'framer-motion'


import '../../style.css'
import './Dashboard.css'



// =============componentes
import Ladding from '../../shared/componentes/Ladding/Ladding'
import GenerosCarousel from '../../shared/componentes/GenerosCarousel/GenerosCarousel'
import Populares from '../../shared/componentes/Populares/Populares'
import Navegation from '../../shared/componentes/Navegation/Navegation'
import Footer from '../../shared/componentes/Footer/Footer'




//aqui é uma pagina
export const Dashboard = () => {



    return(
        <Provider>
            <div className='home'>

                
            <Navegation />
                <Ladding />
                

                <section className='conteudo-japao'>
                    <Populares />

                <div className="coluna-conteudo">
                    <GenerosCarousel genero={'Action'} />
                    <GenerosCarousel genero={'Drama'} />
                    <GenerosCarousel genero={'Action'} />


                </div>
                   
                <Footer />
                </section>

                
                
            
                

            </div>
            
        </Provider> 
    )

}