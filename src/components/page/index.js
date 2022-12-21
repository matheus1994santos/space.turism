import React from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { Menu } from '../menu'

import {getMenuPaths , imgVerif} from './helpers'
import { StyledPage } from './styled'



export const Page = ({children}) => {
  const paths = getMenuPaths();
  const location = useLocation();
  const Title = location.pathname.replace('/', ' ')
  const CaracterUP = (str) => str[1].toUpperCase() + str.slice(2);
  
  return (
      <StyledPage image={imgVerif(location.pathname)} >
        <Helmet>
          <title>{`Space Turism ${location.pathname === '/' ? Title : ( ': ' + CaracterUP(Title)) }`}</title>
        </Helmet>
        <Menu list={paths}/>
        {children}
      </StyledPage>
  )
}
