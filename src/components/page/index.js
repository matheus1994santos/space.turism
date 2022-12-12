import React from 'react'

import HomeDesk from '../../assets/home/background-home-desktop.jpg'
import DestinationDesk from '../../assets/destination/background-destination-desktop.jpg'
import CrewDesk from '../../assets/crew/background-crew-desktop.jpg'
import TechnologyDesk from '../../assets/technology/background-technology-desktop.jpg'

import { Menu } from '../menu'
import { Home } from '../home'
import { Destinations } from '../destination'
import { Crew } from '../crew'
import { Technology } from '../technology'

import { StyledPage } from './styled'

export const Page = ({Data}) => {
  const NewData = Object.keys(Data).map((props => props));
  const nameDestinations = Data.destination.map((props) => props.name);

  const [menuActive, setMenuActive] = React.useState(0);


  function handleClick({target}){
      setMenuActive( menuActive + 1)
  }

  console.log(menuActive)

  return (
    <StyledPage image={HomeDesk}>
      <Menu list={NewData} onClick={handleClick}/>
      <Home/>
      {/* <Destinations listMenu={nameDestinations} data={Data.destination}/> */}
      {/* <Crew data={Data}/> */}
      {/* <Technology data={Data}/> */}
    </StyledPage>
  )
}
