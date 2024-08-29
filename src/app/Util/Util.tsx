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

//https://api.jikan.moe/v4/anime?q=naruto&sfw

//requisição id do anime
static async requisicao(){
        const Response = await fetch(`https://api.jikan.moe/v4/anime/21`)

        const result = await Response.json()

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
static async requisicaoGenero(tipo: string, genreToFilter: generos, num: number): Promise<dadosBuscados[]> {
        const page = 3;  // Número total de páginas a serem requisitadas
        const limit = 25;  // Número de resultados por página
        let arrayResult: dadosBuscados[] = []; // Array para armazenar resultados
      
        for (let i = 1; i <= page; i++) { // Corrigido o operador de comparação
          try {
            const response = await fetch(`https://api.jikan.moe/v4/${tipo}?page=${i}&limit=${limit}`);
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const data: ApiResponse = await response.json(); // Tipar a resposta da API
            const animes: dadosBuscados[] = Array.isArray(data.data)? data.data : [] ;
      
            const filteredAnimes = animes.filter(anime =>
              anime.genres.some(genre => genre.name === genreToFilter)
            );
      
            arrayResult = arrayResult.concat(filteredAnimes); // Corrigido a concatenação
            console.log(arrayResult);
            

          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
        }
      
        // Filtrar e limitar os resultados
        const result = arrayResult.slice(0, num);
      
        console.log(result);
      
        return result; // Retornar os animes filtrados
      }
     
}