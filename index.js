const input = document.getElementById("todo-input");
const addbutton = document.getElementById("add-button");
const todolists = document.getElementById("todo-lists");

function addtask() {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed", checkbox.checked);
    });


    const span = document.createElement("span");
    span.className = "text";
    span.textContent = text;

    const del = document.createElement("button");
    del.className = "delete";
    del.textContent = 'Delete';

    span.addEventListener("click", function() {
        span.classList.toggle("completed");
    });

    del.addEventListener("click", function() {
        todolists.removeChild(li);
    });
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(del);
    todolists.appendChild(li);
    input.value = "";
    input.focus();

}

   addbutton.addEventListener("click", addtask);
   input.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        addtask();
    }
});