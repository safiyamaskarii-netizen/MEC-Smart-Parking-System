function confirmBooking() {
    let zone = document.getElementById("zone").value;
    let slot = document.getElementById("slot").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let plate = document.getElementById("plate").value;

    document.getElementById("bookingMessage").innerHTML =
        "✅ Booking Confirmed!<br>" +
        "Zone: " + zone + "<br>" +
        "Slot: " + slot + "<br>" +
        "Date: " + date + "<br>" +
        "Time: " + time + "<br>" +
        "Plate: " + plate + "<br>" +
        "Status: Confirmed";

    localStorage.setItem("bookingUser", "Safiya");
    localStorage.setItem("bookingZone", zone);
    localStorage.setItem("bookingSlot", slot);
    localStorage.setItem("occupiedSlot", slot);
    localStorage.setItem("availableCount", "22");
    localStorage.setItem("occupiedCount", "23");
    localStorage.setItem("bookingDate", date);
    localStorage.setItem("bookingTime", time);
    localStorage.setItem("bookingPlate", plate);
    localStorage.setItem("bookingStatus", "Confirmed");
}

function loadDashboardCounts() {
    if (document.getElementById("availableCount")) {
        document.getElementById("availableCount").innerText =
            localStorage.getItem("availableCount") || "23";

        document.getElementById("occupiedCount").innerText =
            localStorage.getItem("occupiedCount") || "22";
    }

    if (document.getElementById("adminAvailableCount")) {
        document.getElementById("adminAvailableCount").innerText =
            localStorage.getItem("availableCount") || "23";

        document.getElementById("adminOccupiedCount").innerText =
            localStorage.getItem("occupiedCount") || "22";
    }
}

function loadAdminBooking() {
    if (document.getElementById("adminUser")) {
        document.getElementById("adminUser").innerText =
            localStorage.getItem("bookingUser") || "No Booking";

        document.getElementById("adminSlot").innerText =
            localStorage.getItem("bookingSlot") || "-";

        document.getElementById("adminStatus").innerText =
            localStorage.getItem("bookingStatus") || "-";

        document.getElementById("adminTime").innerText =
            localStorage.getItem("bookingTime") || "-";
    }
}

function updateParkingSlots() {
    let occupiedSlot = localStorage.getItem("occupiedSlot");

    if (occupiedSlot && document.getElementById(occupiedSlot)) {
        document.getElementById(occupiedSlot).classList.remove("green");
        document.getElementById(occupiedSlot).classList.add("red");
    }
}

function releaseSlot() {
    localStorage.clear();

    localStorage.setItem("availableCount", "23");
    localStorage.setItem("occupiedCount", "22");

    alert("Parking slot released successfully!");

    location.reload();
}

loadDashboardCounts();
loadAdminBooking();
updateParkingSlots();

if (document.getElementById("sensorStatus")) {

    let bookedSlot = localStorage.getItem("bookingSlot");

    let sensors = {
        A1: "Free ✅",
        A2: "Free ✅",
        A3: "Free ✅",
        A4: "Free ✅"
    };

    if (bookedSlot && sensors[bookedSlot] !== undefined) {
        sensors[bookedSlot] = "Occupied 🚗";
    }

    document.getElementById("sensorStatus").innerHTML =
        "Sensor A1 : " + sensors.A1 + "<br><br>" +
        "Sensor A2 : " + sensors.A2 + "<br><br>" +
        "Sensor A3 : " + sensors.A3 + "<br><br>" +
        "Sensor A4 : " + sensors.A4;

    document.getElementById("sensorTime").innerText =
        new Date().toLocaleString();
}