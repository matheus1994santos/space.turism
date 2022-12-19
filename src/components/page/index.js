import React from 'react'
import { useLocation } from 'react-router-dom'

import { Menu } from '../menu'

import {getMenuPaths , imgVerif} from './helpers'
import { StyledPage } from './styled'


export const Page = ({children}) => {
  const paths = getMenuPaths();
  const location = useLocation();

  return (
      <StyledPage image={imgVerif(location.pathname)} >
        <Menu list={paths}/>
        {children}
      </StyledPage>
  )
}
