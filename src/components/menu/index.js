import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Logo from '../../assets/shared/logo.svg'

import { Options, StyledMenu } from './styled'


export const Menu = ({list, click}) => {
  // const widthScreen = window.innerWidth;
  // const CaracterUP = (str) => str[0].toUpperCase() + str.slice(1);

  return (
    <StyledMenu>
        <div>
            <img src={Logo} />
            <div></div>
            <Options>
                <ul>
                  <NavLink to={'/'} onClick={click}><li>00 Home</li></NavLink>
                  {list && list.map((name, index) => (
                    <NavLink 
                      to={`/${name}`}
                      key={name}
                      onClick={click}
                    >
                      0{ index + 1 } { name}
                    </NavLink>
                  ))}
                </ul>
            </Options>
        </div>
    </StyledMenu>
  )
}
