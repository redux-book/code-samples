// Here we define colors object as a constant
const colors = {
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF'
};

// Uncomment line below to see an error
// colors = {};

// Changing values of objects defined as constants is valid
colors.red = '#FFFFFF';
console.log(colors.red);

// Freezing objects makes it impossible to change the values
Object.freeze(colors);

// This assignment will silently fail
colors.red = '#000000';
console.log(colors.red);

// However, Object.freeze doesn't lock nested objects
const orders = {
  bread: {
    price: 10
  },
  milk: {
    price: 20
  }
};

Object.freeze(orders);

// This assignment will actually change the value
orders.milk.price -= 15;
console.log(orders.milk.price);
