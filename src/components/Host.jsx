import React from 'react'
import Rating from './Rating'

function Host(props) {
  const splitNameArray = props.name.split(" ")

  return (
    <div className="hostWrapper">
      <div className='hostIdWrapper'>
        <div className='hostName'>
          {splitNameArray.map((word, index)=> (
            <span key= {index}>
              {word}
            </span>
          ))}
        </div>
        <img className='hostPicture' src={props.picture} alt='portrait of the host' />
      </div>
      <div className="hostRatings">
        <Rating rating= {props.rating}/>
      </div>
    </div>
  )
}

export default Host
