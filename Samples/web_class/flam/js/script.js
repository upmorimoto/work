let count = 0;

    function increment() {
      count++;
      document.getElementById('count').textContent = count;
    }
    "use strict"
{
    const main = document.getElementById('main');
    const thumbnails = document.querySelectorAll('.thumb-img');

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function(){
            let src = thumbnail.getAttribute('src');
            main.src = src;
        });
    });
}

// ハンバーガーメニュー
function toggle() {
    document.querySelector('.menubutton').classList.toggle('open');
    document.querySelector('.menu').classList.toggle('open');
}






// カート
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
       const price = parseInt(document.querySelector('.goods-name .yen').innerText);
   
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
   
       // Show notification
       const notification = document.getElementById('cart-notification');
       notification.style.display = 'block';
   
       // Hide notification after a few seconds (adjust as needed)
       setTimeout(() => {
           notification.style.display = 'none';
       }, 3000);
   }


// cart.js

// カート内の商品情報を表示する関数
function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-items');
  
    cartList.innerHTML = ''; // カートリストを一旦クリア
  
    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('cart-item');
  
      const itemImage = document.createElement('img');
      itemMainvisual.src = item.imageSrc;
      itemImage.alt = item.name;
  
      const itemName = document.createElement('h3');
      itemName.textContent = item.name;
  
      const itemPrice = document.createElement('p');
      itemPrice.textContent = `値段: ￥${item.price.toLocaleString()}`;
  
      const itemQuantity = document.createElement('p');
      itemQuantity.textContent = `個数: ${item.quantity}`;
  
      li.appendChild(itemImage);
      li.appendChild(itemName);
      li.appendChild(itemPrice);
      li.appendChild(itemQuantity);
  
      cartList.appendChild(li);
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
  
  // カート内の全商品を削除する関数
  function removeAllCartItems() {
    localStorage.removeItem('cart');
    displayCartItems(); // 全削除後に再表示
  }
  
  // ページ読み込み時にカート内の商品情報を表示
  window.addEventListener('load', () => {
    displayCartItems();
  });
  cart.push(product);

  // Save cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Show confirmation alert
  alert(`${productName} がカートに追加されました`);

  // Update the cart display
  updateCart();

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
        wrapping: wrapping
    };

    cart.push(product);

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show confirmation alert
    alert(`${productName} がカートに追加されました`);

    // Update the cart display
    updateCart();
}


document.addEventListener('DOMContentLoaded', function () {
    // カートアイテムを表示する関数
    function displayCartItems() {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const cartItemsList = document.getElementById('cart-items-list');
  
      // カートアイテムを一旦クリア
      cartItemsList.innerHTML = '';
  
      // カートアイテムを表示
      cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
  
        const itemName = document.createElement('h3');
        itemName.textContent = item.name;
  
        const itemImage = document.createElement('img');
        itemImage.src = item.itemMainvisual; // サムネイル画像のパス
        itemImage.alt = item.name;
  
        const itemPrice = document.createElement('p');
        itemPrice.textContent = `値段: ￥${item.price.toLocaleString()}`;
  
        const itemQuantity = document.createElement('p');
        itemQuantity.textContent = `個数: ${item.quantity}`;
  
        cartItemElement.appendChild(itemImage);
        cartItemElement.appendChild(itemName);
        cartItemElement.appendChild(itemPrice);
        cartItemElement.appendChild(itemQuantity);
  
        cartItemsList.appendChild(cartItemElement);
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
  
    // カートページ読み込み時にカートアイテムを表示
    displayCartItems();
  });


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


