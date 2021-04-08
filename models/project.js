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
    "<ul>"+
        "<h2>Project: "+ this.title + "</h2>"+
        "<li>"+
            "Quote: "+
            this.quote+
            "</li>"+
            "<li>"+
            "Description: "+ 
            this.description+
            "</li>"+
            "<li>"+
            "Project Image: "+
            "<img src=\""+this.image_URL+"\">"+
            "</li>"+
            "<li>"+
            this.location+
            "</li>"+
            "<li>"+
            this.year+
        "</li>"+
   "</ul>"
    {/* <button class ="delete-button" data-id=${this.id}>Delete Project</button> */}
}
}