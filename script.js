let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
        alert(`${button.parentElement.dataset.name} añadido al carrito.`);
    });
});

document.getElementById('cart-button').addEventListener('click', () => {
    alert(`Tienes ${cartCount} productos en tu carrito.`);
});
