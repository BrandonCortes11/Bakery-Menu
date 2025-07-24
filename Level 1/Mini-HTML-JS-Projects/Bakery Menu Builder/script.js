const dessert = [
    {name: "IceCream", price: 3.75, inStock: true },
    {name: "FruitRoll", price: 1.5, inStock: false },
    {name: "CinnamonBun", price: 2.25, inStock: true },
    {name: "CupCake", price: 1.75, inStock: false },
];

const menuButtonsContainer = document.getElementById("menu-buttons");
const orderSummaryContainer = document.getElementById("order-summary");

dessert.forEach((dessertItem) => {
    const button = document.createElement("button");
    button.textContent = dessertItem.name;

    button.addEventListener("click", function() {
        if (dessertItem.inStock) {
            orderSummaryContainer.textContent = `You selected: ${dessertItem.name} ($${dessertItem.price.toFixed(2)})`;
        } else {
            orderSummaryContainer.textContent = `Sorry, ${dessertItem.name} is sold out.`;
        }
    });

    menuButtonsContainer.appendChild(button);
});