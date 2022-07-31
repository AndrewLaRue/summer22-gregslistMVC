import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"
import { loadJobState, saveJobState } from "../Utils/LocalStorage.js"






function _drawJobs() {
  let template = ''
  let jobs = ProxyState.jobs
  jobs.forEach(j => template += j.Template)
  // @ts-ignore
  document.getElementById('listings').innerHTML = template
  // @ts-ignore
  document.getElementById('form').innerHTML = `
  <form class="col-12 bg-white p-3 elevation-2 rounded" onsubmit="app.jobsController.createJob()">
          <h3 class="text-primary">List Your Job</h3>
          <div class="row justify-content-between">
            <div class="col-4">
              <label class="form-label" for="position">Position</label>
              <input class="form-control" type="text" minlength="5" id="position" name="position">
            </div>
            <div class="col-4">
              <label class="form-label" for="pay">Pay</label>
              <input class="form-control" type="text" id="pay" name="pay">
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



export class JobsController{

  constructor() {
    
    ProxyState.on('jobs', _drawJobs)
    ProxyState.on('jobs', saveJobState)


  }


  viewJobs(){
    _drawJobs()
    loadJobState()
  }

  createJob() {
    window.event.preventDefault()
    let form = window.event.target

    let newJob = {
      position: form.position.value,
      pay: form.pay.value,
      description: form.description.value,
      img: form.img.value
    }

    jobsService.createJob(newJob)
    form.reset()
    // _drawJobs()
  }

  deleteJob(id) {
    jobsService.deleteJob(id)
  }
}