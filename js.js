$(document).ready(function() {
  // Validación del formulario
  $('#registro-form').submit(function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Validar campos
    var nombre = $('#nombre').val();
    var apellidos = $('#apellidos').val();
    var email = $('#email').val();
    var contraseña = $('#contraseña').val();

    if (nombre === "" || apellidos === "" || email === "" || contraseña === "") {
      alert("Por favor, completa todos los campos.");
      return false;
    }

    // Almacenar datos en local storage
    var datos = {
      nombre: nombre,
      apellidos: apellidos,
      email: email,
      contraseña: contraseña
    };
    localStorage.setItem("registro", JSON.stringify(datos));

    alert("¡Registro exitoso!");
    $('#registro-form')[0].reset();
  });
  $('#toggle-btn').click(function() {
    $('#hidden-text').toggle();
  });
});
