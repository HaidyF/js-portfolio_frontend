const BASE_URL = "http://localhost:3000"
let projectList = document.getElementById('projects-form')
let allProjects = []

//READ
function fetchProjects(){
    return fetch(`${BASE_URL}/projects`)
      .then(response => response.json())
      .then(projects => {
          projects.forEach(
            project => {
                let p = new Project(project.id, project.title, project.quote, project.description, project.image_URL, project.location, project.year, project.category_id)
                p.renderProject()
                allProjects.push(p)
})
      })
  }

  document.addEventListener('DOMContentLoaded', () => {
   newForm()
    this.fetchProjects()
  })

//CREATE
  function newForm(){
      let pForm = document.getElementById("projects-form")
      pForm.addEventListener("submit", pFormSubmit)
}

function pFormSubmit(event){
    event.preventDefault()
    let title = document.getElementById("title").value
    let quote = document.getElementById("quote").value
    let description = document.getElementById("description").value
    let image_URL = document.getElementById("image_URL").value
    let location = document.getElementById("location").value
    let year = parseInt(document.getElementById("year").value)
    let category_id = document.getElementById("id").value
    
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
    })
    .then(json => {
        console.log(json)
        window.location.reload()
    })
}

//DELETE
  function deleteProject(id){
        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
    
        fetch(`${BASE_URL}/projects/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            alert(json.message)
            window.location.reload()
        })
    }
    
    function filterByCategory(category){
        let categoryProjects = document.getElementById('projectItemList')
        categoryProjects.innerHTML = ""

        allProjects.forEach( p => {
            if ((p.category_id == category.value) || (category.value == 0)){
                categoryProjects.innerHTML +=
        
        "<img src=\""+p.image_URL+"\">"+
      
        `<ul>
        <h2>Project Title: <strong class="title">${p.title}</strong></h2>

            <li>
            Quote: <span class="quote">"${p.quote}."</span>
            </li>
            <li>
            Description: <span class="description">${p.description}</span>
            </li>
            <li>
            Location: <span class="location">${p.location}</span>
            </li>
            <li>
            Year Designed: <span class="year">${p.year}</span>
            </li>
    
        <button class="delete-button" onclick="deleteProject(${p.id})" data-id=${p.id}>Delete Project</button>    
   </ul>`   
            }
        })
    }