
export type topJapao = 'anime' | 'manga' | 'people' | 'characters' | 'Reviews'

export type generos = 'Action' | 'Sci-Fi' | 'naruto' | 'Adventure' | 'Drama' | 'Dragon' | 'Horror' | 'Mystery' | 'Supernatural' 

export interface Genre {
    name: string;
  }
export interface dadosBuscados {
        title: string;
        genres: Genre[];
        url: string;
        images: {
            jpg: {
                image_url: string;
            }
        }
}




