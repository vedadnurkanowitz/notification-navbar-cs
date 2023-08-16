const notification = document.querySelector(".notification");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let countUp = Number(notification.getAttribute("data-count") || 0);

  notification.setAttribute("data-count", countUp + 1);

  if (countUp === 0) {
    notification.classList.add("add");
  }
});
