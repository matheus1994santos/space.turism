import requestData from "../../utils/requestdata";
import { screenSizeWidth } from "../../utils/screensize";

// Desktop
import HomeDesk from '../../assets/home/background-home-desktop.jpg'
import DestinationDesk from '../../assets/destination/background-destination-desktop.jpg'
import CrewDesk from '../../assets/crew/background-crew-desktop.jpg'
import TechnologyDesk from '../../assets/technology/background-technology-desktop.jpg'

// Tablet
import HomeTablet from '../../assets/home/background-home-tablet.jpg'
import DestinationTablet from '../../assets/destination/background-destination-tablet.jpg'
import CrewTablet from '../../assets/crew/background-crew-tablet.jpg'
import TechnologyTablet from '../../assets/technology/background-technology-tablet.jpg'

// Mobile
import HomeMobile from '../../assets/home/background-home-mobile.jpg'
import DestinationMobile from '../../assets/destination/background-destination-mobile.jpg'
import CrewMobile from '../../assets/crew/background-crew-mobile.jpg'
import TechnologyMobile from '../../assets/technology/background-technology-mobile.jpg'


export function imgVerif(path){

  if( screenSizeWidth > 770 ){
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

  if( screenSizeWidth > 375 ){
    if(path === '/destination'){
      return DestinationTablet;
    } 
    if(path === '/crew'){
      return CrewTablet;
    } 
    if(path === '/technology'){
      return TechnologyTablet;
    }
    if(path === '/'){
      return HomeTablet;
    }
  } else {
    if(path === '/destination'){
      return DestinationMobile;
    } 
    if(path === '/crew'){
      return CrewMobile;
    } 
    if(path === '/technology'){
      return TechnologyMobile;
    }
    if(path === '/'){
      return HomeMobile;
    }
  }


}

export function getMenuPaths(){
  const data = requestData();
  const paths = Object.keys(data).map((props => props));
  return paths
}