

getTodos().then(function (todos) { 
    const ulHTML = document.createElement("ul");
    for (let i = 0; i < todos.length; i++) {
     
      const itemHTML = createTodo(todos[i].name, todos[i].id);
        const checkBtn = updateTodo(todos[i].id, todos[i].body)
      itemHTML.appendChild(checkBtn)
      const deleteBtn = getDeleteButton(todos[i].id)
      itemHTML.appendChild(deleteBtn);
        


      ulHTML.appendChild(itemHTML);
    }
    document.body.appendChild(ulHTML)
  })
  
  
  function createTodo(text, id) {
    const todoHtml = document.createElement("li")
    todoHtml.innerText = text;
    return todoHtml;
  }
  
  