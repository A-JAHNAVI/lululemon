const products = [
    { id: 1, name: "T-Shirt", price: 20, imageUrl: "https://via.placeholder.com/150" },
    { id: 2, name: "Jeans", price: 40, imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "Shoes", price: 50, imageUrl: "https://via.placeholder.com/150" },
  ];
  
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  
  // Render products
  function renderProducts(products) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = products
      .map(
        (product) => `
      <div class="product-card">
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
      </div>
    `
      )
      .join("");
  }
  
  // Add to cart
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Product added to cart!");
    }
  }
  
  // Add to wishlist
  function addToWishlist(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Product added to wishlist!");
    }
  }
  
  // Search functionality
  document.getElementById("searchBar").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    renderProducts(filteredProducts);
  });
  
  // Initial render
  renderProducts(products);
  