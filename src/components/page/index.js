import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { imgVerif } from '../../img'

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
  let name;

  React.useEffect(()=>{
    setAtivo(document.documentURI)
  },[ativo])

  function click(e){
    setAtivo(e.target.href)
  }


  return (
    <BrowserRouter>
      <StyledPage image={imgVerif(ativo)} >
        <Menu list={NewData} click={click}/>
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
