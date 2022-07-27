import { generateId } from "../Utils/generateId.js";



export class Job {

  constructor(data) {
    this.id = generateId
    this.position = data.position,
    this.pay = data.pay,
    this.description = data.description
    this.img = data.img
  
}

  get Template() {
    return `
              <div class="col-4 p-3">
      <div class="bg-white elevation-2">
      <p>${this.position}</p>
        <img class="img-fluid" src="${this.img}" alt="">
        <div class="p-2">
          <h4 class="text-center">Pay: ${this.pay} </h4>
          <p>${this.description}</p>
          <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">delete me</button> 
        </div>
      </div>
    </div>
    `
  }

}

