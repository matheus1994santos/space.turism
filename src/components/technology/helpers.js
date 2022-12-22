import Landscape from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import SpacePort from '../../assets/technology/image-spaceport-portrait.jpg'
import SpaceCapsule from '../../assets/technology/image-space-capsule-portrait.jpg'

import LandscapeMobile from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import SpacePortMobile from '../../assets/technology/image-spaceport-landscape.jpg'
import SpaceCapsuleMobile from '../../assets/technology/image-space-capsule-landscape.jpg'
import { screenSizeWidth } from '../../utils/screensize'



export function technoImgVerif(img){

  if(screenSizeWidth > 770){
    if(img === 0){
      return Landscape;
    } 
    if(img === 1){
      return SpacePort;
    } 
    if(img === 2){
      return SpaceCapsule;
    }
  } else {
    if(img === 0){
      return LandscapeMobile;
    } 
    if(img === 1){
      return SpacePortMobile;
    } 
    if(img === 2){
      return SpaceCapsuleMobile;
    }
  } 
}