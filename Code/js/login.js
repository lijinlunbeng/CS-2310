var doctorInfo = {
    name: "doctor",
    password: "123456"
}

var toyInfo = {
    name: "toy",
    password: "123456"
}

function doctorLogin() {
    var name = document.querySelector("#input-name").value;
    var password = document.querySelector("#input-password").value;
    if (name == doctorInfo.name && password == doctorInfo.password) {
        location.href = "./list-toy.html";
    }
    else {
        alert("login fail");
    }
}

function toyLogin() {
    var name = document.querySelector("#input-name").value;
    var password = document.querySelector("#input-password").value;
    if (name == toyInfo.name && password == toyInfo.password) {
        location.href = "./input-toy.html";
    }
    else {
        alert("login fail");
    }
}