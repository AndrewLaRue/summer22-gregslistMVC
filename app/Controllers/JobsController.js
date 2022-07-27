




function _drawJobs() {

  // @ts-ignore
  document.getElementById('listings').innerHTML = '<p> Jobs page </p>'
}



export class JobsController{



  viewJobs(){
    _drawJobs()

  }
}