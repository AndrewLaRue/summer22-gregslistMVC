import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"

function _drawHouses(){
    let template = ''
    let houses = ProxyState.houses
    houses.forEach(h => template += h.Template)
    // @ts-ignore
    document.getElementById('listings').innerHTML = template
}



export class HousesController{



  viewHouses(){
    _drawHouses()
  }
}