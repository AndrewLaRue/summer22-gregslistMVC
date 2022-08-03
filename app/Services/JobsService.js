import { ProxyState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { api } from "./AxiosService.js"





class JobsService{
  async getJobs() {
    let res = await api.get('/jobs')
    ProxyState.jobs = res.data.map(j => new Job(j))
  }


  async createJob(jobFormData) {
    let res = await api.post('/jobs', jobFormData)
    let job = new Job(res.data)
    ProxyState.jobs = [...ProxyState.jobs, new Job(jobFormData)]

  }

  async deleteJob(jobId) {
    let url = `/jobs/${jobId}`
    await api.delete(url)
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id != jobId)
  }
}


export const jobsService = new JobsService()