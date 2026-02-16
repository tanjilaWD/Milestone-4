console.log('Hello from js')
// const mainText = document.querySelector('#mainTitle');
// console.log(mainText.innerText = 'Hello Developers');
const listItem = document.querySelectorAll('.list-item');
// console.log(listItem[0]);

// const mainDiv = document.querySelector('#mainDiv');
// console.log(mainDiv.children[0]);

// const img = document.querySelector('img');
// console.log(img);
// img.setAttribute('alt', 'updated.jpg');

 const listItems = document.getElementsByClassName('list-item');
// // listItems[0].style.color = 'red';
for(let list of listItems){
    list.style.color = 'red'
}

const btn = document.getElementById('btn');
const countText = document.getElementById('count');
btn.addEventListener('click', function(){
  let currentCount = parseInt(countText.innerText);
  currentCount = currentCount + 1; // currentCount++;
  countText.innerText = currentCount
})


const wishlistBtns = document.querySelectorAll('.wishlist-btn-card');
wishlistBtns.forEach(btn =>{
    btn.addEventListener('click', function(){
        let wishCount = document.getElementById('wishCount');
       count++;
       wishCount.innerText = count;
    })
})

const buttons = document.querySelectorAll('.add-to-cart-btn');
let cart = [];
buttons.forEach(btn =>{
    btn.addEventListener('click', function(e){
      const card = e.target.closest('.product-cart');
      console.log(card);
      const ProductName = card.querySelector('.product-name').textContent;
      const price = parseInt(card.querySelector('.product-price').textContent);
      const category = card.querySelector('.category-name').textContent;
      const product = {
        name: ProductName,
        productPrice: price,
        ProductCategory: category,
        quantity: 1
      }
      addToCart(product)
    })
})
function addToCart(product){
 const existingItem = cart.find(item => item.name == product.name);
 console.log(existingItem);

 if(existingItem){
    existingItem.quantity++;
 }else{
    cart.push(product)
 }
}

const cartItemsDiv = document.getElementById('cartItems');
function updateCart(){
  cartItemsDiv.innerHTML = '';
  let total = 0;
  let totalItems = 0;
  cart.forEach(item => {
   total = total + (item.productPrice * item.quantity);
   totalItems = totalItems + item.quantity;

   const div = document.createElement('div');
   div.innerHTML = `
       ${item.name} (x ${item.quantity}) - ${item.price * item.quantity};
       <button>Remove</button>
   `
  })
}