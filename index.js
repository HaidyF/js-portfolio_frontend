const BASE_URL = "http://localhost:3000"
//READ
function fetchProjects(){
    return fetch(`${BASE_URL}/projects`)
      .then(response => response.json())
      .then(projects => {
          console.log(projects)
          for (const project of projects){
            let p = new Project(project.title, project.quote, project.description, project.image_URL, project.location, project.year, project.category_id)
            p.renderProject()
        }
      })
  }

  document.addEventListener('DOMContentLoaded', () => {
   newForm()
    this.fetchProjects()
      .then(results => console.log(results))
  })

  //CREATE
  function newForm(){
      let pForm = document.getElementById("projects-form")
      pForm.addEventListener("submit", pFormSubmit)
}

function pFormSubmit(){
    let title = document.getElementById("title").value
    let quote = document.getElementById("quote").value
    let description = document.getElementById("description").value
    let image_URL = document.getElementById("image_URL").value
    let location = document.getElementById("location").value
    let year = parseInt(document.getElementById("year").value)
    let category_id = document.getElementById("category_id").value
    
    let project = {
        title: title, 
        quote: quote,
        description: description,
        image_URL: image_URL,
        location: location,
        year: year,
        category_id: category_id

    }
    fetch(`${BASE_URL}/projects`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(project)
    })

    .then(response =>  {
        response.json()
        console.log(response)
    })
    .then(json => {
        console.log(json)
        window.location.reload()
    })
    
}
  //update
  //delete
