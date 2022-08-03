import { House } from "../Models/House.js"








// @ts-ignore
export function getHouseForm(house = new House({})){
  
  let submitAction = 'app.housesController.createHouse()'
  if (house.id) {


    submitAction = `app.housesController.editHouse('${house.id}')`
  }


  return `
   <form class="col-12 bg-white p-3 elevation-2 rounded" onsubmit="${submitAction}">
          <h3 class="text-primary">List Your House</h3>
          <div class="row">
            <div class="col-12">
              <label class="form-label" for="address">levels</label>
              <input class="form-control" type="text" min="1" id="address" name="levels"value="${house.levels}">
            </div>
            <div class="col-4">
              <label class="form-label" for="price">Price</label>
              <input class="form-control" type="number" minlength="5" id="price" name="price"value="${house.price}">
            </div>
            <div class="col-4">
              <label class="form-label" for="bedrooms">Bedrooms</label>
              <input class="form-control" type="number" minlength="5" id="bedrooms" name="bedrooms"value="${house.bedrooms}">
            </div>
            <div class="col-4">
              <label class="form-label" for="bathrooms">Bathrooms</label>
              <input class="form-control" type="number" id="bathrooms" name="bathrooms"value="${house.bathrooms}">
            </div>
            <div class="col-4">
              <label class="form-label" for="year">year</label>
              <input class="form-control" type="number" id="year" name="year"value="${house.year}">
            </div>
            <div class="col-12">
              <label class="form-label" for="img">Image</label>
              <input class="form-control" type="text" id="img" name="img"value="${house.img}">
            </div>
            <div class="col-12">

              <label class="form-label" for="description">Description</label>
              <textarea class="w-100 form-control" name="description" id="description" rows="5"value="${house.description}"></textarea>
            </div>
            <div class="col-12">
            <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light" data-bs-dismiss="modal">Submit</button>
            </div>
          </div>
        </form>
  `
}