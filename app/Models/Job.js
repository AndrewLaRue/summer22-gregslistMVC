import { generateId } from "../Utils/generateId.js";



export class Job {

  constructor({ id, company, jobTitle, hours, rate, description }) {
    this.id = id
    this.company = company || ''
    this.jobTitle = jobTitle || ''
    this.hours = hours || ''
    this.rate = rate || ''
    this.description = description || ''  
}

  get Template() {
    return `
        <div class="col-4 p-3">
            <div class="bg-white elevation-2 g-card">
                <p>${this.company}</p>
                <div class="p-2">
                    <h4 class="text-center">${this.jobTitle} </h4>
                    <h4 class="text-center">${this.hours} </h4>
                    <h4 class="text-center">
                    ${this.rate} </h4>
                    <p>${this.description}</p>
                    <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">delete me</button> 
                </div>
            </div>
        </div>
    `
  }

}

