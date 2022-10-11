import React from 'react';

const Body = () => {
    return (
        <main>
        <div class="text-container">
          <h3>Preview</h3>
          <h1 class="product-name">Gabrielle Essence Eau De Parfum</h1>
          <p class="prod-info">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div class="prices">
            <h1 class="prod-price-after">$149.99</h1>
            <p class="prod-price-before"><s>$169.99</s></p>
          </div>
          <button class="atc">
            {/* <img
              class="svg-cart"
              src="./images/icon-cart.svg"
              alt="shopping cart photo"
            /> */}
            Add to cart
          </button>
        </div>
      </main>
    );
};

export default Body;