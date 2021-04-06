const BASE_URL = "http://localhost:3000"

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



// use label tags for(title:)
  
  //create
//   function fetchProjects(){
//     fetch()
//     .then()
//     .then()
// }
  //update
  //delete