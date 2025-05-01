console.log("hi")
let task = document.getElementById("task")
let priority = document.getElementById("priority")
let importance = document.getElementById("importance")
let date = document.getElementById("date")
let taskmanager = document.getElementById("taskmanager")
const submit =  document.getElementById("submit")

let deckList = []
console.log('decklist',deckList.length)

submit.addEventListener('click',function(){

    const table = document.createElement('table')
    table.setAttribute('id','display')
    const display = document.getElementById('display')

    const colA = document.createElement('tr')
    colA.setAttribute('id','main')
    const row1A = document.createElement('td')
    row1A.setAttribute('id','data1')
    const row2A = document.createElement('td')
    row2A.setAttribute('id','data2')
    const row3A = document.createElement('td')
    row3A.setAttribute('id','data3')

    taskmanager.appendChild(table)
    table.appendChild(colA)
    colA.appendChild(row1A)
    colA.appendChild(row2A)
    colA.appendChild(row3A)

    const complete = document.createElement('input')
    complete.labels = 'done'
    complete.type = 'checkbox'

    ifImportant = importance.checked 
    console.log(ifImportant)
    console.log(task.value)

    if(ifImportant == true){
        document.getElementById('data1').style.backgroundColor ='red'
        document.getElementById('data2').style.backgroundColor ='red'
        document.getElementById('data3').style.backgroundColor ='red'
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
    fin = 'Done'
    task.id=deckList.length+1

    const remove = document.createElement('button')
    remove.append('Delete')

    row1A.append(task.value)
    row2A.append(priority.value)
    row3A.append(complete,fin,remove)

    let i = 0
    console.log('decklist',deckList.length , 'deck+1',deckList.length+1) 
    for(i; i<deckList.length;i++){
        console.log(deckList[i])
    }


    let taskDeck = {
        id: task.id, 
        name: task.value,
        priority: priority.value,
        isImportant: ifImportant,
        isComplete: complete.checked, 
        date: "date.value",
    } 
    deckList[i]=taskDeck // adds task to task deck
    console.log(deckList[i])
    console.log(JSON.stringify(deckList))

    complete.addEventListener('change',function (){
        if(complete.checked==true){
            document.getElementById('data1').style.textDecoration ='line-through'
            document.getElementById('data2').style.textDecoration ='line-through'
            document.getElementById('data3').style.textDecoration ='line-through'
        }
    })
    remove.addEventListener('click',function(){
        table.removeChild(colA)
    })
})


