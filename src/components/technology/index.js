import React from 'react'
import { ButtonSlide, Container, Content, NameTech, StyledStep, TechText, TitleTech } from './styled'
import Landscape from '../../assets/technology/image-launch-vehicle-portrait.jpg'

export const Technology = ({data = {}}) => {
  const tech = data.technology;
  const currentStep = 1;

  return (
    <Container>
      <section>
        <TitleTech>
          <p>03</p><span>SPACE LAUNCH 101</span>
        </TitleTech>
        <Content>
          <TechText>
              <ButtonSlide>
                { tech && tech.map( (props, index) => <StyledStep key={index} isActive={currentStep === index + 1}>{index + 1}</StyledStep> ) }
              </ButtonSlide>
              {tech && tech.map( ({name, description}) => (
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
  )
}
