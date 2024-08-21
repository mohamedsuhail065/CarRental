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

//when input valid details error disappear

document
  .querySelector('input[name="name"]')
  .addEventListener("input", function () {
    if (this.value.trim() !== "") {
      document.getElementById("nameError").textContent = "";
    }
  });

document
  .querySelector('input[name="email"]')
  .addEventListener("input", function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(this.value.trim()) || this.value.trim()!=="") {
      document.getElementById("emailError").textContent = "";
    }
  });

//phone number validation

document.getElementById("form2").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("phoneError").textContent = "";
  let isGood = true;
  let phone = document.querySelector('input[name="phone"]').value.trim();
  if (phone === "") {
    //check if its empty
    isGood = false;
    document.getElementById("phoneError").textContent =
      "Phone number is required.";
  } else if (phone.length < 10) {
    //check the length
    document.getElementById("phoneError").textContent =
      "Phone number must be at least 10 digits long";
    isGood = false;
  } else {
    isGood = true;
  }
  if (isGood) {
    alert("Link Sent");
  }
});

//when input valid details error disappear

// Add an event listener for the input event
document
  .querySelector('input[name="phone"]')
  .addEventListener("input", function () {
    let phone = this.value.trim();
    if (phone.length >= 10) {
      document.getElementById("phoneError").textContent = "";
    }
  });
