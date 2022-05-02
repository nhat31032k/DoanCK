let productsInCart = JSON.parse(localStorage.getItem("shoppingCart"));
if (!productsInCart) {
  productsInCart = [];
}
const parentElement = document.querySelector("#buyItems");
const products = document.querySelectorAll(".row");
const cartSumPrice = document.querySelector("#sum-prices");
const countTheSumPrice = function () {
  // 4
  let sum = 0;
  productsInCart.forEach((item) => {
    sum += item.price + "000";
  });
  return sum;
};
const updateShoppingCartHTML = function () {
  // 3
  localStorage.setItem("shoppingCart", JSON.stringify(productsInCart));
  if (productsInCart.length > 0) {
    let result = productsInCart.map((product) => {
      return `
				<li class="buyItem">
					<img src="${product.image}">
					<div>
						<h5>${product.name}</h5>
						<h6>vnd ${product.price + "000"}</h6>
						<div>
							<button class="button-minus" data-id=${product.id}>-</button>
							<span class="countOfProduct">${product.count}</span>
							<button class="button-plus" data-id=${product.id}>+</button>
						</div>
					</div>
				</li>`;
    });
    parentElement.innerHTML = result.join("");
    document.querySelector(".checkout").classList.remove("hidden");
    cartSumPrice.innerHTML = "vnd" + countTheSumPrice();
  } else {
    document.querySelector(".checkout").classList.add("hidden");
    parentElement.innerHTML =
      '<h4 class="empty">Your shopping cart is empty</h4>';
    cartSumPrice.innerHTML = "";
  }
};

function updateProductsInCart(product) {
  // 2
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id == product.id) {
      productsInCart[i].count += 1;
      productsInCart[i].price =
        productsInCart[i].basePrice * productsInCart[i].count;
      return;
    }
  }
  productsInCart.push(product);
}

products.forEach((item) => {
  // 1
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("addToCart")) {
      const productID = e.target.dataset.productId;
      console.log(productID);
      const productName = item.querySelector(".title").innerHTML;
      console.log(productName);
      const productPrice = item.querySelector(".retail__price").innerHTML;
      console.log(productPrice);
      const productImage = item.querySelector("img").src;
      console.log(productImage);
      let product = {
        name: productName,
        image: productImage,
        id: productID,
        count: 1,
        price: +productPrice,
        basePrice: +productPrice,
      };
      updateProductsInCart(product);
      updateShoppingCartHTML();
    }
  });
});

parentElement.addEventListener("click", (e) => {
  // Last
  const isPlusButton = e.target.classList.contains("button-plus");
  const isMinusButton = e.target.classList.contains("button-minus");
  if (isPlusButton || isMinusButton) {
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].id == e.target.dataset.id) {
        if (isPlusButton) {
          productsInCart[i].count += 1;
        } else if (isMinusButton) {
          productsInCart[i].count -= 1;
        }
        productsInCart[i].price =
          productsInCart[i].basePrice * productsInCart[i].count;
      }
      if (productsInCart[i].count <= 0) {
        productsInCart.splice(i, 1);
      }
    }
    updateShoppingCartHTML();
  }
});

updateShoppingCartHTML();
