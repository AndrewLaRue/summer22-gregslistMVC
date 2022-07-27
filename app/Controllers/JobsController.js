import { ProxyState } from "../AppState.js"






function _drawJobs() {
  let template = ''
  let jobs = ProxyState.jobs
  jobs.forEach(j => template += j.Template)
  // @ts-ignore
  document.getElementById('listings').innerHTML = template
}



export class JobsController{



  viewJobs(){
    _drawJobs()

  }
}