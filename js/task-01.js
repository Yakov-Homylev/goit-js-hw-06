const navEl = document.querySelector('#categories')
console.log(`Number of categories: ${navEl.children.length}`);

const navItemEl = navEl.querySelectorAll('.item')

function countProperty(arrayEl) {
    for (const el of arrayEl) {
        console.log(`Categories: ${el.firstElementChild.textContent}`);
        console.log(`Elements: ${el.lastElementChild.children.length}`);
    }
}

countProperty(navItemEl)