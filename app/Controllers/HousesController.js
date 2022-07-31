import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"
import { loadHouseState, saveHouseState } from "../Utils/LocalStorage.js"



function _drawHouses(){
    let template = ''
  let houses = ProxyState.houses

    houses.forEach(h => template += h.Template)
    // @ts-ignore
  document.getElementById('listings').innerHTML = template
  // @ts-ignore
  document.getElementById('form').innerHTML = `
          <form class="col-12 bg-white p-3 elevation-2 rounded" onsubmit="app.housesController.createHouse()">
          <h3 class="text-primary">List Your House</h3>
          <div class="row">
            <div class="col-12">
              <label class="form-label" for="address">Address</label>
              <input class="form-control" type="text" min="1" id="address" name="address">
            </div>
            <div class="col-4">
              <label class="form-label" for="make">Price</label>
              <input class="form-control" type="number" minlength="5" id="price" name="price">
            </div>
            <div class="col-4">
              <label class="form-label" for="bedrooms">Bedrooms</label>
              <input class="form-control" type="number" minlength="5" id="bedrooms" name="bedrooms">
            </div>
            <div class="col-4">
              <label class="form-label" for="bathrooms">Bathrooms</label>
              <input class="form-control" type="number" id="bathrooms" name="bathrooms">
            </div>
            <div class="col-12">
              <label class="form-label" for="img">Image</label>
              <input class="form-control" type="text" id="img" name="img">
            </div>
            <div class="col-12">

              <label class="form-label" for="description">Description</label>
              <textarea class="w-100 form-control" name="description" id="description" rows="5"></textarea>
            </div>
            <div class="col-12">
            <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light" data-bs-dismiss="modal">Submit</button>
            </div>
          </div>
        </form>
  `
}



export class HousesController{

  constructor() {
    // debugger
    ProxyState.on('houses', _drawHouses)
    ProxyState.on('houses', saveHouseState)

  
  }


  viewHouses(){
    _drawHouses()
    loadHouseState()
  }


  createHouse() {
    // console.log('house form');
    window.event.preventDefault()
    let form = window.event.target

    let newHouse = {
      address: form.address.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      description: form.description.value,
      price: form.price.value,
      img: form.img.value,
    }

    housesService.createHouse(newHouse)
    form.reset()
    // _drawHouses()
  }

  deleteHouse(id) {
  housesService.deleteHouse(id)
}

}