const inputNewTask = document.querySelector('.input-new-task') 
const btnAddTask = document.querySelector('.btn-add-task')
const btnRmvTask = document.querySelector('.btn-rmv-task')
const ulTasks = document.querySelector('.ul-tasks')

inputNewTask.addEventListener('keypress', function(e) {
   if (e.keyCode === 13) {
      if (!inputNewTask.value) return;
      criaTask(inputNewTask.value);
   }
})

btnAddTask.addEventListener('click', function() {
   if (!inputNewTask.value) return;
   criaTask(inputNewTask.value);
})

document.addEventListener('click', function(e) {
   const el = e.target;
   if (el.classList.contains('apagar')) {
      el.parentElement.remove();
      salvarTasks();
   }
});

function limpaInput() {
   inputNewTask.value = '';
   inputNewTask.focus();
}

function criaLi() {
   const li = document.createElement('li');
   return li
}

function criaBotaoApagar(li) {
   li.innerHTML += ' ';
   const botaoApagar = document.createElement('button');
   botaoApagar.innerHTML = 'Apagar';
   botaoApagar.setAttribute('class', 'apagar');
   li.appendChild(botaoApagar);
}

function criaTask(textInput) {
   const li = criaLi();
   li.innerHTML = textInput;
   ulTasks.appendChild(li);
   limpaInput();
   criaBotaoApagar(li);
   salvarTasks();
}

function salvarTasks() {
   const liTasks = ulTasks.querySelectorAll('li');
   const listTasks = [];

   for (let task of liTasks) {
      let taskText = task.innerText;
      taskText = taskText.replace(' Apagar', '');
      listTasks.push(taskText);
   }
   const tasksJSON = JSON.stringify(listTasks);
   localStorage.setItem('tasks', tasksJSON)
}

function restauraTaks() {
   const tasks = localStorage.getItem('tasks');
   const listTasks = JSON.parse(tasks);

   for (let task of listTasks) {
      criaTask(task);
   }
}
restauraTaks();