import React, { useRef, useState } from "react";
import Dropdown from "../Dropdown";
import "./container.css"
const Container = () => {
  const [isDropdownView, setDropdownView] = useState(false)
  const containerRef = useRef(null)

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView)
  }
  
  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false)
    }, 100);
  }

  return (
    <div className="container" onBlur={handleBlurContainer}>
      <label onClick={handleClickContainer}>
        <button>Dropdown Menu{isDropdownView ? '▼' : '▲'}</button>
      </label>
      {isDropdownView && <Dropdown /> }
    </div>
  )
}

export default Container