import React from 'react'
import './cardComponent.css'


export const CardComponent = ({imageUrl,title,description}) => {
  return (
    <aside>
         <ul className="list-style">
          <li className="list-item-container">
            <img
              className="list-image"
              src={imageUrl}
              alt="_"
            />
            <div className="content">
              <h2>{title}</h2>
              <p>
               {description}
              </p>
            </div>
          </li>
          </ul>
    </aside>
  )
}
