var addBtn = document.getElementById("button")
var table = document.getElementById("tabData");
var tbody = document.getElementById('tbody')
// var row = table.insertRow() 
 clients= []
 client = {}

function addClient(username , userid , userbalance) {
    console.log(clients)
    client ={
        name : username,
        id: userid,
        balance : userbalance

    }
    clients.push(client)
   
    console.table(clients)
}
function removeUser(i){
    clients.splice(i , 1)
    showClient()
}

function editBalance(i){
    clients[i].balance = prompt("enter the new balance")
    showClient()
}

function showClient(){
    tbody.textContent = ""

    clients.forEach((item,i)=>{
        var row = document.createElement('tr')
        var td1 = document.createElement('td')
        var td2 = document.createElement('td')
        var td3 = document.createElement('td')
        var td4 = document.createElement('td')
        var td5 = document.createElement('td')
        var removeBtn = document.createElement('button')
        var editBtn = document.createElement('button')
        removeBtn.innerText="remove user"
        editBtn.innerText="edit user"
        td1.innerText = i
        td2.innerText = item.name
        td3.innerText = item.id
        td4.innerText = item.balance
        td5.append(removeBtn)
        td5.append(editBtn)
        row.append(td1)
        row.append(td2)
        row.append(td3)
        row.append(td4)
        row.append(td5)
        tbody.append(row)
        removeBtn.addEventListener('click',function(){
            removeUser(i)
        })
        editBtn.addEventListener('click',function(){
             editBalance(i)
        })

    })
}
addBtn.addEventListener('click', function() {
    var user = prompt("enter User Name")
    var id = prompt("enter id")
    var balance = prompt("enter balance")

    addClient(user, id, balance)
    showClient()

})
