import { generateId } from "../Utils/generateId.js";



export class Job {

  constructor(data) {
    this.id = generateId
    this.position = data.position,
    this.pay = data.pay,
    this.description = data.description
    this.img = data.img
  
}


}

