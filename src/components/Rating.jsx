import React from 'react'

function Rating(props) {
    const solidStarClass = "fa-solid fa-star fa-xl solidStar"
    const hollowStarClass = "fa-regular fa-star fa-xl hollowStar"
    const stars = []
    const maxStar = 5
    let nbrStar = Number(props.rating)
    
    for (let i = 0; i < maxStar; i++) {
        if (i < nbrStar) {
          stars.push(<i key={i} className={solidStarClass}></i>) //push the solid stars
        } else {
          stars.push(<i key={i} className={hollowStarClass}></i>) //push the hollow stars
        }
      }

  return (
    <div className="starRatings">
        {stars}
    </div>
  )
}

export default Rating