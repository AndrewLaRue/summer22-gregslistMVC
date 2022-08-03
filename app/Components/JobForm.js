import { Job } from "../Models/Job.js";







// @ts-ignore
export function getJobForm(job = new Job({})){
  
  let submitAction = 'app.jobsController.createJob()'
  if (job.id) {
    submitAction = `app.jobsController.editJob('${job.id}')`
  }

  return `
   <form class="col-12 bg-white p-3 elevation-2 rounded" onsubmit="${submitAction}">
          <h3 class="text-primary">List Your Job</h3>
          <div class="row justify-content-between">
            <div class="col-4">
              <label class="form-label" for="position">Position</label>
              <input class="form-control" type="text" minlength="5" id="company" name="company" value="${job.company}">
            </div>
            <div class="col-4">
              <label class="form-label" for="pay">Pay</label>
              <input class="form-control" type="number" id="rate" name="rate" value="${job.rate}">
            </div>
            <div class="col-12">
              <label class="form-label" for="img">Image</label>
              <input class="form-control" type="number" id="hours" name="hours" value="${job.hours}">
            </div>
            <div class="col-12">
              <label class="form-label" for="img">Image</label>
              <input class="form-control" type="text" id="jobTitle" name="jobTitle" value="${job.jobTitle}">
            </div>
            <div class="col-12">
            <label class="form-label" for="description">Description</label>
            <textarea class="w-100 form-control" name="description" id="description" rows="5" value="${job.description}"></textarea>
            </div>
            <div class="col-12">
            <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light" data-bs-dismiss="modal">Submit</button>
            </div>
          </div>
        </form>
  `
}