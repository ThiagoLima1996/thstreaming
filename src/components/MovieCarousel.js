import React from 'react'

function MovieCarousel({ title, items }) {

    return (
        <div>
            <h2 className=' text-3xl font-semibold dark:text-white'>{title}</h2>

            <div className='flex gap-2'>

                {items.results.length > 0 && items.results.map((item, key) => {
                    console.log(item);
                    return (
                        <div className=' relative'>
                            <img
                                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                alt={item.original_title
                                }
                                className=' cursor-pointer'
                                key={key}
                            />
                            <p className=' absolute bg-yellow-500 -bottom-1 -right-1 rounded-full w-6 h-6 flex items-center justify-center text-xs'>
                                {item.vote_average.toFixed(1)}
                            </p>
                        </div>


                    )
                })}
            </div>
        </div>
    )
}

export default MovieCarousel