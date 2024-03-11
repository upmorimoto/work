      
      let cart = [];

        function updateCart() {
            const cartItemsElement = document.getElementById('cart-items');
            const totalQuantityElement = document.getElementById('total-quantity');
            const totalPriceElement = document.getElementById('total-price');

            // Retrieve cart from localStorage
            const storedCart = localStorage.getItem('cart');
            cart = storedCart ? JSON.parse(storedCart) : [];

            // Clear previous cart items
            cartItemsElement.innerHTML = '';

            // Update cart items
            cart.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} x${item.quantity} - ${item.price * item.quantity}円`;
                cartItemsElement.appendChild(listItem);
            });

            // Calculate and display total quantity and total price
            const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
            const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

            totalQuantityElement.innerText = totalQuantity;
            totalPriceElement.innerText = `￥${totalPrice}`;
        }

        function removeAll() {
            // Remove all items from the cart
            localStorage.removeItem('cart');
            updateCart(); // Update the cart UI after removing all items
        }

        updateCart();
        function updateCartPage() {
            // カートページの要素を取得
            const cartItemsElement = document.getElementById('cart-items');
            
            // 直前にカートに追加された商品の情報を取得
            const latestCartItem = JSON.parse(localStorage.getItem('cart')).pop();
        
            // カートページに画像を表示
            const cartItemImage = document.createElement('img');
            cartItemImage.src = latestCartItem.image;
            cartItemImage.alt = latestCartItem.name;
        
            cartItemsElement.appendChild(cartItemImage);
        }

// ページ読み込み時にカート内の商品情報を表示
window.addEventListener('load', () => {
    displayCartItems();
});

function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-items-list');

    // カートアイテムを一旦クリア
    cartList.innerHTML = '';

    // カートアイテムを表示
    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemImage = document.createElement('img');
        itemImage.src = item.imageThumbnail; // サムネイル画像のパス
        itemImage.alt = item.name;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `値段: ￥${item.price.toLocaleString()}`;

        const itemQuantity = document.createElement('p');
        itemQuantity.textContent = `個数: ${item.quantity}`;

        cartItemElement.appendChild(itemImage);
        cartItemElement.appendChild(itemName);
        cartItemElement.appendChild(itemPrice);
        cartItemElement.appendChild(itemQuantity);

        cartList.appendChild(cartItemElement);
    });

    // 合計金額と合計数量を計算して表示
    let totalPrice = 0;
    let totalQuantity = 0;

    cartItems.forEach(item => {
        totalPrice += item.price * item.quantity;
        totalQuantity += item.quantity;
    });

    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = '￥' + totalPrice.toLocaleString();

    const totalQuantityElement = document.getElementById('total-quantity');
    totalQuantityElement.textContent = '数量' + totalQuantity + '個';
}

// カートに新しい商品を追加
function addToCart() {
    const productName = document.querySelector('.goods-name h2').innerText;
    const price = parseInt(document.querySelector('.goods-name .yen').innerText.replace(/[^\d]/g, '')); // Extract numeric part

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
        wrapping: wrapping,
        imageThumbnail: document.querySelector('.thumb-img').src // サムネイル画像のパス
    };

    // カートに新しい商品を追加
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show confirmation alert
    alert(`${productName} がカートに追加されました`);

    // Update the cart display
    displayCartItems();
}

document.addEventListener('DOMContentLoaded', function () {
    const main = document.getElementById('main');
    const thumbnails = document.querySelectorAll('.thumb-img');

    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', function () {
            let src = thumbnail.getAttribute('src');
            main.src = src;
        });
    });

    function toggle() {
        document.querySelector('.menubutton').classList.toggle('open');
        document.querySelector('.menu').classList.toggle('open');
    }

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
        const productName = document.querySelector('.goods-name h2').innerText;
        const price = parseInt(document.querySelector('.goods-name .yen').innerText.replace(/[^\d]/g, '')); // Extract numeric part

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
            wrapping: wrapping,
            imageThumbnail: document.getElementById('main').src // 商品のメインビジュアル画像のパス
        };

        cart.push(product);

        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Show confirmation alert
        alert(`${productName} がカートに追加されました`);

        // Update the cart display
        updateCart();
    }

});
