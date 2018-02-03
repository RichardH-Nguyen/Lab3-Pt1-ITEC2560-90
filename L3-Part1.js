//Clicking the "add" button adds the string in the textbox to the list.
document.getElementById("addItem").addEventListener("click", addToList);
//Hitting enter on the keyboard adds the string in the textbox to the list.
document.getElementById("newListItem").addEventListener("keyup", enterBtnAdd);
//Putting focus on the text area clears it.
//document.getElementById("newListItem").addEventListener("focus", clearOnFocus);

function addToList() {
    var myList = document.getElementById("mylist");
    var newItem = document.createElement("li");
    var textBoxString = document.getElementById("newListItem").value;

    //If textbox is empty or user hits enter on an empty textbox, return.
    if(textBoxString === "" || textBoxString === "\n"){
        return;
    }
    else if(textBoxString.length > 50){
        alert("List items can only contain 50 characters or less.");
        return;
    }
    //Otherwise add to list.
    else {
        newItem.innerHTML = textBoxString;
        myList.appendChild(newItem);
        textBoxString = "";
    }

    document.getElementById("newListItem").focus();
}

//listener for clearOnFocus() currently commented out. As requested to not clear input after alert message.
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
