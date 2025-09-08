const input = document.getElementById("todo-input");
const addbutton = document.getElementById("add-button");
const todolists = document.getElementById("todo-lists");

function addtask() {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = 'checkbox';

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            span.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
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