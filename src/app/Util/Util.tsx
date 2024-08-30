import React from "react"
import { topJapao } from "../Interface/Interface"
import { dadosBuscados, Genre, generos } from "../Interface/Interface"
import { objetoPopular } from "../data/objetosUtil"


      
      interface Anime {
        title: string;
        genres: Genre[];
        duration: string;
        episodes: number;
      }
      
      interface ApiResponse {
        data: dadosBuscados[];
      }






export class Util{


//requisição id do anime
static async requisicao(tipo: string, name: string, num: number){
        const Response = await fetch(`https://api.jikan.moe/v4/${tipo}?q=${name}&sfw`)

        const result = await Response.json()
        const dados: dadosBuscados[] = result.data

        const data = dados.slice(0,num)

        return data
}



//requisição por tipo de serie
static async requisicaoTop( genero: topJapao, num: number){
        const Response = await fetch(`https://api.jikan.moe/v4/top/${genero}`)

        const x = await Response.json()
        const dados: dadosBuscados[] = x.data

        //devolve so a quantidade pedida
        const result = dados.slice(0,num)
        
        return result

}

// Função para requisitar animes filtrados por gênero

}