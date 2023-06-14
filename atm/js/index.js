var formulario = document.querySelector('#select-account')


const cuenta = [
    {id: 10, nombre: "rodrigo", saldo: 900, pin: '0000'},
    {id: 24, nombre: "enrique", saldo: 990, pin: '0000'},
    {id: 11, nombre: "miguel", saldo: 200, pin: '0000'},
]

formulario.addEventListener('submit', (event)=> {
    event.preventDefault()
    let pin = prompt("Ingrese su pin","");
        if (pin != null) {
            if (pin === '0000'){
                console.log('Correcto')
            } else {
                console.log('Incorrecto')
            }

            console.log(pin)
        } 
/*     console.log(event.target[0].value) */

}

)


//Pseudocodigo

/* 

1. Seleccionar la cuenta
2. Cuando se seleccione una cuenta se solicitará el pin.
3. Validar el pin ingresado, y si el pin es incorrecto, permitir un nuevo intento. Y si es correcto mostrar menú de opciones.
4. Mostrar menú de opciones (consultar, depositar, retirar)
5. Dependiendo de la opción seleccionada mostrar la pantalla correspondiente.
6. 

*/