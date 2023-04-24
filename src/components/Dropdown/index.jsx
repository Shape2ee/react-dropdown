import React from "react";
import "./dropdown.css"

const Dropdown = () => {
  return (
    <ul >
      {
        Array(3).fill('').map((li, i) => (
          <li onClick={() => console.log(`Dropdown${i + 1}`)}>Dropdown{i + 1}</li>
        ))
      }
    </ul>
  )
}

export default Dropdown