const dessert = [
    {
        name: IceCream,
        price: 3.75,
        inStock: true
    },
    {
        name: FruitRoll,
        price: 1.50,
        inStock: false
    },
    {
        name: CinnamonBun,
        price: 2.25,
        inStock: true
    },
    {
        name: Cupcake,
        price: 1.75,
        inStock: false
    }
]

const menuButtonsContainer = document.getElementById("menu-buttons");
const orderSummaryContainer = document.getElementById("order-summary");

dessert.forEach(dessert => {
    const button = document.createElement("button");
    button.textContent = dessert.IceCream;

    button.addEventListener("click", function() {
        if (dessert.inStock) {
            orderSummaryContainer.textContent = `You Selected: IceCream ($3.75)`;
        } else {
            orderSummaryContainer.textContent = `Sorry, ${dessert.IceCream} is sold out.`;
        }
    });

    menuButtonsContainer.appendChild(button);
});

dessert.forEach(dessert => {
    const button = document.createElement("button");
    button.textContent = dessert.FruitRoll;

    button.addEventListener("click", function() {
        if (dessert.inStock) {
            orderSummaryContainer.textContent = `You Selected: FruitRoll ($1.50)`;
        } else {
            orderSummaryContainer.textContent = `Sorry, ${dessert.FruitRoll} is sold out.`;
        }
    });

    menuButtonsContainer.appendChild(button);
});

dessert.forEach(dessert => {
    const button = document.createElement("button");
    button.textContent = dessert.CinnamonBun;

    button.addEventListener("click", function() {
        if (dessert.inStock) {
            orderSummaryContainer.textContent = `You Selected: CinnamonBun ($2.25)`;
        } else {
            orderSummaryContainer.textContent = `Sorry, ${dessert.CinnamonBun} is sold out.`;
        }
    });

    menuButtonsContainer.appendChild(button);
});

dessert.forEach(dessert => {
    const button = document.createElement("button");
    button.textContent = dessert.Cupcake;

    button.addEventListener("click", function() {
        if (dessert.inStock) {
            orderSummaryContainer.textContent = `You Selected: Cupcake ($1.75)`;
        } else {
            orderSummaryContainer.textContent = `Sorry, ${dessert.Cupcake} is sold out.`;
        }
    });

    menuButtonsContainer.appendChild(button);
});