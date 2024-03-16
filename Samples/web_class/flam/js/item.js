let cart = [];

function increment() {
    const quantityElement = document.getElementById('quantity');
    const currentQuantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = currentQuantity + 1;
}

function decrement() {
    const quantityElement = document.getElementById('quantity');
    const currentQuantity = parseInt(quantityElement.innerText);
    if (currentQuantity > 0) {
        quantityElement.innerText = currentQuantity - 1;
    }
}

function addToCart() {
    const productName = document.querySelector('.goods-name h1').innerText;
    const price = parseInt(document.querySelector('.goods-name p').innerText);

    const quantity = parseInt(document.getElementById('quantity').innerText);
    const wrappingOption = document.querySelector('input[name="options"]:checked');

    let wrapping = '';
    if (wrappingOption) {
        wrapping = wrappingOption.value;
    }

    const product = {
        name: productName,
        price: price,
        quantity: quantity,
        wrapping: wrapping
    };

    cart.push(product);

    // Save cart to localStorage (for simplicity, you may want to use a server for a real application)
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optional: Provide feedback to the user that the item has been added to the cart
    alert(`${productName} x${quantity} has been added to the cart!`);
}
function getSelectedOption() {
    const radioButtons = document.getElementsByName('options');

    let selectedValue = '';
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        selectedValue = radioButton.value;
        break;
      }
    }

    if (selectedValue) {
      alert(`Selected Option: ${selectedValue}`);
    } else {
      alert('Please select an option');
    }
  }