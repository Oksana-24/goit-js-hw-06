const list = document.querySelector('#categories');
console.dir(`Number of categories: ${list.children.length}`);

const item = [...list.children];
item.forEach((element) => {
    console.dir(`Category: ${element.firstElementChild.textContent}`);
    console.dir(`Elements: ${element.lastElementChild.childElementCount}`)
});