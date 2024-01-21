// e-commerce console application in JavaScript

// Product class to represent individual products
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // User class to represent a simplified user
  class User {
    constructor(username) {
      this.username = username;
    }
  }
  
  // ShoppingCart class to manage the shopping cart
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
  
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ product, quantity });
      }
    }
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    calculateTotal() {
      return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
  
    displayCart() {
      console.log("\nShopping Cart:");
      this.items.forEach(item => {
        console.log(`${item.product.name} - Quantity: ${item.quantity}`);
      });
      console.log(`Total: $${this.calculateTotal()}\n`);
    }
  }
  
  // products
  const products = [
    new Product(1, "Product 1", 100),
    new Product(2, "Product 2", 300),
    new Product(3, "Product 3", 2500),
  ];
  
  // user 
  const currentUser = new User("Abraham_Unor");
  
  // Initialize shopping cart
  const shoppingCart = new ShoppingCart();
  
  // Function to display available products
  function displayProducts() {
    console.log("\nAvailable Products:");
    products.forEach(product => {
      console.log(`${product.id}. ${product.name} - $${product.price}`);
    });
  }
  
  // Simulating user authentication
  console.log(`Welcome, ${currentUser.username}!\n`);
  
  // Display available products
  displayProducts();
  
  // Simulating adding products to the cart
  shoppingCart.addItem(products[0], 2);
  shoppingCart.addItem(products[2], 1);
  
  // Display the current shopping cart
  shoppingCart.displayCart();
  
  // Simulating removing a product from the cart
  shoppingCart.removeItem(1);
  
  // Display the updated shopping cart
  shoppingCart.displayCart();
  
  // Simulating placing an order
  console.log("Placing an order...");
  console.log(`Thank you, ${currentUser.username}! Your order total is $${shoppingCart.calculateTotal()}.`);
  console.log("Order placed successfully!\n");
  