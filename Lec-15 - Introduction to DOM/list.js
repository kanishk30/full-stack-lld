// step1 = gettong all list items ( NodeList)

const allItems = document.querySelectorAll('li');

const indexThatHas8Elem = allItems[6];

const newElemSeven = document.createElement('li');
newElemSeven.innerText = '7';

// insert before 8.

const ulNode = document.querySelector('ul');

ulNode.insertBefore(newElemSeven, indexThatHas8Elem);

// parentNode.insertBefpre(newNode, referenceNode);
// parentNode = ul
// newNode = newElemSeven
// referenceNode = indexThatHas8Elem


