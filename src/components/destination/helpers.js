// Destination
import Moon from '../../assets/destination/image-moon.png'
import Europa from '../../assets/destination/image-europa.png'
import Mars from '../../assets/destination/image-mars.png'
import Titan from '../../assets/destination/image-titan.png'

export function getDestinationImg(moon){

  if(moon === 'Moon'){
    return Moon;
  } 
  if(moon === 'Europa'){
    return Europa;
  } 
  if(moon === 'Mars'){
    return Mars;
  }
  if(moon === 'Titan'){
    return Titan;
  }
}