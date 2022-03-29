
let myLeads = []




const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
console.log(ulEl)
const deleteBtn = document.getElementById("delete")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)
const tabBtn = document.getElementById("tab-btn")


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (i = 0; i < leads.length; i++) {
        
        listItems += `<li>
                        <a href ='${leads[i]}' target = '_blank'>
                            ${leads[i]}
                        </a>
                       </li>`
    }
    
    ulEl.innerHTML = listItems
    }



tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})


deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    let input = document.getElementById("input-el").value
    myLeads.push(input)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    document.getElementById('input-el').value = ''
    console.log(localStorage.getItem("myLeads"))
})



