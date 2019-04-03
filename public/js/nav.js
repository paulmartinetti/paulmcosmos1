// nav tab fn
function openTab(navName) {
    //console.log(tabsA.length)
    const tabsA = document.getElementsByClassName("itemnav")
    for (let i = 0; i < tabsA.length; i++) {
        tabsA[i].style.display = "none";
    }
    document.getElementById(navName).style.display = "block";
}
// define local array to track user activity
const saveBtn = document.getElementById('savebtn');
saveBtn.addEventListener('click', saveUpdates)

// updated items
let updatedItemsA = []

// listeners on checkboxes activate Save btn
function listenItems() {
    let itemsA = document.getElementsByClassName('items');
    for (let i = 0; i < itemsA.length; i++) {
        itemsA[i].addEventListener('click', itemClicked)
    }
}
listenItems()
// item clicked
function itemClicked(event) {
    // change
    saveBtn.disabled = false;
    // save change
    let obj = {}
    obj.gotit = event.target.checked;
    obj.id = event.target.id;
    updatedItemsA.push(obj)
}
//

function saveUpdates(event) {
    console.log(updatedItemsA)
    // call get function
    window.location.href = '/gotit/'+updatedItemsA
}