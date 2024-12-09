document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bootstrapForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let valid = true;

        // Nombre Completo
        const fullName = document.getElementById("fullName");
        if (fullName.value.trim() === "") {
            fullName.classList.add("is-invalid");
            valid = false;
        } else {
            fullName.classList.remove("is-invalid");
        }

        // Correo Electrónico
        const email = document.getElementById("email");
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email.value.trim())) {
            email.classList.add("is-invalid");
            valid = false;
        } else {
            email.classList.remove("is-invalid");
        }

        // Contraseña
        const password = document.getElementById("password");
        if (password.value.length < 6) {
            password.classList.add("is-invalid");
            valid = false;
        } else {
            password.classList.remove("is-invalid");
        }

        // Confirmar Contraseña
        const confirmPassword = document.getElementById("confirmPassword");
        if (confirmPassword.value !== password.value || confirmPassword.value === "") {
            confirmPassword.classList.add("is-invalid");
            valid = false;
        } else {
            confirmPassword.classList.remove("is-invalid");
        }

        // Si todo es válido
        if (valid) {
            alert("Formulario enviado correctamente");
            form.reset();
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const reservationForm = document.getElementById("reservationForm");
    const reservationTableBody = document.getElementById("reservationTableBody");

    let reservations = [];

    // Leer reservas (Read)
    const loadReservations = () => {
        reservationTableBody.innerHTML = "";
        reservations.forEach((reservation, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                    <td>${reservation.name}</td>
                    <td>${reservation.email}</td>
                    <td>${reservation.days}</td>
                    <td>${reservation.count}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="deleteReservation(${index})">Eliminar</button>
                    </td>
                `;
            reservationTableBody.appendChild(row);
        });
    };

    // Añadir reserva (Create)
    reservationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("guestName").value.trim();
        const email = document.getElementById("guestEmail").value.trim();
        const days = parseInt(document.getElementById("reservationDays").value.trim());
        const count = parseInt(document.getElementById("guestCount").value.trim());

        if (name && email && days && count) {
            reservations.push({ name, email, days, count });
            reservationForm.reset();
            loadReservations();
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });

    // Eliminar reserva (Delete)
    window.deleteReservation = (index) => {
        reservations.splice(index, 1);
        loadReservations();
    };

    // Inicializar lista
    loadReservations();
});
