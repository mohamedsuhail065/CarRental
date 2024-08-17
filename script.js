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
  
  