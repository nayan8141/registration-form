var Submit = document.getElementById("Submit");
Submit.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var gender = document.getElementById("gender").value;

    if (!name || !email || !website || !gender) {
        alert("Please fill all the boxes");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = website;
    cell4.innerHTML = gender;

    row++;

}