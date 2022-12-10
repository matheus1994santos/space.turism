import React from 'react'

import Moon from '../../assets/destination/image-moon.png'

import { BoxMoon, BoxText, Container, StyledDistanceTravel, StyledNameDescription } from './styled'

export const Destinations = ({listMenu, data}) => {
  console.log('Arquivos de destination: ',data)

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
                  <li key={index}>{name.toUpperCase()}</li>
                ))}
              </ul>
            </nav>
            {data && data.map(({name, description, distance, travel}) => (
                name === 'Moon' ? 
                <div>
                  <StyledNameDescription>
                    <h1 key={name}> {name.toUpperCase()} </h1>
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
