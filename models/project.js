class Project {
    constructor(title, quote, description, image_URL, location, year, category_id) {
        this.title = title
        this.quote = quote
        this.description = description
        this.image_URL = image_URL
        this.location = location
        this.year = year
        this.category_id = category_id
    }

    renderProject(){
        let pDiv = document.getElementById("projects-container")
        pDiv.innerHTML +=
        
        "<img src=\""+this.image_URL+"\">"+
      
        `<ul>
        <h2>Project Title: <strong class="title">${this.title}</strong></h2>

            <li>
            Quote: <span class="quote">${this.quote}</span>
            </li>
            <li>
            Description: <span class="description">${this.description}</span>
            </li>
            <li>
            Location: <span class="location">${this.location}</span>
            </li>
            <li>
            Year Designed: <span class="year">${this.year}</span>
            </li>
        <li>
        <button class ="delete-button" data-id=${this.id}>Delete Project</button>
        </li>
   </ul>`
    
}
}