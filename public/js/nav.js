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
//saveBtn.addEventListener('click', saveUpdates)

// listeners on checkboxes activate Save btn
/* function listenItems() {
    let itemsA = document.getElementsByClassName('items');
    for (let i = 0; i < itemsA.length; i++) {
        itemsA[i].addEventListener('click', itemClicked)
    }
}
listenItems() */
document.getElementById('allitems').addEventListener('click', itemClicked);
// item clicked
function itemClicked(event) {
    // change
    saveBtn.disabled = false;
//
}
// get checkbox updates and submit
function checkBoxUpdateAndSubmit() {
    let g = document.getElementsByName('gotit');
    let c = document.getElementsByClassName('items');
    for (let i = 0; i < c.length; i++) {
        g.item(i).value = c.item(i).checked;
    }
    document.getElementById('itemForm').submit()
}