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
                    <h4 class="text-center">Job Title: ${this.jobTitle} </h4>
                    <h4 class="text-center">Hours: ${this.hours} </h4>
                    <h4 class="text-center">Rate: 
                    ${this.rate} </h4>
                    <p>${this.description}</p>
                    <div class="d-flex justify-content-between">
                      <button class="btn btn-info" onclick="app.jobsController.adjustJob('${this.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">Adjust Job Settings</button>
                      <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">delete me</button> 
                    </div>
                  </div>
            </div>
        </div>
    `
  }

}

