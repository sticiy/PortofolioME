emailjs.init("2ILr_H8IoFTlQC7Jy");

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const fromName = e.target.name.value;
    const fromEmail = e.target.email.value;
    const message = e.target.message.value;

    emailjs.send("service_aop7tht", "template_bvchb63", {
        from_name: fromName,
        from_email: fromEmail,
        message: message
    }).then((response) => {
        alert("Email berhasil dikirim!");
    }, (error) => {
        alert("Gagal mengirim: " + JSON.stringify(error));
    });
});