import HomeDesk from './assets/home/background-home-desktop.jpg'
import DestinationDesk from './assets/destination/background-destination-desktop.jpg'
import CrewDesk from './assets/crew/background-crew-desktop.jpg'
import TechnologyDesk from './assets/technology/background-technology-desktop.jpg'


export function imgVerif(verificar){

  if(verificar === 'http://localhost:3000/destination'){
    return DestinationDesk;
  } 
  if(verificar === 'http://localhost:3000/crew'){
    return CrewDesk;
  } 
  if(verificar === 'http://localhost:3000/technology'){
    return TechnologyDesk;
  }
  if(verificar === 'http://localhost:3000/'){
    return HomeDesk;
  }
}