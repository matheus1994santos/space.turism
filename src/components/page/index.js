import React from 'react'

import HomeDesk from '../../assets/home/background-home-desktop.jpg'
import DestinationDesk from '../../assets/destination/background-destination-desktop.jpg'
import CrewDesk from '../../assets/crew/background-crew-desktop.jpg'
import TechnologyDesk from '../../assets/technology/background-technology-desktop.jpg'



import { Menu } from '../menu'
import { Home } from '../home'
import { Destinations } from '../destination'
import { Crew } from '../crew'

import { StyledPage } from './styled'
import { Technology } from '../technology'

export const Page = () => {
  const Data = require('../../data.json');
  const NewData = Object.keys(Data).map((props => props));
  const nameDestinations = Data.destination.map((props) => props.name);


  return (
    <StyledPage image={TechnologyDesk}>
      <Menu list={NewData}/>
      {/* <Home/> */}
      {/* <Destinations listMenu={nameDestinations} data={Data.destinations}/> */}
      {/* <Crew data={Data}/> */}
      <Technology data={Data}/>
    </StyledPage>
  )
}
