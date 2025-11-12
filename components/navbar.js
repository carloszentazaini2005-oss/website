class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .nav-link:hover {
          color: #ec4899;
        }
        .cart-count {
          top: -8px;
          right: -8px;
        }
      </style>
      <nav class="bg-white shadow-sm py-4">
        <div class="container mx-auto px-4 flex justify-between items-center">
          <a href="/" class="text-2xl font-bold text-pink-600">ThreadTrove</a>
          
          <div class="hidden md:flex space-x-8">
            <a href="#" class="nav-link text-gray-700 hover:text-pink-600 font-medium">Home</a>
            <a href="#" class="nav-link text-gray-700 hover:text-pink-600 font-medium">Shop</a>
            <a href="#" class="nav-link text-gray-700 hover:text-pink-600 font-medium">Collections</a>
            <a href="#" class="nav-link text-gray-700 hover:text-pink-600 font-medium">About</a>
          </div>
          
          <div class="flex items-center space-x-4">
            <a href="#" class="p-2 text-gray-700 hover:text-pink-600 relative">
              <i data-feather="search"></i>
            </a>
            <a href="#" class="p-2 text-gray-700 hover:text-pink-600 relative">
              <i data-feather="user"></i>
            </a>
            <a href="#" class="p-2 text-gray-700 hover:text-pink-600 relative">
              <i data-feather="shopping-bag"></i>
              <span class="cart-count absolute bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </a>
            <button class="md:hidden p-2 text-gray-700">
              <i data-feather="menu"></i>
            </button>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);