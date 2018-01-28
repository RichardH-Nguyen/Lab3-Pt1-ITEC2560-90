//Clicking the "add" button adds the string in the textbox to the list.
document.getElementById("addItem").addEventListener("click", addToList);
//Hitting enter on the keyboard adds the string in the textbox to the list.
document.getElementById("newListItem").addEventListener("keyup", enterBtnAdd);
//Putting focus on the textarea clears it.
document.getElementById("newListItem").addEventListener("focus", clearOnFocus);

function addToList() {
    var myList = document.getElementById("mylist");
    var newItem = document.createElement("li");
    var textBoxString = document.getElementById("newListItem").value;
    newItem.innerHTML = textBoxString;
    myList.appendChild(newItem);
    
    document.getElementById("newListItem").focus();
}

function clearOnFocus() {
    document.getElementById("newListItem").value ="";

}

function enterBtnAdd() {
    event.preventDefault();
    if (event.keyCode === 13){
        addToList();
        clearOnFocus();
    }
}
