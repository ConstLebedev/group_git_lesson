
const tabs = document.querySelector('.tabs')
var instance = M.Tabs.init(tabs);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
  });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, );
  });


  const tasks=[];
  const form = document.querySelector("#form")
  const bnt = document.querySelector("#submit")
  bnt.addEventListener('click', add_tasks)

function add_tasks (){
  const tasks = {
    text: form.tasks_texst.value,
    status:false
  }
  tasks.push(task)
  udpat_linst()
}
function cb_changht(event){
  console.log(event.target.checed)
  udpat_linst()
}
function udpat_linst() {
  uncompleted.innarHTML="" 
  completed.innarHTML=""
  for (t of tasks) {
    const item = document.createElement('li')
    item.className = "collection-item"
    item.innerHTML = `<div class="row valign-wrapper">`
  `
<div class="col s1">
  <label>
    <input type="checkbox" ${'checet' ? t.status :""} onclick="udpat_linst()"/>
    <span></span>
  </label>
</div>
<div class="col s10">${t.text}</div>
<div class="right-align">
  <a class="btn-floating red"><i class="material-icons" name="tasks">delete</i></a>
</div>
</div>`

       if(t.status) {
        completed.append(item)
       }else{
        uncompleted.append(item)
       }
       console.log(document.querySelectorAll('input[type="checed"]'))
}
}
