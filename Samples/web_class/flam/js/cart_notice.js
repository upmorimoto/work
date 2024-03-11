// ヘッダースクロール
window.addEventListener('scroll', () => {
  const moveElement = document.querySelector('header');
  let scrollHeight = 50;
  if (window.scrollY >= scrollHeight) {
    moveElement.style.transform = 'translateY(0%)';
  } 
});

// プラスボタンのクリックイベント
document.querySelectorAll('.plus_btn').forEach(button => {
  button.addEventListener('click', () => {
    const quantityInput = button.parentElement.querySelector('.quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });
});

// マイナスボタンのクリックイベント
document.querySelectorAll('.minus_btn').forEach(button => {
  button.addEventListener('click', () => {
    const quantityInput = button.parentElement.querySelector('.quantity');
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });
});

// カートに追加ボタンのクリックイベント
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-product');
    const productImage = button.getAttribute('data-image');
    const productPrice = button.getAttribute('data-price');
    const quantityInput = button.parentElement.parentElement.querySelector('.quantity');
    const quantity = parseInt(quantityInput.value);

    if (quantity > 0) {
      // カートに追加する処理
      addToCart(productName, productImage, productPrice, quantity);

      // カートに追加後、数量をリセット
      quantityInput.value = '0';
    }
  });
});

// カートに商品を追加する関数
function addToCart(name, image, price, quantity) {
  // カートに追加する商品の情報をオブジェクトとして作成
  const product = {
    name: name,
    image: image,
    price: price,
    quantity: quantity
  };

  // カートの情報をlocalStorageから取得
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // カートに商品を追加
  cartItems.push(product);

  // 更新されたカート情報をlocalStorageに保存
  localStorage.setItem('cart', JSON.stringify(cartItems));

// カート内の商品情報を表示する関数
function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartList = document.getElementById('cart-items');

  cartList.innerHTML = ''; // カートリストを一旦クリア

  cartItems.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('cart-item');

      const itemImage = document.createElement('img');
      itemImage.src = item.image;
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

// カート内の商品を削除する関数
function removeCartItem(index) {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  displayCartItems(); // 削除後に再表示
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