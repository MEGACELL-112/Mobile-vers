let formType = "subscribe"
let cross = document.getElementById("crossButton")
let modal = document.getElementsByClassName("modal")[0]
let consult = document.getElementsByClassName("forma")[0]
let consult2 = document.getElementsByClassName("forma")[1]
let consult3 = document.getElementsByClassName("forma")[2]
let area = document.getElementById("askQuestion")
let social = document.getElementsByClassName("social")[0]
let question = document.getElementsByClassName("question")[0]
let zap = document.getElementsByClassName("zap")[0]
let link = document.getElementsByClassName("link")[0]
let price = document.getElementsByClassName("price")[0]
let questions = document.getElementsByClassName("priceList")[0]
let questions2 = document.getElementsByClassName("priceList")[1]
console.log(questions, consult);
let linkWay = document.getElementsByClassName("linkWay")[0]
let linkWay2 = document.getElementsByClassName("linkWay")[1]
let linkWay3 = document.getElementsByClassName("linkWay")[2]
let customerName = document.getElementsByClassName("name")[0]
let customerSurname = document.getElementsByClassName("surname")[0]
let customerSocials = document.getElementsByClassName("customerSocial")[0]
let ask = document.getElementsByClassName("ask")[0]
let avatar = document.getElementsByClassName("avatar")[0]
let commentModal = document.getElementsByClassName("commentModal")[0]
let formData;
let customerContact = document.getElementsByClassName("customerContact")[0]
let commentP = document.getElementsByClassName("commentP")[0]
let feedbackSlider = document.getElementsByClassName("feedbackSlider")[0]
let circles = document.getElementsByClassName("circle")
let slideWidth = feedbackSlider.children[0].offsetWidth
console.log(slideWidth);
feedbackSlider.onscroll = function () {
    // console.log(Math.floor(feedbackSlider.scrollLeft / slideWidth));
    // let sliderPosition = feedbackSlider.scrollLeft
    let circleNumber = Math.floor(feedbackSlider.scrollLeft / slideWidth)%3
    let activeCircle = document.getElementsByClassName("activeCircle")[0]
    activeCircle.classList.remove("activeCircle")
    circles[circleNumber].classList.add("activeCircle")
}
function openComment(event){
    console.log(event.target);
    commentModal.style.transform = "translateY(0%)"
    commentP.innerHTML = event.target.previousElementSibling.innerHTML
}
commentModal.onclick = function () {
    commentModal.style.transform = "translateY(-100%)"
}
cross.onclick = function () {
    console.log("7");
    modal.style.transform = "translateY(-100%)"
}
consult.onclick = function () {
    handleConsult()
}
consult2.onclick = function () {
    handleConsult()
}
consult3.onclick = function () {
    area.style.display = "none";
    modal.style.transform = "translateY(0%)"
    zap.style.display = "block";
    social.style.display = "none";
    question.style.display = "none";
    link.style.display = "none";
    price.style.display = "none";
    formType = "subscribe";
}
function handleConsult () {
    area.style.display = "none";
    modal.style.transform = "translateY(0%)"
    zap.style.display = "block";
    social.style.display = "none";
    question.style.display = "none";
    link.style.display = "none";
    price.style.display = "none";
    formType = "subscribe";
}
ask.onclick = function () {
    modal.style.transform = "translateY(0%)"
    area.style.display = "block";
    zap.style.display = "none";
    link.style.display = "none";
    price.style.display = "none";
    social.style.display = "none";
    formType = "askQuestion";
    question.style.display = "block";
}
questions.onclick = function () {
    modal.style.transform = "translateY(0%)"
    area.style.display = "block";
    zap.style.display = "none";
    link.style.display = "none";
    price.style.display = "none";
    social.style.display = "none";
    formType = "askQuestion";
    question.style.display = "block";
}
questions2.onclick = function () {
    modal.style.transform = "translateY(0%)"
    area.style.display = "block";
    zap.style.display = "none";
    link.style.display = "none";
    price.style.display = "none";
    social.style.display = "none";
    formType = "askQuestion";
    question.style.display = "block";
}
linkWay.onclick = function () {
    price.style.display = "none";
    zap.style.display = "none";
    question.style.display = "none";
    area.style.display = "none";
    social.style.display = "block";
    link.style.display = "block";
    modal.style.transform = "translateY(0%)";
    formType = "contact";
}
linkWay2.onclick = function () {
    price.style.display = "none";
    zap.style.display = "none";
    question.style.display = "none";
    area.style.display = "none";
    social.style.display = "block";
    link.style.display = "block";
    modal.style.transform = "translateY(0%)";
    formType = "contact";
}
linkWay3.onclick = function () {
    price.style.display = "none";
    zap.style.display = "none";
    question.style.display = "none";
    area.style.display = "none";
    social.style.display = "block";
    link.style.display = "block";
    modal.style.transform = "translateY(0%)";
    formType = "contact";
}
avatar.style.height = avatar.offsetWidth+"px"
function sendEmail (event){
    // event.preventDefault()
    if (formType == "askQuestion") {
        formData = {
            "customerName": "Имя: " + customerName.value,
            "customerSurname": "Фамилия: " + customerSurname.value,
            "cutomerQuestion": "Вопрос: " + area.value,
            "customerSocial": "Инстаграмм Аккаунт: " + customerSocials.value,
            "customerContacts": "Контакты: " + customerContact.value,
            "customerMassenger": "Удобный способ связи: " + document.querySelector("input[name = 'app']:checked").value,
        }
    }
    else {
        formData = {
            "customerName": "Имя: " + customerName.value,
            "customerSurname": "Фамилия: " + customerSurname.value,
            "customerSocial": "Инстаграмм Аккаунт: " + customerSocials.value,
            "customerContacts": "Контакты: " + customerContact.value,
            "customerMassenger": "Удобный способ связи: " + document.querySelector("input[name = 'app']:checked").value,
        }
    }
    console.log(formData);
    $.ajax({
        beforeSend: function (xhr, settings) {
            if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
                xhr.setRequestHeader("X-CSRFToken", token);
            }
        },
        url: "/sendEmail/",
        type: "POST",
        data: formData,
        success: function (json) {
            console.log("ORDER HAS MADE");
        },
        error: function (json) {
            console.log("ORDER ERROR");
        },
    });

}
