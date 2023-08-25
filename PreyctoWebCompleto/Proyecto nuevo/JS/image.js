const inputImagen = document.getElementById("inputImagen");
const imagenMostrada = document.getElementById("imagenMostrada");

inputImagen.addEventListener("change", function () {
  const imagenSeleccionada = inputImagen.files[0];

  if (imagenSeleccionada) {
    const urlImagen = URL.createObjectURL(imagenSeleccionada);
    imagenMostrada.src = urlImagen;
  }
});

const textarea = document.getElementById("miTextarea");
const caracteresRestantes = document.getElementById("caracteresRestantes");
const maxCaracteres = parseInt(textarea.getAttribute("maxlength"));

textarea.addEventListener("input", function () {
  const caracteresIngresados = textarea.value.length;
  const caracteresRestantesCount = maxCaracteres - caracteresIngresados;

  caracteresRestantes.textContent = `Caracteres restantes: ${caracteresRestantesCount}`;
});

const insertImageBtn = document.getElementById("insertImageBtn");
const clearBtn = document.getElementById("clearBtn");
const editor = document.getElementById("editor");

insertImageBtn.addEventListener("click", function () {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";

  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      img.style.maxWidth = "100%";
      img.style.height = "auto";
      img.style.width = "300px"; // Establecer ancho
      img.style.height = "200px"; // Establecer alto
      editor.appendChild(img);
    }
  });

  fileInput.click();
});

clearBtn.addEventListener("click", function () {
  editor.innerHTML = "";
});
