
// Recarga pagina al capturar click del menu siguiente
document.getElementById("next").addEventListener("click", function(){
  document.location.reload();
})

// Obtiene y devuelve JSON de RamdomUser
function get_RU() {
  fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => mostrar_RU(data.results[0]));
}

// Recibe y muestra JSON de RamdomUser
function mostrar_RU(data) {
  document.getElementById("foto").src = data.picture.large;
  document.getElementById("nombre").innerHTML = data.name.first + " " + data.name.last;
  document.getElementById("domicilio").innerHTML = data.location.street.number +
    " " + data.location.street.name;
  document.getElementById("telefono").innerHTML = data.cell;
  document.getElementById("email").innerHTML = data.email;
  document.getElementById("ciudad-pais").innerHTML = data.location.postcode + " " + 
    data.location.city + " - " + data.location.state + " - " + data.location.country;
}
