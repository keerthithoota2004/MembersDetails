function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "21131a05q2" && password === "21131a05q2") {
        document.getElementById("main").style.display = "none";
        document.getElementById("pageContent").style.display = "block";
    } else {
        alert("Invalid username or password");
    }
}

function edit(button) {
    let row = button.parentNode.parentNode;
    let nameblock = row.cells[0];
    let emailblock = row.cells[1];
    let mobileblock = row.cells[2];
    let roleblock = row.cells[3];
    let branchblock = row.cells[4];
    let nameInput = prompt("Enter the new name:", nameblock.innerHTML);
    let emailInput = prompt("Enter the new email:", emailblock.innerHTML);
    let numberInput = prompt("Enter the new mobile number", mobileblock.innerHTML);
    let roleInput = prompt("Enter the new role", roleblock.innerHTML);
    let branchInput = prompt("enter the branch", branchblock.innerHTML);
    nameblock.innerHTML = nameInput;
    emailblock.innerHTML = emailInput;
    mobileblock.innerHTML = numberInput;
    roleblock.innerHTML = roleInput;
    branchblock.innerHTML = branchInput;
}

function deleted(button) {

    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function add() {

    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let mobile = document.getElementById("numberInput").value;
    let role = document.getElementById("roleInput").value;
    let branch = document.getElementById("branchInput").value;
    let table = document.getElementById("outputTable");
    let new_row = table.insertRow(table.rows.length);
    new_row.insertCell(0).innerHTML = name;
    new_row.insertCell(1).innerHTML = email;
    new_row.insertCell(2).innerHTML = mobile;
    new_row.insertCell(3).innerHTML = role;
    new_row.insertCell(4).innerHTML = branch;
    let data = JSON.parse(localStorage.getItem("data")) || [];
    data.push({
        name,
        email,
        mobile,
        role,
        branch
    });
    localStorage.setItem("members", JSON.stringify(data));

    new_row.insertCell(5).innerHTML = '<button onclick="edit(this)">Edit</button>' + '<button onclick="deleted(this)">Delete</button>';


}