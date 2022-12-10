import React from 'react'
import { Container, TitleTech } from './styled'

export const Technology = ({data}) => {
  const Tech = data.technology.map( props => props );

  console.log(Tech)

  return (
    <Container>
      <section>
        <TitleTech>
          <p>03</p> SPACE LAUNCH 101
        </TitleTech>

      </section>
    </Container>
  )
}
