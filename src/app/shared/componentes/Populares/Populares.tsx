import React, { useEffect, useState } from 'react';
import { Util } from '../../../Util/Util';
import CardPol from '../CardPol/CardPol';
import './Populares.css';

// types
import { topJapao, dadosBuscados } from '../../../Interface/Interface';

// objetosUtil
import { objetoP } from '../../../data/objetosUtil';

function Populares() {
    const [dadosTop, setDadosTop] = useState<dadosBuscados[]>(objetoP);

    useEffect(() => {
        Util.requisicaoTop('anime', 3).then((data) => {
            setDadosTop(data);
        });
    }, []);


    return (
        <div className='container-populares'>
            <h1>Populares</h1>
            <div className='align-cardPol'>
                {
                    dadosTop.map((info, index) => (
                        <CardPol key={index} data={info} />
                    ))
                }
            </div>
        </div>
    );
}

export default Populares;