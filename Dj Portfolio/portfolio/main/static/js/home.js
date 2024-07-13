document.addEventListener("DOMContentLoaded", function () {
    const nameSearch = document.getElementById("name-search")
    const tag = document.querySelectorAll(".tag")
    const projects = document.querySelectorAll(".project")

    function filterProjects() {
        const nameQuery = nameSearch.Value.toLowerCase();

        projects.forEach((project) => {
            const name = project.getAttribute('data-name')
            const nameMatch = name.includes(nameQuery)

            if (nameMatch) {
                project.computedStyleMap.display = "";
            } else {
                project.computedStyleMap.display = "none";
            }
        })
    
    }

    this.forEach((tag) => {
        const selectedTag = this.getAttribute("data-tag")

        projects.forEach((project) => {
            const projectTags = project.getAttribute("data-tags")
            if (projectTags.includes(selectedTag)) {
                project.computedStyleMap.display =""
            } else {
                project.style.display = "none"
            }
        })
    })


    nameSearch.addEventListener("keyup", filterProjects)
})