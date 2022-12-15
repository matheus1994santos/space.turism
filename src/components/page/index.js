import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
  const [ ativo, setAtivo ] = React.useState(null)


  function handleClick({target}){
    setAtivo(target.innerText)
    console.log(ativo)
  }

  return (
    <BrowserRouter>
      <StyledPage image={HomeDesk}>
        <Menu list={NewData} callback={handleClick}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/destination' element={<Destinations listMenu={nameDestinations} data={Data.destination}/>}/>
          <Route path='/crew' element={<Crew data={Data}/>}/>
          <Route path='/technology' element={<Technology data={Data}/>}/>
        </Routes>
      </StyledPage>
    </BrowserRouter>
  )
}
