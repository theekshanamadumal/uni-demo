function sendComment(event){

    event.preventDefault()

    emailjs.init("user_ZVVGAOPGRb8NAqB2nHCjI")

    let subject = 'user comment'    ;

    emailjs.send("gmail","template_kvi4ul1",{
        webSite: "Uni-demo blog page",
        visitorName: document.getElementById("commentName").value,  
        visitorEmail: document.getElementById("commentEmail").value,
        subject,
        message: document.getElementById("comment").value
        })

        .then(result => alert('Your comment has been sent. We will reach you sooner.'))
        .catch(err=>alert( 'Oops! try again'))

} 


window.onload=function () {
    document.getElementById('commentBtn').addEventListener("click", sendComment);
    
}