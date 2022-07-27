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

}