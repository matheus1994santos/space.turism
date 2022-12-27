import React from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { Menu } from '../Menu'

import {getMenuPaths , getHomeImg} from './helpers'
import { StyledPage } from './styled'



const Page = ({children}) => {
  const paths = getMenuPaths();
  const location = useLocation();
  const Title = location.pathname.replace('/', ' ')
  const CaracterUP = (str) => str[1].toUpperCase() + str.slice(2);
  
  return (
      <StyledPage image={getHomeImg(location.pathname)} >
        <Helmet>
          <title>{`Space Turism ${location.pathname === '/' ? Title : ( ': ' + CaracterUP(Title)) }`}</title>
        </Helmet>
        <Menu list={paths}/>
        {children}
      </StyledPage>
  )
}

export default Page;