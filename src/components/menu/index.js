import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Logo from '../../assets/shared/logo.svg'
import { screenSizeWidth } from '../../utils/screensize'
import Bclose from '../../assets/shared/icon-close.svg'

import { Options, StyledMenu, NumberDesk, OptionsMobile } from './styled'


export const Menu = ({list}) => {

  return (
    <StyledMenu>
        <div>
            <img src={Logo} />
            <div></div>
            {
              screenSizeWidth > 500 ? (
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
              ) : (
                <OptionsMobile>
                  <nav><img src={Bclose}/></nav>
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
                </OptionsMobile>
              )

            }
        </div>
    </StyledMenu>
  )
}
