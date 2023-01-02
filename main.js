function validate() {
    let name = document.querySelector('.contact-name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == '' || email.value == '' || msg.value == '') {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name, email, msg) {
    emailjs.send("service_ltl4dt3","template_9i1t3sw",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}

function emptyerror() {
    swal({
        title: 'Error',
        text: 'Please fill all the field',
        icon: 'error',
    })
}
function success() {
    swal({
        title: 'Email Sent',
        text: 'I will do my best to reply to you as soon as possible',
        icon: 'success',
    })
}
