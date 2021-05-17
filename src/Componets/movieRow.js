import React from 'react'
import './movieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { useState } from 'react'

export default ({title, items}) => {

    const [moverLista, setMoverLista] = useState(0)

    const movieNext = () => {
        let mover = moverLista - 300
        if (mover < (9 - items.results.length) * 150) {
            mover = ((9 - items.results.length) * 150) - 70
        }
        setMoverLista(mover)
    }
    const movieBefore = () => {
        let mover = moverLista + 300
        if (mover > 0) {
            mover = 0
        }
        setMoverLista(mover)
    }
    return (
        <div className='movieRow'>
            <h2>{title}</h2>
            <div className='movieRow--left' onClick={movieBefore}>
                <NavigateBeforeIcon style={{fonteSize: 50}} />
            </div>
            <div className='movieRow--rigth' onClick={movieNext}>
                <NavigateNextIcon sttyle={{fonteSize: 50}} />
            </div>
            <div className='movieRow--listArea'>
                <div className='movieRow--items' style={{
                    marginLeft: moverLista,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map( (elemento, key) => {
                        return <div className='movieRow--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${elemento.poster_path}`} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}