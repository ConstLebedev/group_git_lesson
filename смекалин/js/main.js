
const tabs = document.querySelector('.tabs')
var instance = M.Tabs.init(tabs);

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems,);
});
JSON.parse(localStorage.getItem("tasks")) || []
const tasks =  [];
const form = document.querySelector("#form")
const bnt = document.querySelector("#submit")
const uncompleted = document.querySelector("#tasks > .collection")
const completed = document.querySelector("#completed > .collection")
bnt.addEventListener('click', add_tasks)

function add_tasks() {
  const task = {
    text: form.tasks_text.value,
    status: false
  }
  tasks.push(task)
  udpat_linst()
  localStorage.setItem('tasks',JSON.stringify(tasks))
}
function cb_changht(index) {
  tasks[index].status = !tasks[index].status
  udpat_linst()
}
function udpat_linst() {
  uncompleted.innerHTML = ""
  completed.innerHTML = ""
  for (let i = 0; i < tasks.length; i++) {
    t = tasks[i]
    const item = document.createElement('li')
    item.className = "collection-item"
    item.innerHTML = `<div class="row valign-wrapper">
  <div class="col s1">
  <label>
    <input type="checkbox" ${t.status ? 'checked' : ''} onclick="cb_changht(${i})"/>
    <span></span>
  </label>
</div>
<div class="col s10">${t.text}</div>
<div class="right-align">
  <a class="btn-floating red delete-bin"><i class="material-icons" onclick="delete_tasks(${i})" name="tasks">delete</i></a>
</div>
</div>`

    if (t.status) {
      completed.append(item)
    } else {
      uncompleted.append(item)
    }
  }

}



function delete_tasks(index) {
  tasks.splice(index, 1)
  udpat_linst()
  localStorage.setItem('tasks',JSON.stringify(tasks))
}