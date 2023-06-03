import React from 'react'

function MovieCarousel({ title, items }) {

    return (
        <div>
            <h2>{title}</h2>

            <div>

                {items.results.length > 0 && items.results.map((item, key) => {
                    console.log(item);
                    return (
                        <div>
                            <img
                                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                alt={item.original_name
                                }
                            />
                        </div>


                    )
                })}
            </div>
        </div>
    )
}

export default MovieCarousel