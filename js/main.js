const header = document.createElement("header");
header.innerHTML = "<h1>Desafio JavaScript</h1>";

const body = document.body;

body.appendChild(header);

let input1 = document.getElementById("nombre");
let input2 = document.getElementById("apellido");
let input3 = document.getElementById("notaUno");
let input4 = document.getElementById("notaDos");
let input5 = document.getElementById("notaTres");

input1.onkeyup = () => {
    console.log("keyUp");
};
input2.onkeydown = () => {
    console.log("keyDown");
};
input3.onkeyup = () => {
    console.log("keyUp");
};
input4.onkeydown = () => {
    console.log("keyUp");
};
input5.onkeyup = () => {
    console.log("keyUp");
};

function redondeo(valor) {
    return Math.round(valor);
}

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log("Calculando notas");

    for (let i = 1; i <= 1; i += 1) {
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let notaUno = document.getElementById("notaUno").value;

        let notaDos = document.getElementById("notaDos").value;

        let notaTres = document.getElementById("notaTres").value;

        let total = Number(notaUno) + Number(notaDos) + Number(notaTres) / 3;
        //var resultado = Number(numero1)+Number(numero2);

        if (!isNaN(nombre, apellido)) {
            alert("Ingresar nombres con letras!");
        }
        if (Number.isNaN(notaUno, notaDos, notaTres)) {
            alert("Ingresar notas numericas!");
        }

        /*   alert(
                ` Alumnno  N° ${i}\n Nombre: ${ingresarNombre}\n Apellido: ${apellidoIngresado}\n Nota 1: ${ingresarNota1}\n Nota 2: ${ingresarNota2}\n Nota 3: ${ingresarNota3}\n Resultado de Notas : ${
            ingresarNota1 + ingresarNota2 + ingresarNota3
            }\n Nota Final : ${redondeo(total / 3)}`
              ); */

        console.log(
            ` Alumnno  N° ${i}\n Nombre: ${nombre}\n Apellido: ${apellido}\n Nota 1: ${notaUno}\n Nota 2: ${notaDos}\n Nota 3: ${notaTres}\n Nota Final : ${redondeo(
        total / 3
        )}`
        );

        let personas = [
            `Nombre: ${nombre}`,
            `Apellido: ${apellido}`,
            `Nota 1: ${notaUno}`,
            `Nota 2: ${notaDos}`,
            `Nota 3: ${notaTres}`,
            `Nota final: ${redondeo(total / 3)}`,
            "<hr>",
        ];

        const alumnos = [{
            id: 0,
            Nombre: nombre,
            apellido: apellido,
            Nota: redondeo(total / 3),
        }, ];

        const aprobados = alumnos.filter((alumnos) => alumnos.Nota >= 6);
        console.log(aprobados);

        const desaprobados = alumnos.filter((alumnos) => alumnos.Nota <= 5);
        console.log(desaprobados);

        let list = document.getElementById("alumnos");

        for (const persona of personas) {
            let li = document.createElement("li");
            li.innerHTML = persona;
            list.appendChild(li);
        }
    }
}