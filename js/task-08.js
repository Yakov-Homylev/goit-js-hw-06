const form = document.querySelector('.login-form');
const formObject = {}

form.addEventListener('submit', formValidation);

function formValidation(event) {
    event.preventDefault()

    const { elements: { email, password } } = event.currentTarget

    if (email.value === "" || password.value === "") {
        return alert("Все поля формы должны быть заполнены!")
    } 

    formObject.email = email.value;
    formObject.password = password.value

    console.log({ email: email.value, password: password.value});
    event.currentTarget.reset();

}
