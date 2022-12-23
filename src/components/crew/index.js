import React from 'react'

import requestData from '../../utils/requestdata'

import { Page } from '../page'

import { crewVerif } from './helpers'
import { BoxCrew, BoxImgCrew, Container, InfoCrew, PageTitle, Role, Slide } from './styled'


export const Crew = () => {
  const data = requestData(); // dados do json
  const [ crewActive, setCrewActive ] = React.useState(null)

  React.useEffect(()=>{
    setCrewActive(!crewActive ? 'Commander' : crewActive) // State recebe logica em caso de null retorno ser o primeiro role do Array
  })
  
  function activeStyle(e){ // fuction vai pegar innerHTML e mudar State crewActive para fins de comparação durante o codigo
    setCrewActive(e.target.innerHTML) 
  }

  return (
    <Page>
    <Container>
      <PageTitle><span>02</span> MEET YOUR CREW</PageTitle>
      <section>
        <BoxCrew>
          <InfoCrew>
          {data && data.crew.map(({name, role, bio}) => (
            role === crewActive ? // Aqui é verificado se State for igual a uma das roles ele da print nos dados.
            <div key={role}>
              <Role>{role}</Role>
              <span>{name}</span>
              <p>{bio}</p>
            </div>
            
            : null
          ))}
          <Slide>
          {data && data.crew.map(({name, role}) => (
            <li
              onClick={activeStyle}
              style={{opacity: role === crewActive ? 1 : 0.17 }} 
              key={name} 
              >
            {role}
            </li>)
          )}
          </Slide>
          </InfoCrew>
        </BoxCrew>

        <BoxImgCrew>
          <img src={crewVerif(crewActive)}/> 
          <div></div>
        </BoxImgCrew>
        
      </section>
    </Container>
    </Page>
  )
}
