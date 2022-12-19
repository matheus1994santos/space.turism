import React from 'react'

import requestData from '../../utils/requestdata'

import { Page } from '../page'

import { ButtonSlide, Container, Content, NameTech, StyledStep, TechText, TitleTech } from './styled'

import Landscape from '../../assets/technology/image-launch-vehicle-portrait.jpg'

export const Technology = () => {
  const data = requestData();
  // const currentStep = 1;

  const [ activeTech, setActiveTech ] = React.useState(1);
  
  function activeStyle(e){ 
    setActiveTech(e.target.innerHTML) 
    console.log(activeTech)
  }


  return (
    <Page>
    <Container>
      <section>
        <TitleTech>
          <p>03</p><span>SPACE LAUNCH 101</span>
        </TitleTech>
        <Content>
          <TechText>
              <ButtonSlide>
                { data && data.technology.map( (props, index) => <StyledStep onClick={activeStyle} key={index} isActive={activeTech === index + 1}>{index + 1}</StyledStep> ) }
              </ButtonSlide>
              {data && data.technology.map( ({name, description}, index) => (
                name === 'Launch vehicle' ?
              <div key={name}>
                <span>THE TERMINOOGY...</span>
                <NameTech>{name.toUpperCase()}</NameTech>
                <p>{description}</p>
              </div>
              : null
              ) )}
          </TechText>

          <img src={Landscape} />
        </Content>
      </section>
    </Container>
    </Page>
  )
}
