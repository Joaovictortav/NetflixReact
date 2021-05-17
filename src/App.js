import React, { useCallback, useEffect, useState } from 'react'
import Tmbd from './Tmbd.js'
import './App.css'
import MovieRow from './Componets/movieRow.js'
import FeatureMovie from './Componets/featureMovie.js'
import Header from './Componets/header.js'

export default () => {

  const [movieList, setMovieList] = useState([])
  const [featureData, setFeatureData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmbd.getHomeList()
      setMovieList(list)

      let listNetflix = list.filter(elemento => elemento.slug === 'originals')
      let randomMovie = Math.floor(Math.random()*(listNetflix[0].items.results.length - 1))
      let destaque = listNetflix[0].items.results[randomMovie]
      let data = await Tmbd.getMovieInfo(destaque.id, 'tv')
      setFeatureData(data)
    }

    loadAll();
  }, [])

  useEffect(() => {
    const scrollListner = () => {
        if (window.scrollY > 10) {
          setBlackHeader(true)
        } else {
          setBlackHeader(false)
        }
    }
    window.addEventListener('scroll', scrollListner)
    return () => {
      window.removeEventListener('scroll', scrollListner)
    }    
  }, [])

  return (
    <div className='page'>
      <section>
        <Header blackHeader={blackHeader}/>
      </section>
      <section className='destaque'>
        {featureData && 
          <FeatureMovie item={featureData}/>
        }
      </section>
      <section className='list'>
        {movieList.map( (elemento, key) => {
          return (
            <MovieRow key={key} title={elemento.title} items={elemento.items}/>
          )
        })}
      </section>
    </div>
  )
}