import './Card.css';
import { dadosBuscados } from '../../../Interface/Interface';
import { motion } from 'framer-motion';

type paramCard = {
    data: {
        title: string;
        url: string;
        images: {
            jpg: {
                image_url: string;
            }
        }
    }
}

function Card({ data }: paramCard) {
    // Definindo valores padrão
    const imageUrl = data?.images?.jpg?.image_url || 'https://cdn.myanimelist.net/images/anime/1130/120002.jpg';
    const title = data?.title || 'Erro:  Recarregue a página';
    const url = data?.url || '#';

    return (
        <motion.div 
        initial={{scale: 0.8}}
        whileInView={{scale: 1}}
        transition={{duration: .4}}
        className="card"
        >
            <a className="link" href={url} target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} alt={title} />
                <h1 className="cardPol-text">{title}</h1>
            </a>
        </motion.div>
    );
}

export default Card;
