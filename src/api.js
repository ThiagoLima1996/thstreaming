const API_KET = '35e1dd6a8ebf255939a23f5873e96102'

const API_URL = 'https://api.themoviedb.org/3'

/*
- originais da plataforma
- recomendados (trending)
- mais votados (top rated)
- acão = 28
- aventura
- animação 
- comedia
- documentarios
- drama
- infantis
- curtas
- terror
- suspense
- ficção cientifica
- romance
- series
- filme
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_URL}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da plataforma',
                items: await basicFetch(
                    `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KET}`
                )/*?with_network=213 para chamar somente o catalogo da netflix */
            },
            {
                slug: 'trending',
                title: 'Recomendado para você assistir',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KET}`)
            },
            {
                slug: 'toprated',
                title: 'Mais populares',
                items: await basicFetch(`movie/top_rated?language=pt-BR&api_key=${API_KET}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KET}`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KET}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KET}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KET}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KET}`)
            }
        ];
    }
}