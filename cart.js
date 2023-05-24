document.addEventListener('DOMContentLoaded', function() {
  // Get the cart container element
  const cartContainer = document.querySelector('.cart-container');

  // Check if there are any items in the cart
  if (localStorage.getItem('cartItems')) {
    // Parse the cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));

    // Check if there are any items in the cart
    if (cartItems.length > 0) {
      // Remove the empty message
      document.getElementById('empty-message').style.display = 'none';

      // Loop through the cart items
      cartItems.forEach((item) => {
        // Create a div element for the cart item
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <h3>${item.productName}</h3>
          <span class="price">$${item.price.toFixed(2)}</span>
        `;

        // Append the cart item to the cart container
        cartContainer.appendChild(cartItem);
      });
    }
  }
});

function addToCart(productName, price) {
  // Check if there are any items in the cart
  if (localStorage.getItem('cartItems')) {
    // Parse the cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));

    // Add the new item to the cart items
    cartItems.push({ productName, price });

    // Save the updated cart items to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  } else {
    // Create a new cart items array and add the item
    const cartItems = [{ productName, price }];

    // Save the cart items to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
}
