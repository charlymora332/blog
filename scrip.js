// funcionamiento del menu//

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");


// funcionamiento del formulario y validaciones//

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

// funcionamiento del menu agg libros//


function mostrarVistaPrevia() {
  const inputImagen = document.getElementById('imagen');
  const vistaPrevia = document.getElementById('vistaPrevia');

  const archivo = inputImagen.files[0];

  if (archivo) {
      const lector = new FileReader();

      lector.onload = function(e) {
          vistaPrevia.src = e.target.result;
          vistaPrevia.style.display = 'block';
      }

      lector.readAsDataURL(archivo);
  } else {
      vistaPrevia.src = '#';
      vistaPrevia.style.display = 'none';
  }
}


function mostrarFormulario() {
    var formulario = document.getElementById("formw");
    formulario.style.display = "block";
}

function ocultarFormulario() {
    var formulario = document.getElementById("formw");
    formulario.style.display = "none";
}
