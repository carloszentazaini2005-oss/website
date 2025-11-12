// Product search functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any JavaScript functionality here
    console.log('ThreadTrove website loaded!');
    
    // Example: Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productTitle = e.target.getAttribute('data-product');
            alert(`${productTitle} has been added to your cart!`);
        }
    });
});