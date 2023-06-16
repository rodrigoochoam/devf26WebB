var formulario = document.querySelector('#select-account')
const select = document.querySelector('select')
const body = document.querySelector('body')

const cuentas = [
    {id: 10, nombre: "rodrigo", saldo: 900, pin: '0000'},
    {id: 24, nombre: "enrique", saldo: 990, pin: '0000'},
    {id: 11, nombre: "miguel", saldo: 200, pin: '0000'},
]

const validatePIN = (id, pin) => {
    let selected = cuentas.filter(
        (cuenta)=> {
            return cuenta.id === parseInt(id) 
        }  
    )
    console.log(pin, selected)
      if(selected[0].pin === pin) {
        alert('Bienvenido')
        body.innerHTML= ''
      } else {
        alert('Intenta nuevamente')
      }
};




formulario.addEventListener('submit', (event)=> {
    event.preventDefault();
    let user_id = event.target["cuenta"].value;


    let pin = prompt("Ingrese su pin","");
        if (pin != null) {

            validatePIN(user_id, pin)
          /*   if (pin === '0000'){
                console.log('Correcto')
            } else {
                console.log('Incorrecto')
            }

            console.log(pin) */
        } 
/*     console.log(event.target[0].value) */

})

cuentas.forEach((cuenta)=> {
    let option = document.createElement('option');
    option.value = cuenta.id;
    option.innerText = cuenta.nombre;
    select.appendChild(option);


});

{/* <option value="10">Rodrigo</option> */}

//Pseudocodigo

/* 

1. Seleccionar la cuenta
2. Cuando se seleccione una cuenta se solicitará el pin.
3. Validar el pin ingresado, y si el pin es incorrecto, permitir un nuevo intento. Y si es correcto mostrar menú de opciones.
4. Mostrar menú de opciones (consultar, depositar, retirar)
5. Dependiendo de la opción seleccionada mostrar la pantalla correspondiente.
6. 

*/