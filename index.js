
const inputTask = document.querySelector(".input-work");
const submit = document.querySelector(".addTask");
const list = document.querySelector(".task");
var lists = document.querySelector(".list-items");


    submit.addEventListener("click", addClick)

function addClick(){


    const createLi = document.createElement("li");
    createLi.classList.add("task");
    createLi.classList.add(".checked");
    lists.append(createLi);
    createLi.innerHTML = inputTask.value;
    const span = document.createElement("span");
    span.innerHTML= '\u00d7';
    createLi.append(span);



    inputTask.value = "";
    saveData();
}

lists.addEventListener("click", doTask);

function doTask(e){

    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if( e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
}

function saveData(){
    localStorage.setItem("data", lists.innerHTML);
}

function showData(){
    lists.innerHTML = localStorage.getItem("data");
}

showData();

