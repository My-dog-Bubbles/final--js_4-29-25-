console.log("hi")
let task = document.getElementById("task")
let priority = document.getElementById("priority")
let importance = document.getElementById("importance")
let date = document.getElementById("date")
let taskmanager = document.getElementById("taskmanager")
const submit =  document.getElementById("submit")
const remove = document.getElementById("remove")

submit.addEventListener('click',function(){
    console.log(task.value)
    deckList += [task.value] // this is not working (it removes the previous code)
    console.log(deckList)
    for(let i=0; i < deckList; i++){
        i++
    }
    if(importance.value == 'yes'){
        importance.value = true
    } else{
        importance.value = false
    }

    if(priority.value == "high"){
        // add code for formatting
        console.log(priority.value)
    } else if (priority.value == "low"){
        // add code for formatting
        console.log(priority.value)
    } else{
        // add code for formatting
        console.log(priority.value)
    }

    let taskDeck = {
        id: i, // will a task to list then display the index it is at 
        name: task.value,
        priority: priority.value,
        isImportant: importance.value, //ToF stands for true or false
            // I wanna add a function to see if true or false was checked on the check box
        isComplete: YoN, // YoN means yes or no
            // when displayed the user can toggle yes or no (ask mr. Gardener he wants us to toggle this before of after the display)
        date: date.value,
    } 
})

