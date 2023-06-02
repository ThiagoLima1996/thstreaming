import React, { useEffect, useState } from 'react';
import ApiFilm from './ApiFilm.js';


function App() {

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
    <div className="App">
      
    </div>
  );
}

export default App;
