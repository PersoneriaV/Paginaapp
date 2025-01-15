// Función para volver a la página anterior
function goBack() {
    window.history.back();
}

// Función para establecer la fecha y hora actual de Bogotá
function setDateTime() {
    const options = {
        timeZone: "America/Bogota",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    };
    const date = new Intl.DateTimeFormat("es-CO", options).format(new Date());
    document.getElementById("datetime").value = date;

    // Mostrar el título de la página en el centro de la barra de navegación
    document.getElementById("pageTitle").textContent = document.title;
}

// Función para enviar el formulario usando EmailJS
document.getElementById("complaintForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío por defecto

    const templateParams = {
        datetime: document.getElementById("datetime").value,
        name: document.getElementById("name").value,
        idNumber: document.getElementById("idNumber").value,
        expeditionPlace: document.getElementById("expeditionPlace").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        complaint: document.getElementById("complaint").value
    };

    emailjs.send("Agendar_citas", "PQRS", templateParams)
        .then(function(response) {
            alert("PQR enviado con éxito!", response.status, response.text);
        }, function(error) {
            alert("Hubo un error al enviar el PQR. Intenta nuevamente.", error);
        });
});