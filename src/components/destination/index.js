import React from 'react'
import { NavLink } from 'react-router-dom'

import Moon from '../../assets/destination/image-moon.png'
import Europa from '../../assets/destination/image-europa.png'
import Mars from '../../assets/destination/image-mars.png'
import Titan from '../../assets/destination/image-titan.png'


import { BoxMoon, BoxText, Container, StyledDistanceTravel, StyledNameDescription } from './styled'

export const Destinations = ({listMenu, data}) => {

  function activeStyle(){
 
  }

  return (
    <Container>
      <section>
        <BoxMoon>
          <p><span>01</span>  PICK YOUR DESTINATION</p>
          <img src={Moon}/>
        </BoxMoon>

        <BoxText>
          <article>
            <nav>
              <ul>
                {listMenu && listMenu.map((name, index) => (
                  <li 
                  key={index}
                  onClick={activeStyle}
                  >
                   {name}
                  </li>
                ))}
              </ul>
            </nav>
            {data && data.map(({name, description, distance, travel}, index) => (
                index === 0 ? 
                <div key={name}>
                  <StyledNameDescription>
                    <h1> {name} </h1>
                    <p>{description}</p>
                  </StyledNameDescription>

                  <nav>
                    <StyledDistanceTravel>
                      <p>AVG. DISTANCE</p>
                      <h2>{distance}</h2>
                    </StyledDistanceTravel>
                    <StyledDistanceTravel>
                      <p>EST. TRAVEL TIME</p>
                      <h2>{travel}</h2>
                    </StyledDistanceTravel>
                  </nav>
                </div> : null
              ))}
          </article>
        </BoxText>
      </section>
    </Container>
  )
}
