function fetchProjects() {
    return fetch("http://localhost:3000/projects")
      .then(response => response.json())

  };

  document.addEventListener('DOMContentLoaded', () => {
    fetchProjects()
      .then(results => console.log(results));
  });

