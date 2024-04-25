const buttons = document.querySelectorAll(".minus, .plus");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    const coffee = this.dataset.coffee; // Get coffee name from data-coffee attribute
    const quantityElement = document.getElementById(`${coffee}-quantity`); // Get quantity element for this coffee
    const currentQuantity = parseInt(quantityElement.textContent); // Get current quantity as a number

    let newQuantity;
    if (this.classList.contains("minus")) {
      newQuantity = Math.max(currentQuantity - 1, 1); // Ensure quantity doesn't go below 1
    } else {
      newQuantity = currentQuantity + 1;
    }

    quantityElement.textContent = newQuantity;
  });
});

addToCartButtons.forEach(button => {
  button.addEventListener("click", function() {
    const coffee = this.dataset.coffee;
    const size = document.getElementById(`${coffee}-size`).value; // Get selected size
    const quantity = document.getElementById(`${coffee}-quantity`).textContent; // Get quantity

    // Here, you can add the coffee selection (coffee, size, quantity) to your shopping cart logic.
    // This could involve storing the data in an array, localStorage, or sending it to a server.
    alert(`You added ${quantity} ${size} ${coffee} to your cart!`); // Example alert
  });
});
