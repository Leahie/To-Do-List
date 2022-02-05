let toDo = [];
while (true) {
    let input = prompt("What would you like to do (type options to show commands): ").toLowerCase();
    if (input === "new") {
        newItem = prompt("What would you like to add? ");
        toDo.push(newItem);
        console.log(`${newItem} has been added to the toDo`)
    }
    if (input === "list") {
        console.log("showing list. . . .");
        console.log("****************");
        for (let i = 1; i <= toDo.length; i++) {
            console.log(`${i}: ${toDo[i]}`);
        }
        console.log("****************");
    }
    if (input === "delete") {
        deleteItem = prompt("Which item would you like to delete, type the number: ");
        console.log(`You have deleted ${toDo[deleteItem - 1]}`);
        toDo.slice(deleteItem - 1, 1);
    }
    if (input === "quit") {
        break;
    }
    if (input == "options") {
        alert("new: New list item\nlist: List of items\ndelete: Delete a list item\nquit: Quit")
    }
}