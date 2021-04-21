const BASE_URL = "http://localhost:3000"
let projectList = document.getElementById('projects-form')
let allProjects = []
const projectsAdapter = new ProjectsAdapter

//READ
  document.addEventListener('DOMContentLoaded', () => {
   newForm()
    projectsAdapter.fetchProjects()
    fetchCategory()
  })

//CREATE
  function newForm(){
      let pForm = document.getElementById("projects-form")
      pForm.addEventListener("submit", projectsAdapter.pFormSubmit)
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

//CATEGORY
function fetchCategory(){
    fetch(`${BASE_URL}/categories`)
    .then(res => res.json())
    .then(data => {
        selectMenu = document.getElementById('selectBar')
        filterMenu = document.getElementById('categoryDropdown')
        console.log(filterMenu)
        data.forEach(
            d => {
                 d.name
                 d.id
                 console.log(d)
             
        selectMenu.innerHTML +=
        `
            <option name= "category_id" value="${d.id}">${d.name}</option>
    
        `
        filterMenu.innerHTML +=
        `
            <option name= "category_id" value="${d.id}">${d.name}</option>
        `
        })
    })
}
    
//FILTER
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
   </ul>`}
        })
    }