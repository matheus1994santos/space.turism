import React from 'react'

import { Page } from '../page'

import requestData from '../../utils/requestdata'

import { sateVerif } from './helpers'




import { BoxMoon, BoxText, Container, StyledDistanceTravel, StyledNameDescription } from './styled'

export const Destinations = () => {
  const [sate, setSate] = React.useState(null);
  const data = requestData();
  const listMenu = data.destination.map((dest) => dest.name);
  
  React.useEffect(()=>{
    setSate(!sate ? 'Moon' : sate) 
  },[sate])

  function activeStyle(e){
    setSate(e.target.innerHTML)
  }

  return (
    <Page>
    <Container>
      <section>
        <BoxMoon>
          <p><span>01</span>  PICK YOUR DESTINATION</p>
          <img src={sateVerif(sate)}/>
        </BoxMoon>

        <BoxText>
          <article>
            <nav>
              <ul>
                {listMenu && listMenu.map((name, index) => (
                  <li 
                  key={index}
                  onClick={activeStyle}
                  className={name === sate ? 'active' : ''}
                  >
                   {name}
                  </li>
                ))}
              </ul>
            </nav>
            {data && data.destination.map(({name, description, distance, travel}, index) => (
                sate === name ? 
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
    </Page>
  )
}
