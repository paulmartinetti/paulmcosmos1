// nav tab fn
function openTab(navName) {
    //console.log(tabsA.length)
    const tabsA = document.getElementsByClassName("itemnav")
    for (let i = 0; i < tabsA.length; i++) {
        tabsA[i].style.display = "none";
    }
    document.getElementById(navName).style.display = "block";
}

// save btn state
const saveBtn = document.getElementById('savebtn');
document.getElementById('allitems').addEventListener('click', itemClicked);
// item clicked
function itemClicked(event) {
    // change
    saveBtn.disabled = false;
}

// get checkbox updates and POST form name-value pairs
function checkBoxUpdateAndSubmit() {
    let g = document.getElementsByName('gotit');
    let c = document.getElementsByClassName('items');
    for (let i = 0; i < c.length; i++) {
        g.item(i).value = c.item(i).checked;
    }
    document.getElementById('itemForm').submit()
}