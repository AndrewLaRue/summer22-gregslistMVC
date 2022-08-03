import { ProxyState } from "../AppState.js"
import { getJobForm } from "../Components/JobForm.js"
import { jobsService } from "../Services/JobsService.js"
// @ts-ignore
import { loadJobState, saveJobState } from "../Utils/LocalStorage.js"
import { Pop } from "../Utils/Pop.js"






function _drawJobs() {
  let template = ''
  let jobs = ProxyState.jobs
  jobs.forEach(j => template += j.Template)
  // @ts-ignore
  document.getElementById('listings').innerHTML = template
  // @ts-ignore
  document.getElementById('form').innerHTML = getJobForm()
    
}



export class JobsController{

  constructor() {
    
    ProxyState.on('jobs', _drawJobs)
    // ProxyState.on('jobs', saveJobState)


  }


  viewJobs(){
    _drawJobs()
    this.getJobs()
  }

  async getJobs() {
    try {
      await jobsService.getJobs()
    } catch (error) {
      
    }
  }

  async createJob() {
    try {
      // @ts-ignore
    window.event.preventDefault()
    // @ts-ignore
    let form = window.event.target

    let newJob = {
      // @ts-ignore
      jobTitle: form.jobTitle.value,
      // @ts-ignore
      rate: form.rate.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      hours: form.hours.value,
      // @ts-ignore
      company: form.company.value
    }

    jobsService.createJob(newJob)
    // @ts-ignore
    form.reset()
    // _drawJobs()
    } catch (error) {
      console.error('[Create Job]', error);
      Pop.error(error)
    }
  }

  async deleteJob(id) {
    try {
      await jobsService.deleteJob(id)
      
    } catch (error) {
      console.error('[Delete Car]', error);
      Pop.error(error)
    }
  }
}