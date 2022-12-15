import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Logo from '../../assets/shared/logo.svg'

import { Options, StyledMenu } from './styled'


export const Menu = (props) => {
  // const widthScreen = window.innerWidth;
  // const CaracterUP = (str) => str[0].toUpperCase() + str.slice(1);


  return (
    <StyledMenu>
        <div>
            <img src={Logo} />
            <div></div>
            <Options>
                <ul>
                  <NavLink to={'/'} onClick={props.callback}><li>00 Home</li></NavLink>
                  {props.list && props.list.map((name, index) => (
                    <NavLink 
                      to={`/${name}`}
                      key={name}  
                      onClick={props.callback}
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
