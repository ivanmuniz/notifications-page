document.querySelector("#mark-all-as-read").addEventListener("click", (event) => {
  document.querySelectorAll(".unread")
    .forEach(el => el.classList.remove("unread"));

  document.querySelector(".count").textContent = "0";
});