import React, { useState } from 'react'


function DropMenu(props) {
  const [isActive, setIsActive] = useState(false); //set state to false by default
  const toggleActive= ()=> {
    setIsActive(!isActive)
  }
  return (
    <div className= {isActive? "dropMenuWrapper active" : "dropMenuWrapper"} onClick={toggleActive}>
      <div className= "menuTitleWrapper">
        <p>{ props.title }</p>
        <i className= "menuChevron fa-solid fa-chevron-up" ></i>
      </div>
      <p className="menuContent">{ props.content }</p>
    </div>
  )
}

export default DropMenu