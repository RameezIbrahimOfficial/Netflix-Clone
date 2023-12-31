import './Banner.css'
import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY, imgUrl } from '../../constants/constant'

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response)=> {
      console.log(response.data.results[7]);
      setMovie(response.data.results[7])
    })
  },[])

  return (
    <div className='banner' style={{backgroundImage: `url(${imgUrl+movie.backdrop_path})`}}>
      <div className='content'>
        <h1 className='title'>{movie.name}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
