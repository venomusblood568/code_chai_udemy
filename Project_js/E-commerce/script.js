document.addEventListener('DOMContentLoaded',()=>{
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.999 },
  ];

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cart.getAttribute);

  //get element id of each variable
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  //now we want to display the products on card
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to cart</button>
    `;
    productList.appendChild(productDiv);
    
  });

  //now we want to click on add to cart to add to cart
  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      //BUTTON SHOULD BE CAPITAL KEEP IN MIND
      //we are fetching the data id from the list
      const productId = parseInt(e.target.getAttribute("data-id"));
      //then simply checking if both id is same when i click on add to cart
      const product = products.find((p) => p.id === productId);
      //simply add the product
      addToCart(product);
    }
  });



  function addToCart(product) {
    cart.push(product);
    renderCart();
    savestate(); //render with save state
  }

  function renderCart() {
    cartItems.innerText = "";
    //intial price 0
    let totalprice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalprice += item.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item"); // Add class for styling
        cartItem.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        <button>Remove</button>
        `;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalprice.toFixed(2)}`;

        //remove button part
        cartItem.querySelector("button").addEventListener('click',() =>{
          removeFromCart(item.id);
        })
      });
    }
    else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  checkOutBtn.addEventListener("click", () => {
    if(cart.length > 0){
      cart.length = 0;
      alert("Checkout successfully");
      renderCart();
      savestate(); //render with save state
    }else{
      alert("cart is empty! can't checkout")
    }
  });

  //DELETE function
  function removeFromCart(productId) {
    const index = cart.findIndex((item) => item.id === productId); // Find the index of the item
    if (index !== -1) {
      cart.splice(index, 1); // Remove the item at the found index
    }
    savestate(); // Update localStorage
    renderCart(); // Re-render the cart
  }



  function savestate() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  // Initial render of the cart
  renderCart();
})