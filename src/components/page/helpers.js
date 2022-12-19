import requestData from "../../utils/requestdata";

// Desktop
import HomeDesk from '../../assets/home/background-home-desktop.jpg'
import DestinationDesk from '../../assets/destination/background-destination-desktop.jpg'
import CrewDesk from '../../assets/crew/background-crew-desktop.jpg'
import TechnologyDesk from '../../assets/technology/background-technology-desktop.jpg'


export function imgVerif(path){

  if(path === '/destination'){
    return DestinationDesk;
  } 
  if(path === '/crew'){
    return CrewDesk;
  } 
  if(path === '/technology'){
    return TechnologyDesk;
  }
  if(path === '/'){
    return HomeDesk;
  }
}

export function getMenuPaths(){
  const data = requestData();
  const paths = Object.keys(data).map((props => props));
  return paths
}