import React, { useState } from 'react'

function Carousel(props) {
  const [currentImage, setCurrentImage] = useState(0) //default image is at the index 0
  const maxNbr = props.pictures.length

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % maxNbr)
  }

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + maxNbr) % maxNbr)
  }

  if (maxNbr === 1) {
    return (
      <div className="carouselWrapper">      
        <img src={props.pictures[currentImage]} alt="" />
      </div>
    )
  }

  if (maxNbr < 1) {
    return (
      <div className="carouselWrapper">      
        <p>il n'y a aucune image pour ce logement :-/</p>
      </div>
    )
  }

  return (
    <div className="carouselWrapper">      
      <i className="chevronLeft fa-solid fa-chevron-left" onClick={prevImage}></i>
      <img src={props.pictures[currentImage]} alt="" />
      <p className="imageCounter">{currentImage + 1}/{maxNbr}</p>
      <i className="chevronRight fa-solid fa-chevron-right" onClick={nextImage}></i>
    </div>
  )
}

export default Carousel