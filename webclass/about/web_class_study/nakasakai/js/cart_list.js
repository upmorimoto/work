// カートページのJavaScript (cart_list.js)

// カート内の商品情報を表示する関数
function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartList = document.getElementById('cart-items');

  cartList.innerHTML = ''; // カートリストを一旦クリア

  cartItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('cart-item');

    const itemImage = document.createElement('img');
    itemImage.src = item.image;
    itemImage.alt = item.name;

    const itemName = document.createElement('h3');
    itemName.textContent = item.name;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = item.price;

    const itemQuantity = document.createElement('p');
    itemQuantity.textContent = `個数: ${item.quantity}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = '削除';
    removeButton.addEventListener('click', () => {
      removeCartItem(index);
      displayCartItems(); // 削除後に再表示
    });

    li.appendChild(itemImage);
    li.appendChild(itemName);
    li.appendChild(itemPrice);
    li.appendChild(itemQuantity);
    li.appendChild(removeButton);

    cartList.appendChild(li);
  });

  // 合計金額と合計数量を計算して表示
  let totalPrice = 0;
  let totalQuantity = 0;

  cartItems.forEach(item => {
    totalPrice += parsePrice(item.price) * item.quantity;
    totalQuantity += item.quantity;
  });

  const totalPriceElement = document.getElementById('total-price');
  totalPriceElement.textContent = '￥' + totalPrice.toLocaleString();

  const totalQuantityElement = document.getElementById('total-quantity');
  totalQuantityElement.textContent = '数量' + totalQuantity + '個';
}

// 価格をパースして数値に変換するヘルパー関数
function parsePrice(priceString) {
  return parseInt(priceString.replace('￥', '').replace(',', ''));
}

// カート内の商品を削除する関数
function removeCartItem(index) {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cartItems));
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

// "Remove All" ボタンをクリックしたときの処理
const removeAllButton = document.querySelector('.remove');
removeAllButton.addEventListener('click', () => {
  removeAllCartItems();
});
