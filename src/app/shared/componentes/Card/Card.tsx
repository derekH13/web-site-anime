import './Card.css';
import { dadosBuscados } from '../../../Interface/Interface';

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
    const title = data?.title || 'Erro ao carregar: tente Novamente';
    const url = data?.url || '#';

    return (
        <div className="card">
            <a className="link" href={url} target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} alt={title} />
                <h1 className="cardPol-text">{title}</h1>
            </a>
        </div>
    );
}

export default Card;
