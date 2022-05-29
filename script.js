let cross = document.getElementById("crossButton")
let modal = document.getElementsByClassName("modal")[0]
let consult = document.getElementsByClassName("forma")[0]
cross.onclick = function () {
    console.log("7");
    modal.style.transform = "translateY(-100%)"
}
consult.onclick = function () {
    console.log("7")
    modal.style.transform = "translateY(0%)"
}
