document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const roomType = document.getElementById("roomType").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (new Date(checkout) <= new Date(checkin)) {
    showMessage("Check-out date must be after check-in.", "red");
    return;
  }

  // For now: simulate successful submission
  console.log({
    checkin,
    checkout,
    roomType,
    name,
    email,
  });

  showMessage("Booking request sent! We will contact you soon.", "green");

  document.getElementById("bookingForm").reset();
});

function showMessage(text, color) {
  const msg = document.getElementById("message");
  msg.textContent = text;
  msg.style.color = color;
}
