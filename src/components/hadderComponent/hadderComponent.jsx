import React from 'react'
import "./hadderComponent.css"


export const HadderComponent = ({imageUrl,title,description}) => {
  return (
   <>
    <header>
     <img className="image-main" src={imageUrl} alt="_" />
        <h1>{title}</h1>
    </header>
    <main>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
        <p>
          {description}
        </p>
      </main>
    </>
  )
}
