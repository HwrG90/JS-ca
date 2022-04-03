const header = document.createElement("header");
header.innerHTML = "<h1>Desafio JavaScript</h1>";

const body = document.body;

body.appendChild(header);

let input1 = document.getElementById("nombre");
let input2 = document.getElementById("apellido");
let input3 = document.getElementById("notaUno");
let input4 = document.getElementById("notaDos");
let input5 = document.getElementById("notaTres");

input1.onkeyup = () => {};
input2.onkeydown = () => {};
input3.onkeyup = () => {};
input4.onkeydown = () => {};
input5.onkeyup = () => {};

function redondeo(valor) {
  return Math.round(valor);
}

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);
/* librerias */
moment.locale("es");
let times = moment().format("llll");

const time = document.getElementById("time");
setInterval(() => {
  time.innerHTML = times;
}, 1000);
console.log(moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a"));

/* Ajax & Fetch */
const mostrarHTML = (aln) => {
  const alumnosLista = document.querySelector("#alumnosLista");

  let html = "";

  aln.forEach((est) => {
    const {
      nombre,
      apellido,
      escuela,
      asignatura
    } = est;
    html += `
        <p> Alumno: ${nombre} ${apellido} </p><br>
        <p> Asignatuta: ${asignatura}</p> <br>
        <p> Escuela: ${escuela}</p>
        <hr/>
        `;
  });
  alumnosLista.innerHTML = html;
};

const datosEstudiantes = () => {
  fetch("../data/datos.json")
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      mostrarHTML(datos);
    })
    .catch((err) => {
      console.log(err);
    });
};

let btnSearch = document.querySelector("#btnSearch");
btnSearch.addEventListener("click", datosEstudiantes);

/*---------------------------------------------------------------------------------------------------------------- */
const btnCalcular = document.querySelector("#btn");
btnCalcular.addEventListener("click", function () {
  Toastify({
    text: "Calculando!",
    duration: 3000,
    gravity: "down",
    position: "right",
    style: {
      background: "linear-gradient(to right, grey,black)",
    },
  }).showToast();
});
/* librerias  */
function validarFormulario(e) {
  e.preventDefault();

  for (let i = 1; i <= 1; i += 1) {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let notaUno = document.getElementById("notaUno").value;
    let notaDos = document.getElementById("notaDos").value;
    let notaTres = document.getElementById("notaTres").value;

    let total = Number(notaUno) + Number(notaDos) + Number(notaTres) / 3;

    /* librerias */

    if (!isNaN(nombre, apellido)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ingresar nombres con letras!",
      });

      /* alert("Ingresar nombres con letras!"); */
    }
    if (isNaN(notaUno, notaDos, notaTres)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ingresar notas numericas!",
      });
      /* alert("Ingresar notas numericas!"); */
    }
    /* --------------------------------------------------------------------------------------------------------------------------- */

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
      nombre: nombre,
      apellido: apellido,
      nota: redondeo(total / 3),
    }, ];

    const aprobados = alumnos.filter((alumnos) => alumnos.nota >= 6);

    const desaprobados = alumnos.filter((alumnos) => alumnos.nota <= 5);

    let list = document.getElementById("alumnos");

    for (const persona of personas) {
      let li = document.createElement("li");
      setTimeout(() => {
        li.innerHTML = persona;
      }, 1500);
      list.appendChild(li);
    }

    /* operadores avanzados */

    const estudiante = {
      nombre: nombre,
      apellido: apellido,
      nota: redondeo(total / 3),
    };

    const condicion = estudiante.nota >= 6 ? true : false;

    const respuesta = document.getElementById("respuesta");
    setTimeout(() => {
      condicion
        ?
        (respuesta.innerHTML = `${nombre} ${apellido}: Esta aprobado`) :
        (respuesta.innerHTML = `${nombre} ${apellido}: No esta aprobado`);
    }, 1000);

    nombre.length === 0 && console.log("ingresar nombre de estudiante");

    const salon = null;
    console.log(salon || "los alumnos no estan asignados por salon");

    const escuela = {
      nombreA: "EscuelaUno",
      nombreB: "EsculaDos",
      nombreC_Escula: "EsculaTres",
      nombreD: "EsculaCuatro",
      nombreE: {
        distritoUno: "DistritoA",
        distritoDos: "DistritoB",
      },
    };

    let {
      nombreA,
      nombreB,
      nombreC_Escula: EscuelaCinco,
      nombreD,
      nombreE: {
        distritoDos
      },
    } = escuela;


    const establecimientos = {
      nombreB,
      nombreD,
    };


    const clases = ["Febrero", "Marzo", "Abril", "Mayo", "Junio"];

    const [mes1, mes2, mes3, mes4] = clases;



    /* Storage and Json */

    const guardarLocal = (clave, valor) => {
      localStorage.setItem(clave, valor);
    };
    for (const alumno of alumnos) {
      guardarLocal(alumno.id, JSON.stringify(alumno));
    }
    guardarLocal("Nombre", JSON.stringify(alumnos));

    const aprobadosToJson = JSON.stringify(aprobados);


    const desaprobadosToJson = JSON.stringify(desaprobados);


    localStorage.setItem("Aprobados", aprobadosToJson);

    localStorage.setItem("Desaprobados", desaprobadosToJson);

    let a = localStorage.getItem("Aprobados");

    let objA = JSON.parse(a);


    let d = localStorage.getItem("Desaprobados");

    let objD = JSON.parse(d);

  }
}