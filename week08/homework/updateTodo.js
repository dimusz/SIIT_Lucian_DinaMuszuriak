function updateTodo(todoId, ){
 
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", async () => {
    await fetch(`${baseUrl}/todos/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(),
    });
   
  });
  return checkbox;

}