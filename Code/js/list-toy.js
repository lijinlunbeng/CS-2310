var toyArray = JSON.parse(localStorage.getItem("toyArray"));

paintFunc();

function noteInput(toyID) {
    var note = prompt("please enter note");
    if (note != undefined) {
        for (var i = 0; i < toyArray.length; i++) {
            if (toyArray[i].toyID == toyID) {
                toyArray[i].note = note;
            }
        }
        localStorage.setItem("toyArray", JSON.stringify(toyArray));
        paintFunc();
    }
}

function paintFunc() {
    var tableHTML = "";
    if (toyArray && toyArray.length) {
        for (var i = 0; i < toyArray.length; i++) {
            tableHTML += "<tr>";
            tableHTML += "<td>" + (i + 1) + "</td>";
            tableHTML += "<td>" + toyArray[i].toyName + "</td>";
            tableHTML += "<td>" + toyArray[i].toyAge + "</td>";
            tableHTML += "<td>" + toyArray[i].specialCare + "</td>";
            tableHTML += "<td>" + toyArray[i].toySex + "</td>";
            tableHTML += "<td>" + toyArray[i].medicalHistory + "</td>";
            tableHTML += "<td>" + (toyArray[i].note ? toyArray[i].note : "") + "<a class='note-link' href='javascript:noteInput(" + toyArray[i].toyID + ")'>Enter</a></td>";
            tableHTML += "</tr>";
        }
    }
    document.querySelector("tbody").innerHTML = tableHTML;
}

function doctorPrint() {
    location.href = "./input-doctor.html";
}