
function getDeleteButton(todoId) {
    
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "delete"
  
    deleteButton.addEventListener("click", function () {
      
      fetch(`${baseUrl}/todos/${todoId}`, {
        method: "DELETE",
      }).then(function () {
        location.reload();
      })
    })
  
    return deleteButton;
  }