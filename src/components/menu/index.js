import React from 'react'

import Logo from '../../assets/shared/logo.svg'

import { Options, StyledMenu } from './styled'

export const Menu = (props) => {
  // const widthScreen = window.innerWidth;
  // const CaracterUP = (str) => str[0].toUpperCase() + str.slice(1);
  
  function handleClick(e){
    props.ativo = e.target.innerText
  }

  return (
    <StyledMenu>
        <div>
            <img src={Logo} />
            <div></div>
            <Options>
                <ul onClick={handleClick}>
                    <li>00 Home</li>
                    {props.list && props.list.map((name, index) => (
                      <li key={name}> 0{ index + 1 } { name}</li>
                    ))}
                </ul>
            </Options>
        </div>
    </StyledMenu>
  )
}
