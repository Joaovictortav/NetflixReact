import React from 'react'
import './featureMovie.css'

export default ({item}) => {
    console.log(item)

    let firstDate = item.first_air_date.split('-')
    let genres = []
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>

            <div className='featured--vertical'>
                <div className='featured--horizoltal'>
                    <div className='featured--name'>
                        {item.original_name}
                    </div>
                    <div className='featurad--info'>
                        <div className='featurad--points'>
                            {item.vote_average} pontos
                        </div>
                        <div className='featurad--year'>
                            {firstDate[0]}
                        </div>
                        <div className='featurad--seasons'>
                                {item.number_of_seasons} temporada{item.number_of_seasons > 1 ? 's' : ''}
                        </div>
                    </div>
                    <div className='featura--decription'>
                        {item.overview}
                    </div>
                    <div className='feature--buttons'>
                        <a href="#" className='button--play'>► Assistir</a>
                        <a href="#" className='button--myList'>+ Minha Lista</a>
                    </div>
                    <div className='feature--genres'>
                        <strong>Géneros:</strong> {genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>

        
    )
}