const commentBox = [
  "user1@gogo.ro <br><br> ce faci",
  "user2@gogo.ro <br><br> ce mai faci?",
  "user3@gogo.ro <br><br> a inceput razboiul?",
];
//console.log(commentBox);

const commentBoxHtml = document.createElement("ul");
for (let i = 0; i < commentBox.length; i++) {
  const commentBoxValue = commentBox[i];
  const item = commentBox[i];
  const itemCommentBox = makeComment(commentBoxValue);
  itemCommentBox.innerHTML = item;
  commentBoxHtml.appendChild(itemCommentBox);
  const insideButton = document.createElement("button");
  insideButton.innerText = "sterge";
  insideButton.addEventListener("click", function (event) {
    itemCommentBox.parentElement.removeChild(itemCommentBox);
  });
  itemCommentBox.appendChild(insideButton);
  const insideImg = document.createElement("img");
  insideImg.src = "./1844241.png";
  itemCommentBox.appendChild(insideImg);
}
document.body.appendChild(commentBoxHtml);

const toDoButton = document.getElementById("add-new-comment");
const toDoInput = document.getElementById("new-comment");


function makeComment(text) {
  const doComment = document.createElement("li");
  doComment.innerText = text ;
  const newMail = document.createElement('p')
  newMail.innerText= 'user_n@gogu.ro'
  doComment.appendChild(newMail)
  return doComment;
}




toDoButton.onclick = function () {
 
  const newItem = makeComment(toDoInput.value);
  
  const insideButton = document.createElement("button");
  insideButton.innerText = "sterge";
  insideButton.addEventListener("click", function (event) {
    newItem.parentElement.removeChild(newItem);
  });
  newItem.appendChild(insideButton);
  commentBoxHtml.appendChild(newItem);
  const insideImg = document.createElement("img");
  insideImg.src = "./1844241.png";
  newItem.appendChild(insideImg);
};


