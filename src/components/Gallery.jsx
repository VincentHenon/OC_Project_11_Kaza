import Thumb from "../components/Thumb"
import housingData from "../assets/data/logements.json"

function Gallery() {
  return (
    <div className="galleryWrapper">
      { housingData.map(thumb => // create a thumb element for each object found in the json
        ( 
            <Thumb key={thumb.id} thumb={thumb} /> //add key for each thumb to make them unique. add thumb as props
        ))}
    </div>
  )
}

export default Gallery