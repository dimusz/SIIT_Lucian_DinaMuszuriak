

const baseUrl = 'http://localhost:3000';

function getTodos() {
  return fetch(`${baseUrl}/todos`)
    .then(function (response) {
      return response.json()
    })
} 

function createToDo(newToDo){
  return fetch(`${baseUrl}/todos`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(newToDo)
  })
}