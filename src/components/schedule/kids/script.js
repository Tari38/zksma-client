let rows = document.getElementsByTagName("tr");
for (let i = 0; i < rows.length; i++) {
    // loop through each row
    // do something with each row
    let cells = rows[i].getElementsByTagName("td"); // get all cells in the current row
    let cellsExceptFirst = Array.prototype.slice.call(cells, 1); // get all cells except for the first one
    let hasData = false; // initialize a flag to indicate if the row has any data
    for (let j = 0; j < cellsExceptFirst.length; j++) {
        // loop through each cell except for the first one
        let cellContent = cellsExceptFirst[j].textContent.trim(); // get the trimmed text content of the cell
        if (cellContent.length > 0) {
            // check if the cell has any data
            hasData = true; // set the flag to true
            break; // exit the loop
        }
    }
    if (hasData) {
        // if the row has any data
        rows[i].style.display = "zks-inner-event-content"; // show the row
    } else {
        // if the row has no data except for the first cell
        rows[i].style.display = "none"; // hide the row
    }
}

let h5 = document.getElementsByClassName("event-title");
    if (h5.innerText === "Little Dragons") {
        document.getElementsByClassName("event-title").style.backgroundColor = "#98FB98";
    } else if 
    (h5.innerText === "Mini Ninjas") {
        document.getElementsByClassName("event-title").style.backgroundColor = "#CC5757";
    } else if 
    (h5.innerText === "Juniors MA") {
        document.getElementsByClassName("event-title").style.backgroundColor = "#A33030";
    } else if
    (h5.innerText === "Teens MA") {
        document.getElementsByClassName("event-title").style.backgroundColor = "#A35E30";
    } else if 
    (h5.innerText === "S.E.N MA") {
        document.getElementsByClassName("event-title").style.backgroundColor = "#fcf26a";
    } else if
    (h5.innerText === "Home Ed MA") {
        document.getElementsByClassName("event-title").style.backgroundColor = "#9ecbf5";        
    } else if
    (h5.innerText === "Schools MA") {
        document.getElementsByClassName("event-title").style.backgroundColor = "#e090f8";
    } else
        h5.innerText = "";
