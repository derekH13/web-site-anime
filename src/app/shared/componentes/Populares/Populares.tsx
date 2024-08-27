import React, { useEffect, useState } from 'react';
import { Util } from '../../../Util/Util';
import CardPol from '../CardPol/CardPol';
import './Populares.css';

// types
import { topJapao, dadosBuscados } from '../../../Interface/Interface';

// objetosUtil
import { objetoPopular } from '../../../data/objetosUtil';

function Populares() {
    const [dadosTop, setDadosTop] = useState<dadosBuscados[]>(objetoPopular);

    useEffect(() => {
        Util.requisicaoTop('anime', 3).then((data) => {
            console.log(data);
            setDadosTop(data);
        });
    }, []);

    console.log(dadosTop);

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