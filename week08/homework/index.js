

const baseUrl = 'http://localhost:3000';

function getTodos() {
  return fetch(`${baseUrl}/todos`)
    .then(function (response) {
      return response.json()
    })
} 

async function getProducts() {
  // v1
  // return fetch('https://fakestoreapi.com/products')
  //   .then(res => {
  //     return res.json()
  //   })
  // v2
  const response = await fetch('https://fakestoreapi.com/products')
  const products = await response.json();
  return products;
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