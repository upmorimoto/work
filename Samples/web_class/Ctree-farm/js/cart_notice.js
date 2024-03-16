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

  // カートページへのリンクを表示する要素を取得
  const cartLink = document.querySelector('.cart p');
  const cartNav = document.querySelector('.popup, popup2');
  cartLink.textContent = 'マイカート (' + cartItems.length + ')';
  // ヘッダーカートに数値を追加
  cartNav.textContent = cartItems.length;
  cartNav.style.display = 'block';
}

