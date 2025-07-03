"strict";
document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll(
    'input[type="radio"][name="unit"]'
  );
  const dropdownTables = document.querySelectorAll(".dropdown-table");
  const totalAmount = document.querySelector(".t-amount");
  const newPrices = document.querySelectorAll(".price .new");
  const boxes = document.querySelectorAll(".unit .box");

  // hide all by default on page load
  dropdownTables.forEach((table) => {
    table.style.display = "none";
  });

  radioButtons.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      // Hide all dropdown tables at intitial stage
      dropdownTables.forEach((table) => {
        table.style.display = "none";
      });
      // Remove border/bg from all boxes
      boxes.forEach(function (box) {
        box.classList.remove("border");
        box.classList.remove("box-selected");
      });

      // Show dropdown when select radio button
      if (radio.checked) {
        dropdownTables[index].style.display = "block";
        const selectedPrice = newPrices[index].textContent;
        totalAmount.textContent = selectedPrice;
        // Add styles to selected box
        boxes[index].classList.add("border");
        boxes[index].classList.add("box-selected");
      }
    });
  });
});
