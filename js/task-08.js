const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password } } = event.currentTarget;
    
        const userEmail = email.value;
        const userPassword = password.value;


    if (email.value === "" || password.value === "") {
        return alert("Please, fill in all inputs");
    }
    // console.dir(`Email: ${email.value} \n Password: ${password.value}`);
        const formData2 = {
        userEmail,
        userPassword,
    };
    console.log(formData2);
    event.currentTarget.reset();

}
