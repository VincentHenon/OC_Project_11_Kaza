import React, { useState } from 'react'

function Carousel(props) {
  const [currentImage, setCurrentImage] = useState(0) //default image is at the index 0

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % props.pictures.length)
  }

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + props.pictures.length) % props.pictures.length)
  }

  return (
    <div className="carouselWrapper">
      <i className="chevronLeft fa-solid fa-chevron-left" onClick={prevImage}></i>
      <img src={props.pictures[currentImage]} alt="" />
      <p className="imageCounter">{currentImage}/{props.pictures.length - 1}</p>
      <i className="chevronRight fa-solid fa-chevron-right" onClick={nextImage}></i>
    </div>
  );
}

export default Carousel;