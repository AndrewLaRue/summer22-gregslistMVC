// import { generateId } from "../Utils/generateId.js"



export class House{
  constructor({id, levels, bedrooms, bathrooms, description, price, imgUrl, year}) {
    this.id = id
    this.levels = levels || ''
    this.bedrooms = bedrooms || ''
    this.bathrooms = bathrooms || ''
    this.description = description || ''
    this.price = price || ''
    this.img = imgUrl || ''
    this.year = year || ''
  }
    
    
get Template(){
      return `
          <div class="col-4 p-3">
              <div class="bg-white elevation-2 g-card">
                <p>${this.levels}</p>
                <img class="img-fluid" src="${this.img}" alt="">
                <div class="p-2">
                    <h4 class="text-center">Beds: ${this.bedrooms} | Baths: ${this.bathrooms}</h4>
                    <p>${this.description}</p>
                    <p class="text-end text-success m-0">$<b>${this.price}</b></p>
                    <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">delete me</button> 
                </div>
              </div>
          </div>
      `
}

}