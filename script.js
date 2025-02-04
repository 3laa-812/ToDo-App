

//set all variables
let theInput = document.querySelector("input");
let addBtn = document.querySelector(".plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksComleted = document.querySelector(".completed-tasks span");
let tasksStat = document.querySelector(".tasks-stats");
let deleteBtn = document.querySelector(".delete-all");
let taskBox = document.querySelectorAll(" .task-box");
let finishAll = document.querySelector(".finish-all");


//foocus on input field
window.onload = function () {
  theInput.focus();

};


//adding the task
addBtn.onclick = function (){
  //if innput empty
  if (theInput.value === "") {
    swal({
      title: "Alert!",
      text: "You Must Enter Value!",
      icon: "warning",
    });
  } 
  else {
    let noTaskMsg = document.querySelector(".no-tasks");

    //check if span with no tasks msg is exist
    if (document.body.contains(document.querySelector(".no-tasks"))) {
      //remove no tasks msg
      noTaskMsg.remove();
    }

    //creat span element
    let mainSpan = document.createElement("span");
    let deletBtn = document.createElement("span");
    //creat span text
    let text = document.createTextNode(theInput.value);
    let textDel = document.createTextNode("Delete");

    //add text to span
    mainSpan.appendChild(text);
    mainSpan.className = "task-box";

    deletBtn.appendChild(textDel);
    deletBtn.className = "delete";

    //add delete button to main span
    mainSpan.appendChild(deletBtn);
    //add task to cotainer
    tasksContainer.appendChild(mainSpan);

    //empty the input
    theInput.value = "";
    theInput.focus();

    //calculate tasks
    calcTasks();
  }
};



document.addEventListener("click",  (event) => {
  //delete task
  if (event.target.className == "delete") {
    event.target.parentNode.remove();
  }

  //check number task inside the container
  if (tasksContainer.childElementCount == 0) {
    createNoTasks();
  }
  //finish task
  if (event.target.classList.contains("task-box")) {
    event.target.classList.toggle("finished");
  }

  //calculate tasks
  calcTasks();
  
});

// function to creat no tasks
function createNoTasks() {
  //creat msg span element
  let msgSpan = document.createElement("span");
  let msgTxt = document.createTextNode("No Tasks To Show");

  //add text to msg span ele
  msgSpan.appendChild(msgTxt);
  msgSpan.className = "no-tasks";

  tasksContainer.appendChild(msgSpan);
}

//function to calc task
function calcTasks() {
  //calc all tasks
  tasksCount.innerHTML = document.querySelectorAll(
    ".tasks-content .task-box").length;
  //calc completed tasks
  tasksComleted.innerHTML = document.querySelectorAll(
    ".tasks-content .finished").length;
}

deleteBtn.addEventListener("click",function(){
  tasksContainer.innerHTML = '';
  theInput.focus();

});
