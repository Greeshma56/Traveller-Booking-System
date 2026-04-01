// ===== BOOKING LOGIC =====
const form = document.getElementById("bookingForm");

if (form) {
  const params = new URLSearchParams(window.location.search);
  const tripName = params.get("trip");

  const tripInput = document.getElementById("trip");
  if (tripInput && tripName) {
    tripInput.value = tripName;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const booking = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      trip: document.getElementById("trip").value
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    window.location.href = "booking-history.html";
  });
}


function searchTrips() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.getElementsByClassName("trip-card");

  for (let i = 0; i < cards.length; i++) {
    const cardText = cards[i].innerText.toLowerCase();

    if (cardText.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}
function filterByPrice() {
  const filter = document.getElementById("priceFilter").value;
  const cards = document.querySelectorAll(".trip-card");

  for (let i = 0; i < cards.length; i++) {
    const price = parseInt(cards[i].getAttribute("data-price"));

    if (filter === "all") {
      cards[i].style.display = "block";
    }
    else if (filter === "low") {
      cards[i].style.display = price < 15000 ? "block" : "none";
    }
    else if (filter === "mid") {
      cards[i].style.display =
        price >= 15000 && price <= 20000 ? "block" : "none";
    }
    else if (filter === "high") {
      cards[i].style.display = price > 20000 ? "block" : "none";
    }
  }
}
