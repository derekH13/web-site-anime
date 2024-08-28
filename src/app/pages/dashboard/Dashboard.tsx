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




//aqui é uma pagina
export const Dashboard = () => {



    return(
        <Provider>
            <div className='home'>

                <Ladding />

                <section className='conteudo-japao'>
                    <Populares />

                <div className="coluna-conteudo">
                    <GenerosCarousel genero={'Action'} />
                    <GenerosCarousel genero={'Drama'} />
                    <GenerosCarousel genero={'Action'} />


                </div>
                   
                </section>

                
                

                

            </div>
        </Provider> 
    )

}