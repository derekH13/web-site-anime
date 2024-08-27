import React from "react"
import { topJapao } from "../Interface/Interface"
import { dadosBuscados } from "../Interface/Interface"




export class Util{

//https://api.jikan.moe/v4/anime?q=naruto&sfw

static async requisicao(){
        const Response = await fetch(`https://api.jikan.moe/v4/anime/21`)

        const result = await Response.json()

}

static async requisicaoTop( genero: topJapao, num: number){
        const Response = await fetch(`https://api.jikan.moe/v4/top/${genero}`)

        const x = await Response.json()
        const dados: dadosBuscados[] = x.data

        //devolve so a quantidade pedida
        const result = dados.slice(0,num)
        
        return result

}
}