const reservations3 = {
    Bob: { claimed: false },
    Ted: { claimed: true },
    Jonn: { claimed: true }
}

const onRequestReservation = function(){
let nameGuest  = document.getElementById("fname").value
    if (!(reservations3[nameGuest] === undefined)) {
    if (reservations3[nameGuest].claimed === false) {
        document.getElementById("result").innerHTML = "Wellcome '" + nameGuest + "'"
    }
    else {
        document.getElementById("result").innerHTML = "Hmm, someone already claimed this reservation '" + nameGuest + "'"
    }
} else {
    document.getElementById("result").innerHTML = "No reservation for '" + nameGuest + "'"
}
}
//
document.getElementById("reserv").onclick = onRequestReservation