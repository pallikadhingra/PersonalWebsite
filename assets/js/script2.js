let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

let items = Array.from(document.querySelectorAll('.item'));
let index = 0; // Track the index of the current visible item

function updateItems() {
    items.forEach((item, i) => {
        item.classList.remove('visible', 'hidden');
        if (i === index) {
            item.classList.add('visible');
        } else {
            item.classList.add('hidden');
        }
    });
}

next.addEventListener('click', function () {
    index = (index + 1) % items.length;
    updateItems();
});

prev.addEventListener('click', function () {
    index = (index - 1 + items.length) % items.length;
    updateItems();
});

// Initialize
updateItems();
