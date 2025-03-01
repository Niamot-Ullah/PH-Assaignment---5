let count = 0;


// task1
document.getElementById('task1').addEventListener('click',function(event){
    event.preventDefault();
// alert 
    alert('Board Updated Successfully');
// taskAssigned
    let taskAssigned = getTextValue('taskAssigned');
    let updatedValue = taskAssigned - 1;
    document.getElementById('taskAssigned').innerText = updatedValue;
// completed Task 
    let completedTask = getTextValue('completedTask');
    let updatedTask = completedTask + 1;
    document.getElementById('completedTask').innerText = updatedTask
// activity log 
    let div = document.createElement('div');
    let newDate = new Date()
    div.innerHTML = `
    <p class="bg-slate-300 my-3   py-1 px-3 rounded-lg">You have completed the task Fix Mobile Button Issue at ${newDate}</p>
`
        let historyAdd = document.getElementById('historyAdd');
    historyAdd.appendChild(div)
// button disable 
    this.disabled = true;


    count=count+1;
    return count
})

// task2
document.getElementById('task2').addEventListener('click',function(event){
    event.preventDefault();
// alert 
    alert('Board Updated Successfully');
// taskAssigned
    let taskAssigned = getTextValue('taskAssigned');
    let updatedValue = taskAssigned - 1;
    document.getElementById('taskAssigned').innerText = updatedValue;
// completed Task 
    let completedTask = getTextValue('completedTask');
    let updatedTask = completedTask + 1;
    document.getElementById('completedTask').innerText = updatedTask
// activity log 
    let div = document.createElement('div');
    let newDate = new Date()
    div.innerHTML = `
    <p class="bg-slate-300 my-3 py-1 px-3 rounded-lg">You have completed the task Add Dark Mode at ${newDate}</p>
`
        let historyAdd = document.getElementById('historyAdd');
    historyAdd.appendChild(div)
// button disable 
    this.disabled = true;
})

// task3
document.getElementById('task3').addEventListener('click',function(event){
    event.preventDefault();
// alert 
    alert('Board Updated Successfully');
// taskAssigned
    let taskAssigned = getTextValue('taskAssigned');
    let updatedValue = taskAssigned - 1;
    document.getElementById('taskAssigned').innerText = updatedValue;
// completed Task 
    let completedTask = getTextValue('completedTask');
    let updatedTask = completedTask + 1;
    document.getElementById('completedTask').innerText = updatedTask
// activity log 
    let div = document.createElement('div');
    let newDate = new Date()
    div.innerHTML = `
    <p class="bg-slate-300 my-3  py-1 px-3 rounded-lg">You have completed the task Optimize Home page at ${newDate}</p>
`
        let historyAdd = document.getElementById('historyAdd');
    historyAdd.appendChild(div)
// button disable 
    this.disabled = true;
})

// task4
document.getElementById('task4').addEventListener('click',function(event){
    event.preventDefault();
// alert 
    alert('Board Updated Successfully');
// taskAssigned
    let taskAssigned = getTextValue('taskAssigned');
    let updatedValue = taskAssigned - 1;
    document.getElementById('taskAssigned').innerText = updatedValue;
// completed Task 
    let completedTask = getTextValue('completedTask');
    let updatedTask = completedTask + 1;
    document.getElementById('completedTask').innerText = updatedTask
// activity log 
    let div = document.createElement('div');
    let newDate = new Date()
    div.innerHTML = `
    <p class="bg-slate-300 my-3   py-1 px-3 rounded-lg">You have completed the task Fix Mobile Button Issue at ${newDate}</p>
`
        let historyAdd = document.getElementById('historyAdd');
    historyAdd.appendChild(div)
// button disable 
    this.disabled = true;
})

// task5
document.getElementById('task5').addEventListener('click',function(event){
    event.preventDefault();
// alert 
    alert('Board Updated Successfully');
// taskAssigned
    let taskAssigned = getTextValue('taskAssigned');
    let updatedValue = taskAssigned - 1;
    document.getElementById('taskAssigned').innerText = updatedValue;
// completed Task 
    let completedTask = getTextValue('completedTask');
    let updatedTask = completedTask + 1;
    document.getElementById('completedTask').innerText = updatedTask
// activity log 
    let div = document.createElement('div');
    let newDate = new Date()
    div.innerHTML = `
    <p class="bg-slate-300 my-3   py-1 px-3 rounded-lg">You have completed the task Integrate OpenAI API at ${newDate}</p>
`
        let historyAdd = document.getElementById('historyAdd');
    historyAdd.appendChild(div)
// button disable 
    this.disabled = true;
})

// task6
document.getElementById('task6').addEventListener('click',function(event){
    event.preventDefault();
// alert 
    alert('Board Updated Successfully');
// taskAssigned
    let taskAssigned = getTextValue('taskAssigned');
    let updatedValue = taskAssigned - 1;
    document.getElementById('taskAssigned').innerText = updatedValue;
// completed Task 
    let completedTask = getTextValue('completedTask');
    let updatedTask = completedTask + 1;
    document.getElementById('completedTask').innerText = updatedTask
// activity log 
    let div = document.createElement('div');
    let newDate = new Date()
    div.innerHTML = `
    <p class="bg-slate-300 my-3  py-1 px-3 rounded-lg">You have completed the task Improve Job searching at ${newDate}</p>
`
        let historyAdd = document.getElementById('historyAdd');
    historyAdd.appendChild(div)
// button disable 
    this.disabled = true;
})

console.log(count)