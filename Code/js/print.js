// doctor part

if (isDoctor) {
    var doctorName = localStorage.getItem("doctorName");
    var stationNumber = localStorage.getItem("stationNumber");
    var call911 = localStorage.getItem("call911");
    var accident = localStorage.getItem("accident");
    var craeteTime = localStorage.getItem("craeteTime");

    document.getElementById("doctorName").innerHTML = doctorName;
    document.getElementById("stationNumber").innerHTML = stationNumber;
    document.getElementById("call911").innerHTML = call911;
    document.getElementById("accident").innerHTML = accident;
    document.getElementById("craeteTime").innerHTML = craeteTime;

    function doctorPrint() {
        document.querySelector(".form-button").style.display = "none";
        window.print();
        document.querySelector(".form-button").style.display = "flex";
    }
}

// toy part

if (isToy) {
    var toyID = location.href.split("=")[1].replace("#", "").replace("/", "");
    var toyArray = JSON.parse(localStorage.getItem("toyArray"));
    var toyObj = {};
    for (var i = 0; i < toyArray.length; i++) {
        if (toyArray[i].toyID == toyID) {
            toyObj = toyArray[i];
        }
    }
    var toyName = toyObj.toyName;
    var toyAge = toyObj.toyAge;
    var specialCare = toyObj.specialCare;
    var toySex = toyObj.toySex;
    var medicalHistory = toyObj.medicalHistory;
    document.getElementById("toyName").innerHTML = toyName;
    document.getElementById("toyAge").innerHTML = toyAge;
    document.getElementById("specialCare").innerHTML = specialCare;
    document.getElementById("toySex").innerHTML = toySex;
    document.getElementById("medicalHistory").innerHTML = medicalHistory;
    function doctorPrint() {
        document.querySelector(".form-button").style.display = "none";
        window.print();
        document.querySelector(".form-button").style.display = "flex";
    }
}
