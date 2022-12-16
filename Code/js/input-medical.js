function medicalInput() {
    var medicalID = 1;
    var name = document.getElementById("inputName").value;
    var serialCode = document.getElementById("inputSerialCode").value;
    var manufacturer = document.getElementById("inputManufacturer").value;
    var metering = document.getElementById("inputMetering").value;
    var applicability = document.getElementById("inputApplicability").value;

    var medicalArray = [];

    if (localStorage.getItem("medicalArray")) {
        medicalArray = JSON.parse(localStorage.getItem("medicalArray"));
        if (medicalArray && medicalArray.length) {
            medicalID = medicalArray[medicalArray.length - 1].medicalID + 1;
        }
    }

    medicalArray.push({
        medicalID,
        name,
        serialCode,
        manufacturer,
        metering,
        applicability
    });

    localStorage.setItem("medicalArray", JSON.stringify(medicalArray));

    location.href = "./list-medical.html";
}