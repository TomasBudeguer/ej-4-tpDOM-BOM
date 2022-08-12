function obtenerHora() {
  let fechaActual = new Date();

  let diaSemanas = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "viernes",
    "Sabado",
  ];
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  let parrafoFecha = document.querySelector("#fecha");
  parrafoFecha.innerHTML = `${
    diaSemanas[fechaActual.getDay()]
  } ${fechaActual.getDate()} de ${
    meses[fechaActual.getMonth()]
  } del ${fechaActual.getFullYear()}`;

  let parrafoHora = document.querySelector("#hora");

  let hora = fechaActual.getHours();
  let minutos = fechaActual.getMinutes();
  let segundos = fechaActual.getSeconds();
  let amOpm = "";
  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (hora > 00 && hora <= 12) {
    amOpm = "am";
  } else {
    amOpm = "pm";
  }
  switch (hora) {
    case 0:
      hora = "12";
      break;
    case 1:
      hora = "1";
      break;
    case 2:
      hora = "2";
      break;
    case 3:
      hora = "3";
      break;
    case 4:
      hora = "4";
      break;
    case 5:
      hora = "5";
      break;
    case 6:
      hora = "6";
      break;
    case 7:
      hora = "7";
      break;
    case 8:
      hora = "8";
      break;
    case 9:
      hora = "9";
      break;
    case 10:
      hora = "10";
      break;
    case 11:
      hora = "11";
      break;
    case 12:
      hora = "12";
      break;
    case 13:
      hora = "1";
      break;
    case 14:
      hora = "2";
      break;
    case 15:
      hora = "3";
      break;
    case 16:
      hora = "4";
      break;
    case 17:
      hora = "5";
      break;
    case 18:
      hora = "6";
      break;
    case 19:
      hora = "7";
      break;
    case 20:
      hora = "8";
      break;
    case 21:
      hora = "9";
      break;
    case 22:
      hora = "10";
      break;
    case 23:
      hora = "11";
      break;
    case 24:
      hora = "12";
      break;
  }
  parrafoHora.innerHTML = `${hora}:${minutos}:${segundos} ${amOpm}`;
}

setInterval(obtenerHora, 1000);

function temaClaro(){
    let body = document.querySelector('#body')
    body.className = 'claro'
}
function temaOscuro(){
    let body = document.querySelector('#body')
    body.className = 'oscuro'
}
function fondoAzul(){
    let sectionContenedor = document.querySelector('#sectionContenedor')
    sectionContenedor.className = 'fondoAzul titulo'
}
function fondoRosa(){
    let sectionContenedor = document.querySelector('#sectionContenedor')
    sectionContenedor.className = 'fondoRosa titulo'
}
function fondoVerde(){
    let sectionContenedor = document.querySelector('#sectionContenedor')
    sectionContenedor.className = 'fondoVerde titulo'
}

// otra alternativa:
// let horario = ['12','1','2','3','4','5','6','7','8','9','10','11','12','1','2','3','4','5','6','7','8','9','10','11']
// parrafoHora.innerHTML = `${horario[fechaActual.getHours()]}:${minutos}:${segundos} ${amOpm}`;