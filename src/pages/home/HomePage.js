import React, { useEffect, useState} from 'react'
import ApiFilm from '../../ApiFilm'
import DarkMode from '../../components/DarkMode';
import MovieRow from '../../components/MovieRow';


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
            <MovieRow
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