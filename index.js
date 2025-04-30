console.log("hi")
let task = document.getElementById("task")
let priority = document.getElementById("priority")
let importance = document.getElementById("importance")
let date = document.getElementById("date")
let taskmanager = document.getElementById("taskmanager")
const submit =  document.getElementById("submit")
const remove = document.getElementById("remove")
remove.style.display = "none";
a=0;
b=0;
let deckList = [{'yup':'nooo',a:0,b:3}]
console.log('decklist',deckList.length)
submit.addEventListener('click',function(){
    ifImportant = importance.checked 
    console.log(ifImportant)
    console.log(task.value)

    // add a table to show the task name, date, if the task is completed, if the user wants to delete a task
    if(ifImportant == true){
        // add css styleing 
        console.log(ifImportant)
    }

    if(priority.value == "high"){
        // add code for formatting
        // value.style
        console.log(priority.value)
    } else if (priority.value == "low"){
        // add code for formatting
        console.log(priority.value)
    } else{
        // add code for formatting
        console.log(priority.value)
    }
    
    // let row = document.createElement('tr')
    // document.appendChild("row")

    let i = 0
    console.log('decklist',deckList.length , 'deck+1',deckList.length+1) 
    for(i; i<deckList.length;i++){
        console.log(deckList[i])
    }

    let taskDeck = {
        id: i+1, 
        name: task.value,
        priority: priority.value,
        isImportant: ifImportant,
        isComplete: "YoN", // YoN means yes or no
            // when displayed the user can toggle yes or no (ask mr. Gardener he wants us to toggle this before of after the display)
        date: "date.value",
    } 
    deckList[i]=taskDeck // adds task to task deck
    console.log(deckList[i])
    console.log(JSON.stringify(deckList))
})


