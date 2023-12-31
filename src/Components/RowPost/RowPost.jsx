import './RowPost.css'
import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY, imgUrl } from '../../constants/constant'
import YouTube from 'react-youtube'

function RowPost({ title, isSmall, url }) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setMovies(response.data.results)
            })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }
    const handleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response)=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0]);
            }
        })
    }
    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='posters'>
                {movies.map((movie, index) =>
                    <img onClick={()=> handleMovie(movie.id)} className={isSmall ? 'smallPoster' : 'poster'} src={`${imgUrl + movie.backdrop_path}`} alt="poster" key={index}/>
                )}
            </div>
            {urlId && <YouTube videoId={urlId.key} opts={opts}/>}
            
        </div>
    )
}

export default RowPost
