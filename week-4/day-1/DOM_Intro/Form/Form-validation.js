const validate = function() {
    let strDescValidate = "";
    const txtNameErr = "Name must be longer than 2 characters. ";
    const txtSalaryErr = "Salary must be greater than 10,000 but less than 16,000. ";
    const txtBirthDayErr = "Birthday may not be null. ";
    const txtPhoneErr = "Phone must be 10 digits long. ";

    let digits = document.getElementById("txtPhone").value.replace(/\D/g, "");
    let intSalary = parseInt(document.getElementById("txtSalary").value);
    
    if (document.getElementById("txtName").value.length < 2) {
        strDescValidate = strDescValidate + txtNameErr
    }
    if (!(intSalary > 10000 && intSalary < 16000)) {
        strDescValidate = strDescValidate + txtSalaryErr
    }
    if (document.getElementById("txtBirthDay").value == "") {
        strDescValidate = strDescValidate + txtBirthDayErr
    }
    if (digits.length!=10) {
        strDescValidate = strDescValidate + txtPhoneErr
    }
    document.getElementById("validateResult").innerHTML = strDescValidate;
    if (strDescValidate==""){
        document.getElementById("container").style.display = "none";
    }
}


//document block
const btnGo = document.getElementById("btnGo");
btnGo.addEventListener('click',validate)


