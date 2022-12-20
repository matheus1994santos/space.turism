import Landscape from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import SpacePort from '../../assets/technology/image-spaceport-portrait.jpg'
import SpaceCapsule from '../../assets/technology/image-space-capsule-portrait.jpg'


export function technoImgVerif(img){

  if(img === 0){
    return Landscape;
  } 
  if(img === 1){
    return SpacePort;
  } 
  if(img === 2){
    return SpaceCapsule;
  }
}