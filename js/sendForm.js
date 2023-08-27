const btn = document.querySelector('button');
const inputs = document.querySelector('form');
btn.addEventListener('click', () => {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "korolev2517@gmail.com",
        Password: "71F03EB628C0E0E2346743E8867DB1AF4650",
        To: "xyz@gm.com",
        From: inputs.elements["email"].value,
        Subject: "Contact us",
        Body:  inputs.elements["name"].value + "<br>" + inputs.elements["phone"].value
    }).then(msg => alert('The email successfully sent'))
})

// inputs.elements["message"].value + "<br>" +