import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Logo from '../../assets/shared/logo.svg'
import { screenSizeWidth } from '../../utils/screensize'
import Bclose from '../../assets/shared/icon-close.svg'
import Hamburger from '../../assets/shared/icon-hamburger.svg'

import { StyledOptions, StyledMenu, StyledNumberDesk , StyledOptionsMobile, StyledIconHamburger } from './styled'


export const Menu = ({list}) => {

  const [ativo, setAtivo] = React.useState(false)

  const activeMenu = () => setAtivo(!ativo)

  return (
    <StyledMenu>
        <div>
            <NavLink to={'/'}><img src={Logo} /></NavLink>
            <div></div>
            {
              screenSizeWidth > 556 ? (
                <StyledOptions>
                <ul>
                  <NavLink to={'/'}><li><StyledNumberDesk >00</StyledNumberDesk > Home</li></NavLink>
                  {list && list.map((name, index) => (
                    <NavLink 
                      to={`/${name}`}
                      key={name}
                    >
                    <li><StyledNumberDesk >0{ index + 1 }</StyledNumberDesk > { name}</li>
                    </NavLink>
                  ))}
                </ul>
            </StyledOptions>
              ) : (
                !ativo ? (
                <StyledIconHamburger>
                  <img onClick={activeMenu} src={Hamburger} className={'Burger'}/>
                </StyledIconHamburger>
                  ) : (
                    <StyledOptionsMobile>
                    <nav><img onClick={activeMenu} src={Bclose}/></nav>
                    <ul>
                      <NavLink to={'/'}><li><StyledNumberDesk >00</StyledNumberDesk > Home</li></NavLink>
                      {list && list.map((name, index) => (
                        <NavLink 
                          to={`/${name}`}
                          key={name}
                        >
                        <li><StyledNumberDesk >0{ index + 1 }</StyledNumberDesk > { name}</li>
                        </NavLink>
                      ))}
                    </ul>
                  </StyledOptionsMobile>
                  )
              )

            }
        </div>
    </StyledMenu>
  )
}
