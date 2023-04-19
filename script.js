document.querySelector(".add-button").onclick = () => {
  if (document.querySelector(".new-task input").value.length === 0) {
      alert("Você não escreveu a sua tarefa")
      document.querySelector(".new-task input").focus()
  } else {
    document.querySelector(".all-tasks").innerHTML += `        
    <div class="task">
      <span class="task-name">
        ${document.querySelector(".new-task input").value}
      </span>
      <button class="delete">
        <img src="./assets/trash.svg" alt="trash-icon">
      </button>
    </div>`

    document.querySelector(".new-task input").value = ""
    document.querySelector(".new-task input").focus()

    let current_tasks = document.querySelectorAll(".delete")
    for (let num = 0; num < current_tasks.length; num++) {
      current_tasks[num].onclick = (event) => {
        event.target.offsetParent.firstElementChild.remove()
      }
    }

    let tasks = document.querySelectorAll(".task")
    for (let num = 0; num < tasks.length; num++) {
      tasks[num].onclick = (event) => {
        if (event.target.className !== "delete") {
          tasks[num].classList.toggle("completed")
        }
      }
    }
  }
}
