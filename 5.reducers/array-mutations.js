let originalArray = [1, 2, 3, 4, 5];

// Safe methods
originalArray.concat(6);
console.log('concat:', originalArray);

originalArray.slice(0, 2);
console.log('slice:', originalArray);

originalArray.map(i => i ** 2);
console.log('map:', originalArray);

originalArray.reduce((result, next) => result + next, 0);
console.log('reduce:', originalArray);

originalArray.reduceRight((result, next) => result + next, 0);
console.log('reduceRight:', originalArray);

originalArray.filter(i => i % 2 === 0);
console.log('filter:', originalArray);

// Spacer, in case you copy this whole snippet to console
console.log('');

// Mutating methods
originalArray = [1, 2, 3, 4, 5];
originalArray.push(6);
console.log('push:', originalArray);

originalArray = [1, 2, 3, 4, 5];
originalArray.splice(0, 2);
console.log('splice:', originalArray);

originalArray = [1, 2, 3, 4, 5];
originalArray.pop();
console.log('pop:', originalArray);

originalArray = [1, 2, 3, 4, 5];
originalArray.shift();
console.log('shift:', originalArray);

originalArray = [1, 2, 3, 4, 5];
originalArray.unshift(0);
console.log('unshift:', originalArray);

originalArray = [1, 2, 3, 4, 5];
originalArray.fill(0);
console.log('fill:', originalArray);

originalArray = [1, 2, 3, 4, 5];
originalArray.reverse();
console.log('reverse:', originalArray);

originalArray = [5, 2, 1, 4, 3];
originalArray.sort();
console.log('sort:', originalArray);

originalArray = [1, 2, 3, 4, 5];
originalArray.copyWithin(0, 3);
console.log('copyWithin:', originalArray);
