import React from "react";
import './CardPol.css'
import { dadosBuscados } from "../../../Interface/Interface";


export interface parametro {
    title: string;
    url: string;
    images: {
        jpg: {
            image_url: string;
        }
    }
}

function CardPol({ data }: { data: parametro }) {


    return (
        <div className="cardPol">
            <a className="link" href={data.url} target="_blank" rel="noopener noreferrer">
                <img src={data.images.jpg.image_url} alt={data.title} />
                <h1 className="cardPol-text">{data.title}</h1>
            </a>
        </div>
    );
}

export default CardPol;