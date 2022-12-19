// Crew
import Douglas from '../../assets/crew/image-douglas-hurley.png'
import Mark from '../../assets/crew/image-mark-shuttleworth.png'
import Victor from '../../assets/crew/image-victor-glover.png'
import Anousheh from '../../assets/crew/image-anousheh-ansari.png'


export function crewVerif(crew){
  if(crew === 'Commander'){
    return Douglas;
  } 
  if(crew === 'Mission Specialist'){
    return Mark;
  } 
  if(crew === 'Pilot'){
    return Victor;
  }
  if(crew === 'Flight Engineer'){
    return Anousheh;
  }
}