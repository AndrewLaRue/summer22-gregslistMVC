import { generateId } from "../Utils/generateId.js"



export class House{


  constructor(data) {
    this.id = generateId()
    this.address = data.address,
    this.bedrooms = data.bedrooms,
    this.bathrooms = data.bathrooms,
    this.description = data.description,
    this.price = data.price,
    this.img = data.img
  }
    
    
get Template(){
      return `
          <div class="col-4 p-3">
      <div class="bg-white elevation-2">
      <p>${this.address}</p>
        <img class="img-fluid" src="${this.img}" alt="">
        <div class="p-2">
          <h4 class="text-center">Beds: ${this.bedrooms} | Baths: ${this.bathrooms}</h4>
          <p>${this.description}</p>
          <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">delete me</button> 
        </div>
      </div>
    </div>
      `
}

}