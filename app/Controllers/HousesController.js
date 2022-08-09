import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"
import { Pop } from "../Utils/Pop.js"
import { getHouseForm } from "../Components/HouseForm.js";
// import { loadHouseState, saveHouseState } from "../Utils/LocalStorage.js"



function _drawHouses(){
    let template = ''
  let houses = ProxyState.houses

    houses.forEach(h => template += h.Template)
    // @ts-ignore
  document.getElementById('listings').innerHTML = template
  // @ts-ignore
  document.getElementById('form').innerHTML = getHouseForm()
}



export class HousesController{

  constructor() {
    // debugger
    ProxyState.on('houses', _drawHouses)
    // ProxyState.on('houses', saveHouseState)
  
  }


  viewHouses(){
    _drawHouses()
    this.getHouses()
  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.error('[Get Houses]', error);
      Pop.error(error)
    }
  }


 async createHouse() {

   try {
      // @ts-ignore
      window.event.preventDefault()
    // @ts-ignore
    let form = window.event.target

    let newHouse = {
      // @ts-ignore
      levels: form.levels.value,
      // @ts-ignore
      bedrooms: form.bedrooms.value,
      // @ts-ignore
      bathrooms: form.bathrooms.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      price: form.price.value,
      // @ts-ignore
      imgUrl: form.img.value,
      // @ts-ignore
      year: form.year.value
    }

    await housesService.createHouse(newHouse)
    // @ts-ignore
    form.reset()
    } catch (error) {
      console.error('[Create House]', error);
      Pop.error(error)
    }
    
    // _drawHouses()
  }

    adjustHouse(houseId) {
    let house = ProxyState.houses.find(h => h.id == houseId)
    // @ts-ignore
    document.getElementById('form').innerHTML = getHouseForm(house)
  }

  async deleteHouse(id) {
    try {
      
      await housesService.deleteHouse(id)
    } catch (error) {
      console.error('[Delete House]', error);
      Pop.error(error)
    }
  }
  
  async editHouse(houseId) {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      let form = window.event.target
      let houseData = {
        id: houseId,
        // @ts-ignore
        levels: form.levels.value,
        // @ts-ignore
        bedrooms: form.bedrooms.value,
        // @ts-ignore
        bathrooms: form.bathrooms.value,
        // @ts-ignore
        description: form.description.value,
        // @ts-ignore
        imgUrl: form.img.value,
        // @ts-ignore
        price: form.price.value,
        // @ts-ignore
        year: form.year.value
      }
      await housesService.editHouse(houseData)
    } catch (error) {
      console.error('[Edit House]', error)
      Pop.error(error)
    }
  }

}