import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Logo from '../../assets/shared/logo.svg'

import { Options, StyledMenu, NumberDesk } from './styled'


export const Menu = ({list}) => {
  // const CaracterUP = (str) => str[0].toUpperCase() + str.slice(1);

  return (
    <StyledMenu>
        <div>
            <img src={Logo} />
            <div></div>
            <Options>
                <ul>
                  <NavLink to={'/'}><li><NumberDesk>00</NumberDesk> Home</li></NavLink>
                  {list && list.map((name, index) => (
                    <NavLink 
                      to={`/${name}`}
                      key={name}
                    >
                    <li><NumberDesk>0{ index + 1 }</NumberDesk> { name}</li>
                    </NavLink>
                  ))}
                </ul>
            </Options>
        </div>
    </StyledMenu>
  )
}
