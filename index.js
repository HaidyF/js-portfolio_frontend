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
  };

  document.addEventListener('DOMContentLoaded', () => {
    fetchProjects()
      .then(results => console.log(results));
  });

  
  //create
//   function fetchProjects(){
//     fetch()
//     .then()
//     .then()
// }
  //update
  //delete