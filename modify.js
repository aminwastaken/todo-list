function modify(element)
  {
    // on recup l'id de la tache
    const id = element.id.replace("_update", "")
    // on recup ses infos
    fetch('http://localhost:3000/api/task/'+id)
    .then(response => response.json())
    // on remplie le form avec les infos de la tache
    .then((data) => {
      // on recup les elements du form
      let taskName = document.getElementById("taskName")
      let taskDescription = document.getElementById("taskDescription")
      let taskDeadline = document.getElementById("taskDeadline")
      let taskProgression = document.getElementById("taskProgression")     
      
      // On remplie le form avc les valeurs de la taches
      taskName.value = data.name
      taskDescription.value = data.description
      taskDeadline.value = data.deadline
      taskProgression.value = data.progression
      
      // On recup le form et on change sa route
      let form_update = document.getElementById("taskForm").action = "/task/"+id
      let form_list_header = document.getElementById("taskFormHeader").innerHTML = "Update a Task"
      document.getElementById("TaskFormBtn").innerHTML = "Update"
      openFormTask()
    })
    
 }
close #4
