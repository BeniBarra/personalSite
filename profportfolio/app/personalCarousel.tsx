import React from 'react'
import projData from '../public/assets/json/projects.json'

const personalCarousel = () => {

  return (
    <div className="carousel justify-between w-3/4">
        {projData.projects.map( data =>             
            <div id={data.id} className="carousel-item relative justify-between w-full">
                <img src={data.imgs[0]} alt={data.alts[0]} className='w-full'/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={"#"+ data.prevSlide} className="btn btn-circle">❮</a> 
                    <a href={"#"+ data.nextSlide} className="btn btn-circle">❯</a>
                </div>
            </div>
            )}
    </div>
  )
}

export default personalCarousel