import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Logo from '../../assets/shared/logo.svg'
import { screenSizeWidth } from '../../utils/screensize'
import Bclose from '../../assets/shared/icon-close.svg'
import Hamburger from '../../assets/shared/icon-hamburger.svg'

import { Options, StyledMenu, NumberDesk, OptionsMobile, IconHamburger } from './styled'


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
                !ativo ? (
                <IconHamburger>
                  <img onClick={activeMenu} src={Hamburger} className={'Burger'}/>
                </IconHamburger>
                  ) : (
                    <OptionsMobile>
                    <nav><img onClick={activeMenu} src={Bclose}/></nav>
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
              )

            }
        </div>
    </StyledMenu>
  )
}
