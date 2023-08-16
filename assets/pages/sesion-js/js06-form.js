console.log("JS06 - Formulario");

// ----------- Obtenemos la referencia del formulario -----------
// const registerForm = document.getElementById("formulario");

const registerForm = document.forms["registerForm"];

// registerForm.addEventListner ( "click", fncCallback); 
registerForm.addEventListener("submit", (event) => {
    event.preventDefault(); // omitir las acciones por default
    // console.log ( event ); // datos del click
    /* const email = registerForm.elements["email"];
    const birthdate = registerForm.elements["dirthdate"];
    console.log(email.value, birthdate.value); */
    const user = {
        fullname: registerForm.elements["fullname"].value, // String
        email: registerForm.elements["email"].value, // String
        password: registerForm.elements["password"].value, // String
        birthdate: registerForm.elements["birthdate"].value, // String
    }

    const age = calculateAge(user);

    if( age.year < 18 ){
        // alert (`Al rato regresas, aún tienes ${age.year} años`);
        appendAlert(`Al rato regresas, aún tienes ${age.year} años`, 'warning')
      }
});

const calculateAge = ({ birthdate: birthdateStr }) => {
    console.log(birthdateStr); // String AAAA - MM - DD

    // Date
    const today = new Date(); // instancear un objeto
    const birthdate = new Date(birthdateStr); // Objeto con la fecha ingresada

    const difference = today - birthdate;
    console.log(difference); // 937505153326 milisegundos transcurridos
    const age = new Date(difference);
    console.log(age);
    console.log(`Years: ${age.getFullYear() - 1970}`); // 1996 -1970 = 26
    console.log(`Months: ${age.getMonth()}`); // 1996 -1970 = 26
    console.log(`Days: ${age.getDate()}`); // 1996 -1970 = 26
    return {
        year: age.getFullYear() - 1970,
        month: age.getMonth(),
        days: age.getDate(),
    }

}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}
/* 
const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('Nice, you triggered this alert message!', 'success')
    })
} */