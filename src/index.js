//1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;
  const subtotal = priceValue * quantityValue;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
}
function calculateAll() {
//2
  const products = document.getElementsByClassName('product');
  
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i])
  }
//3


  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += Number(products[i].querySelector('.subtotal span').inerHTML);
  }

  document.querySelector("h2 span").inerHTML = total;

}
//4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}