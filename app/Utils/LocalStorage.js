import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { House } from "../Models/House.js";
import { Job } from "../Models/Job.js";


//SECTION cars
export function saveState(){
  console.log('saving');
  let carData = JSON.stringify(ProxyState.cars)
  localStorage.setItem('cars', carData)
}

export function loadState(){
  console.log('loading')
  let rawCars = localStorage.getItem('cars')
  if(rawCars){
    let carData = JSON.parse(rawCars)
    console.log(carData);
    ProxyState.cars = carData.map(c => new Car(c))
  }
}


//SECTION houses
export function saveHouseState(){
  console.log('saving');
  let houseData = JSON.stringify(ProxyState.houses)
  localStorage.setItem('houses', houseData)
}

export function loadHouseState(){
  console.log('loading house')
  let rawHouses = localStorage.getItem('houses')
  if(rawHouses){
    let houseData = JSON.parse(rawHouses)
    console.log(houseData);
    ProxyState.houses = houseData.map(h => new House(h))
  }
}


//SECTION jobs
export function saveJobState(){
  console.log('saving');
  let jobData = JSON.stringify(ProxyState.jobs)
  localStorage.setItem('jobs', jobData)
}

export function loadJobState(){
  console.log('loading')
  let rawJobs = localStorage.getItem('jobs')
  if(rawJobs){
    let jobData = JSON.parse(rawJobs)
    console.log(jobData);
    ProxyState.jobs = jobData.map(j => new Job(j))
  }
}