// nav tab fn
function openTab(navName) {
    //console.log(tabsA.length)
    const tabsA = document.getElementsByClassName("itemnav")
    for (let i = 0; i < tabsA.length; i++) {
        tabsA[i].style.display = "none";
    }
    document.getElementById(navName).style.display = "block";
}

// listen to item clicks
function listenItems() {
    let itemsA = document.getElementsByClassName('items');
    for (let i=0;i<itemsA.length;i++) {
        itemsA[i].addEventListener('click', itemClicked)
    }
}
listenItems()

// item clicked
function itemClicked(event) {

    let currentItem = event.target
    console.log(currentItem.checked)
}

let saveBtn = document.getElementById('savebtn')
saveBtn.addEventListener('click', saveUpdates)
function saveUpdates(event) {

    let itemsA = document.getElementsByClassName('items')
    console.log(itemsA[0])
   /* for (var cardIndex in cards) {
       
   } */
}