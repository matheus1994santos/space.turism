import React from 'react'

import Douglas from '../../assets/crew/image-douglas-hurley.png'

import { BoxCrew, BoxImgCrew, Container, InfoCrew, Role, Slide } from './styled'

export const Crew = ({data}) => {
  const dataCrew = data.crew.map( props => props )
  // console.log('verificando ', dataCrew)

  return (
    <Container>
      <section>
        <BoxCrew>
          <p><span>02</span> MEET YOUR CREW</p>
          <InfoCrew>
          {dataCrew && dataCrew.map(({name, role, bio}) => (
            role === 'Commander' ? 
            <div key={role}>
              <Role>{role}</Role>
              <span>{name}</span>
              <p>{bio}</p>
            </div>
            
            : null
          ))}
          <Slide>
          {dataCrew && dataCrew.map(({name, role}) => (
            <li
              style={{opacity: role === 'Commander' ? 1 : 0.17 }} 
              key={name} 
              backopacity={role}>
            {name}
            </li>)
          )}
          </Slide>
          </InfoCrew>
        </BoxCrew>

        <BoxImgCrew>
          <img src={Douglas}/>
        </BoxImgCrew>
        
      </section>
    </Container>
  )
}
