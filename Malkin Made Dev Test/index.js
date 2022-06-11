// i had the most fun, and the most frustration with figuring out how to get the drop down with JS.


  this.addEventListener("DOMContentLoaded", () =>{
    const questions = document.querySelectorAll(".question");
    questions.forEach((question) => question.addEventListener("click", () =>{
  
        if(question.parentNode.classList.contains("active")){
            question.parentNode.classList.toggle("active")
        }
    else{
    questions.forEach(question => question.parentNode.classList.remove("active"))
    question.parentNode.classList.add("active")
        }

    }))
}) 
