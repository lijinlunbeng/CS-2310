var medicalArray = JSON.parse(localStorage.getItem("medicalArray"));

paintFunc();

function medicalDelete(medicalID) {
    if (confirm("confirm delete?")) {
        for (var i = 0; i < medicalArray.length; i++) {
            if (medicalArray[i].medicalID == medicalID) {
                medicalArray.splice(i, 1);
            }
        }
        localStorage.setItem("medicalArray", JSON.stringify(medicalArray));
        paintFunc();
    }
}

function paintFunc() {
    var tableHTML = "";
    if (medicalArray && medicalArray.length) {
        for (var i = 0; i < medicalArray.length; i++) {
            tableHTML += "<tr>";
            tableHTML += "<td>" + (i + 1) + "</td>";
            tableHTML += "<td>" + medicalArray[i].name + "</td>";
            tableHTML += "<td>" + medicalArray[i].serialCode + "</td>";
            tableHTML += "<td>" + medicalArray[i].manufacturer + "</td>";
            tableHTML += "<td>" + medicalArray[i].metering + "</td>";
            tableHTML += "<td>" + medicalArray[i].applicability + "</td>";
            tableHTML += "<td><a class='note-link' href='javascript:medicalDelete(" + medicalArray[i].medicalID + ")'>Delete</a></td>";
            tableHTML += "</tr>";
        }
    }
    document.querySelector("tbody").innerHTML = tableHTML;
}

function medicalAdd() {
    location.href = "./input-medical.html";
}