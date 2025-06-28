const input = document.getElementById("todo-input");
const btn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

btn.addEventListener("click", function(){
    const value = input.value.trim();

    if(value === "") return;

    const li = document.createElement("li");
    li.textContent = value;

    li.addEventListener("click", function(){
        li.classList.toggle("completed");
    });

    list.appendChild(li);

    input.value = "";

});