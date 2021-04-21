class ProjectsAdapter{
    constructor(){
        this.BASE_URL = "http://localhost:3000/projects"
    }

    fetchProjects(){
        fetch(this.BASE_URL)
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

    
    pFormSubmit(event){
        event.preventDefault()

        let title = document.getElementById("title").value
        let quote = document.getElementById("quote").value
        let description = document.getElementById("description").value
        let image_URL = document.getElementById("image_URL").value
        let location = document.getElementById("location").value
        let year = parseInt(document.getElementById("year").value)
        let category_id = document.getElementById("id").value
        
        let project = {
            title, 
            quote,
            description,
            image_URL,
            location,
            year,
            category_id
        }

        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(project)
        }
        
        fetch("http://localhost:3000/projects", configObj)
        .then(res => res.json())
        .then(project => { 
            let p = new Project(project.id, project.title, project.quote, project.description, project.image_URL, project.location, project.year, project.category_id)
            p.renderProject()})
            let prForm = document.getElementById("projectForm")
            prForm.reset()
    }

}