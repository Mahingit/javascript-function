// bottom button of esc `` for multiline.
const multilineText = `this is 1st line
this s 2nd line
this is 3rd line`
console.log(multilineText);

const friends = ['abul', 'babul', 'kabul'];
const count = 5;
const oldWay = '<h3 class="friend-name">New Friend-5</h3>'
const oldWay2 = '<h3 class="friend-name">New Friend-' + count + '</h3>'
const new1 = `<h3 class="friend-name">New Friend-${count}</h3>`
const new2 = `<h3 class="friend-name">New Friend-${friends.length}</h3>`

const first = 'Mamun';
const last = 'Chowdhury';
const fullName = `This person name is: ${first} ${last}, has money ${friends.length * 500}`;
console.log(fullName);