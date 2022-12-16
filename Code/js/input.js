function doctorInput() {
    var doctorName = document.getElementById("doctorName").value;
    var stationNumber = document.getElementById("stationNumber").value;
    var call911 = document.getElementById("call911").value;
    var accident = document.getElementById("accident").value;
    var craeteTime = document.getElementById("craeteTime").value;

    localStorage.setItem("doctorName", doctorName);
    localStorage.setItem("stationNumber", stationNumber);
    localStorage.setItem("call911", call911);
    localStorage.setItem("accident", accident);
    localStorage.setItem("craeteTime", craeteTime);

    location.href = "./print-doctor.html";
}

function toyInput() {
    var toyID = 1;
    var toyName = document.getElementById("toyName").value;
    var toyAge = document.getElementById("toyAge").value;
    var specialCare = document.getElementById("specialCare").value;
    var toySex = document.getElementById("toySex").value;
    var medicalHistory = document.getElementById("medicalHistory").value;

    

    var toyArray = [];

    if (localStorage.getItem("toyArray")) {
        toyArray = JSON.parse(localStorage.getItem("toyArray"));
        if (toyArray && toyArray.length) {
            toyID = toyArray[toyArray.length - 1].toyID + 1;
        }
    }

    toyArray.push({
        toyID,
        toyName,
        toyAge,
        specialCare,
        toySex,
        medicalHistory
    });

    localStorage.setItem("toyArray", JSON.stringify(toyArray));

    location.href = "./print-toy.html?toyID=" + toyID;
}