let table = document.querySelector("table");
let addBtn = document.querySelector(".get-datas");
let deleteBtn = document.querySelector(".delete-datas");

addBtn.addEventListener("click", function(){
    getPosts();
}) 

deletBtn.addEventListener("click", function () {
    dltBtn();
  });
  


async function getPosts() {
    let posts = await fetch("https://jsonplaceholder.typicode.com/comments")
    let result = await posts.json();


        result.forEach((element) => {
            table.innerHTML += `<td>${element.UserId}</td>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.body}</td>
            `;
          })

          function dltBtn() {
            table.innerHTML = "";
          }
        }

        
