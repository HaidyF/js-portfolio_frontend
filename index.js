const BASE_URL = "http://localhost:3000"
//READ
function fetchProjects(){
    return fetch(`${BASE_URL}/projects`)
      .then(response => response.json())
      .then(projects => {
          for (const project of projects){
            let p = new Project(project.id, project.title, project.quote, project.description, project.image_URL, project.location, project.year, project.category_id)
            p.renderProject()
        }
      })
  }

  document.addEventListener('DOMContentLoaded', () => {
   newForm()
    fetchProjects()
      .then(results => console.log(results))
  })

  //CREATE
  function newForm(){
      let pForm = document.getElementById("projects-form")

      pForm.innerHTML +=

    //   <form>
    //     <label for="title">Title:</label> 
    //     <input type="text" id="title"> <br>
    //     <label for="quote">quote:</label> 
    //     <input type="text" id"quote"> <br>
    //     <label for="description">Description:</label> 
    //     <input type="text" id"description"> <br>
    //     <label for="image_URL">Image:</label> 
    //     <input type="text" id"image_URL"> <br>
    //     <label for="location">Location:</label> 
    //     <input type="text" id"location"> <br>
    //     <label for="year">Year Designed:</label> 
    //     <input type="text" id"year"> <br>
    //     <input type="submit" value="Create Project"> <br>
    //   </form>

      pForm.addEventListener("submit", pFormSubmit)
}

function pFormSubmit(){
    let title = document.getElementById("title").value
    let quote = document.getElementById("quote").value
    let description = document.getElementById("description").value
    let image_URL = document.getElementById("image_URL").value
    let location = document.getElementById("location").value
    let year = document.getElementById("year").value

    let project = {
        title: title, 
        quote: quote,
        description: description,
        image_URL: image_URL,
        location: location,
        year: year
    }
    fetch(`${BASE_URL}/projects`, {
        method: "POST", 
        headers: {
            'Accept': 'application/json'
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
    })
    .then(response =>  response.json())
    .then(project => {
        let p = new Project(project.id, project.title, project.quote, project.description, project.image_URL, project.location, project.year, project.category_id)
        p.renderProject()
    })
}
// use label tags for(title:)
 
//   function fetchProjects(){
//     fetch()
//     .then()
//     .then()
// }
  //update
  //delete