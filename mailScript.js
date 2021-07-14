function sendEmail(event) {

    event.preventDefault();

    emailjs.init("user_ZVVGAOPGRb8NAqB2nHCjI")

    emailjs.send("gmail","template_kvi4ul1",{
        webSite: "Uni-demo",
        visitorName: document.getElementById("name").value,
        visitorEmail: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
        })

        .then(result => alert('Your message has been sent. We will reach you sooner.'))
        .catch(err=>alert( 'Oops! try again'))


}



window.onload=function () {
    document.getElementById('mailBtn').addEventListener("click", sendEmail);

}
