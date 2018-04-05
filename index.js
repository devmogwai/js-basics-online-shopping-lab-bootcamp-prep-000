var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {itemName:item, itemPrice:Math.floor((Math.random()*100))}
 cart.push(newItem)
 return (`${item} has been added to your cart.`)
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  }
  var statement = 'In your cart, you have'
  if (cart.length === 1) {
    return`${statement} ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
 for (let i = 0; i<(cart.length-1); i++ ){
   var statement = statement + ` ${cart[i].itemName} at $${cart[i].itemPrice},` 
   var j = i
 }
 return `${statement} and ${cart[j+1].itemName} at $${cart[j+1].itemPrice}.`
}

function total() {
  var total = 0;
  for (let i = 0; i<cart.length; i++){
    total = total + cart[i].itemPrice
  }
  return (total)
}

function removeFromCart(item) {
  for (let i = 0; i<cart.length; i++){
    if (item === cart[i].itemName) {
      cart.splice(i, 1)
        return (cart)
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber === null) {
    console.log ('Sorry, we don\'t have a credit card on file for you')
  }
}


//TEST
addToCart('milk')
addToCart('juice')
addToCart('apples')

viewCart();
total();
placeOrder();
