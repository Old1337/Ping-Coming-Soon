
let submit = document.getElementById("submit");

submit.addEventListener("click",validation)

function validation(e) {

    let  email = document.getElementById("email").value;
    let  reg = /^[^]+@[^]+\.[a-z]{2,3}$/;
    let emailActive = document.querySelector(".email")
    let errorMsg = document.querySelector(".error");

    if(email.match(reg)) {
        emailActive.classList.remove("active");
        errorMsg.classList.remove("active")
    }

    else {
       emailActive.classList.add("active");
       errorMsg.classList.add("active")
       e.preventDefault()
    }
}
