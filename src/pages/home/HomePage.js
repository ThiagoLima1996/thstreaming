import React, { useEffect, useState} from 'react'
import ApiFilm from '../../ApiFilm'
import MovieCarousel from '../../components/MovieCarousel';
import DarkMode from '../../components/DarkMode';


function HomePage() {

    const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // GET da lista completa de filmes
      let list = await ApiFilm.getHomeList();
      setMovieList(list)
    }

    loadAll();

  }, []);


  return (
    <div>
      <DarkMode />
      <section>
        {movieList.map((item, key) => {
          return (
            <MovieCarousel
              key={key}
              title={item.title}
              items={item.items}
            />
          )
        })}
      </section>
    </div>
  );
}

export default HomePage;