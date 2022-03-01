let input1 = document.getElementById("nombre");
let input2 = document.getElementById("apellido");
let input3 = document.getElementById("nota");
input1.onkeyup = () => {
    console.log("keyUp");
};
input2.onkeydown = () => {
    console.log("keyDown");
};
input3.onkeyup = () => {
    console.log("keyUp");
};

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log("Calculando notas");
}

const header = document.createElement("header");
header.innerHTML = "<h1>Desafio JavaScript</h1>";

const body = document.body;

body.appendChild(header);

function redondeo(valor) {
    return Math.round(valor);
}

for (let i = 1; i <= 3; i += 1) {
    let ingresarNombre = prompt("Ingresar Nombre");
    let apellidoIngresado = prompt("Ingresar Apellido");
    let ingresarNota1 = parseFloat(prompt("Ingresar Nota 1"));
    let ingresarNota2 = parseFloat(prompt("Ingresar Nota 2"));
    let ingresarNota3 = parseFloat(prompt("Ingresar Nota 3"));
    let total = parseInt(ingresarNota1 + ingresarNota2 + ingresarNota3);

    if (!isNaN(ingresarNombre, apellidoIngresado)) {
        alert("Ingresar nombres con letras!");
    }
    if (Number.isNaN(ingresarNota1, ingresarNota2, ingresarNota3)) {
        alert("Ingresar notas numericas!");
    }

    alert(
        ` Alumnno  N° ${i}\n Nombre: ${ingresarNombre}\n Apellido: ${apellidoIngresado}\n Nota 1: ${ingresarNota1}\n Nota 2: ${ingresarNota2}\n Nota 3: ${ingresarNota3}\n Resultado de Notas : ${
    ingresarNota1 + ingresarNota2 + ingresarNota3
    }\n Nota Final : ${redondeo(total / 3)}`
    );

    console.log(
        ` Alumnno  N° ${i}\n Nombre: ${ingresarNombre}\n Apellido: ${apellidoIngresado}\n Nota 1: ${ingresarNota1}\n Nota 2: ${ingresarNota2}\n Nota 3: ${ingresarNota3}\n Resultado de Notas : ${
    ingresarNota1 + ingresarNota2 + ingresarNota3
    }\n Nota Final : ${redondeo(total / 3)}`
    );

    /*    document.write(
            " Alumnno  N° " +
            i +
        "<br>" +
        " Nombre: " +
        ingresarNombre +
        "<br>" +
        " Apellido: " +
        apellidoIngresado +
        "<br>" +
        " Nota 1: " +
        ingresarNota1 +
        "<br>" +
        " Nota 2: " +
        ingresarNota2 +
        "<br>" +
        " Nota 3: " +
        ingresarNota3 +
        "<br>" +
        " Resultado de Notas : " +
        (ingresarNota1 + ingresarNota2 + ingresarNota3) +
        "<br>" +
        " Nota Final : " +
        redondeo(total / 3) +
        "<br>" +
        "<hr>"
        ); */

    const alumnos = [{
        id: 0,
        Nombre: ingresarNombre,
        apellido: apellidoIngresado,
        Nota: redondeo(total / 3),
    }, ];

    const aprobados = alumnos.filter((alumnos) => alumnos.Nota >= 6);
    console.log(aprobados);

    const desaprobados = alumnos.filter((alumnos) => alumnos.Nota <= 5);
    console.log(desaprobados);

    let list = document.getElementById("alumnos");

    let personas = [
        "Nombre:" + " " + ingresarNombre,
        "Apellido:" + " " + apellidoIngresado,
        `Nota final: ${redondeo(total / 3)}`,
        "<hr>",
    ];

    for (const persona of personas) {
        let li = document.createElement("li");
        li.innerHTML = persona;
        list.appendChild(li);
    }
}