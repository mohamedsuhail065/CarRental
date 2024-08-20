// ---------faq dropdown script---------
document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", (event) => {
    const answer = item.nextElementSibling;
    const cl = item.querySelector(".close");
    const op = item.querySelector(".open");
    if (answer.style.display === "block") {
      answer.style.display = "none";
      cl.style.display = "none";
      op.style.display = "block";
    } else {
      answer.style.display = "block";
      cl.style.display = "block";
      op.style.display = "none";
    }
  });
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";

  let name = document.querySelector('input[name="name"]').value.trim();
  let email = document.querySelector('input[name="email"]').value.trim();
  let isValid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email.";
    isValid = false;
  }

  if (isValid) {
    alert("Subscribed");

  }
});
