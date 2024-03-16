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

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-note');

    const itemName = document.createElement('h3');
    itemName.textContent = item.name;

    const priceDiv = document.createElement('div');
    priceDiv.classList.add('price-info');

    const priceLabel = document.createElement('p');
    priceLabel.textContent = '商品価格';
    priceLabel.classList.add('price-label');

    const itemPrice = document.createElement('p');
    itemPrice.textContent = item.price;
    itemPrice.classList.add('cart-price');

    const taxIncluded = document.createElement('span');
    taxIncluded.textContent = '(税込)';
    taxIncluded.classList.add('cart-tax');
    itemPrice.appendChild(taxIncluded);

    const countDiv = document.createElement('div');
    countDiv.classList.add('count-info');

    const itemQuantity = document.createElement('p');
    itemQuantity.textContent = `数量`;
    itemQuantity.classList.add('cart-quantText');

    // マイナスボタンの作成
    const minusButton = document.createElement('button');
    minusButton.textContent = '－';
    minusButton.classList.add('minus-btn');
    // data-id属性を設定
    const itemIdm = 'm01'; // このIDは商品に応じて変更してください
    minusButton.setAttribute('data-id', itemIdm);

  // プラスボタンの作成
    const plusButton = document.createElement('button');
    plusButton.textContent = '＋';
    plusButton.classList.add('plus-btn');
    // data-id属性を設定
    const itemIdp = 'p01'; // このIDは商品に応じて変更してください
    plusButton.setAttribute('data-id', itemIdp);

    const taxText = document.createElement('span');
    taxText.textContent = item.quantity;
    taxText.classList.add('cart-quantity');
    itemQuantity.appendChild(taxText);
    itemQuantity.insertBefore(minusButton, taxText);
    itemQuantity.appendChild(plusButton);
    
// マイナスボタンのクリックイベントリスナー
minusButton.addEventListener('click', function() {
  let quantity = parseInt(taxText.textContent, 10);
  if (quantity > 1) {
      taxText.textContent = quantity - 1;

      // 商品価格をフォーマットして更新（商品価格 * 新しい数量）
      const totalPrice = parsePrice(item.price) * (quantity - 1);
      const formattedPrice = new Intl.NumberFormat('ja-JP').format(totalPrice);
      itemPrice.textContent = `${formattedPrice}円`;

      // 以前の「税込」span要素があれば削除
      itemPrice.querySelectorAll('.tax-included').forEach(span => span.remove());

      // 「税込」表示用のspan要素を作成
      const taxIncludedSpan = document.createElement('span');
      taxIncludedSpan.textContent = '（税込）';
      // クラス名を追加
      taxIncludedSpan.classList.add('tax-included');

      // itemPriceに税込spanを追加
      itemPrice.appendChild(taxIncludedSpan);

      // カート内の商品数量を更新
      item.quantity -= 1;
      updateCartTotal(); // カート全体の合計金額を再計算
  }
});

// プラスボタンのクリックイベントリスナー
plusButton.addEventListener('click', function() {
  let quantity = parseInt(taxText.textContent, 10);
  taxText.textContent = quantity + 1;

  // 商品価格をローカライズしてフォーマット
  const formattedPrice = new Intl.NumberFormat('ja-JP').format(parsePrice(item.price) * (quantity + 1));
  itemPrice.textContent = `${formattedPrice}円`;

  // 以前に追加された「税込」表示用のspanがあれば削除
  const existingTaxIncludedSpan = itemPrice.querySelector('.tax-included');
  if (existingTaxIncludedSpan) {
    itemPrice.removeChild(existingTaxIncludedSpan);
  }

  // 「税込」表示用のspan要素を作成
  const taxIncludedSpan = document.createElement('span');
  taxIncludedSpan.textContent = '（税込）';
  // クラス名を追加
  taxIncludedSpan.classList.add('tax-included');

  // itemPriceに税込spanを追加
  itemPrice.appendChild(taxIncludedSpan);

  // カート内の商品数量を更新
  item.quantity += 1;
  updateCartTotal(); // カート全体の合計金額を再計算
});


// カート全体の合計金額と数量を更新する関数
function updateCartTotal() {
  let totalPrice = 0;
  let totalQuantity = 0;
  let postagePrice = 570;
  
  cartItems.forEach(item => {
      totalPrice += parsePrice(item.price) * item.quantity;
      totalQuantity += item.quantity;
  });

  let finalTotalPrice = totalPrice + postagePrice;

  const totalPriceElement = document.getElementById('total-price');
  totalPriceElement.textContent = totalPrice.toLocaleString();

  // const totalQuantityElement = document.getElementById('total-quantity');
  // totalQuantityElement.textContent = '数量' + totalQuantity + '個';

  const finalTotalPriceElement = document.getElementById('final-price');
  finalTotalPriceElement.textContent = finalTotalPrice.toLocaleString();
}


    const removeButton = document.createElement('button');
    removeButton.textContent = 'この商品を削除する';
    removeButton.classList.add('remove-item-button');
    removeButton.addEventListener('click', () => {
      removeCartItem(index);
      displayCartItems(); // 削除後に再表示
    });

    li.appendChild(itemImage);
    li.appendChild(itemDiv);
    // h3
    itemDiv.appendChild(itemName);
    // 商品価格
    itemDiv.appendChild(priceDiv);
    priceDiv.appendChild(priceLabel);
    priceDiv.appendChild(itemPrice);
    // 数量
    itemDiv.appendChild(countDiv);
    countDiv.appendChild(itemQuantity);
    countDiv.appendChild(removeButton);

    cartList.appendChild(li);
  });


  // 合計金額と合計数量を計算して表示
  let totalPrice = 0;
  let totalQuantity = 0;
  let postagePrice = 570;

// カート内の各商品に対してのループ処理
  cartItems.forEach(item => {
    totalPrice += parsePrice(item.price) * item.quantity;
    totalQuantity += item.quantity;
  });

  // 最終的な合計金額を計算（商品の合計金額 + 送料）
  let finalTotalPrice = totalPrice + postagePrice;

// 送料を含めた最終合計金額の計算
  const totalPriceElement = document.getElementById('total-price');
  totalPriceElement.textContent = totalPrice.toLocaleString();

  // const totalQuantityElement = document.getElementById('total-quantity');
  // totalQuantityElement.textContent = '数量' + totalQuantity + '個';

// 最終合計金額（送料込み）の表示
  const finalTotalPriceElement = document.getElementById('final-price');
  finalTotalPriceElement.textContent = finalTotalPrice.toLocaleString();
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
