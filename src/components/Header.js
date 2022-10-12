import React from 'react';

const Header = () => {
    return (
    <header>
    <img
      className="prod-picture-sm"
      // have to add images in react linke this
      src={require('../images/image-product-mobile.jpg')}
    // src="./images/image-product-mobile.jpg"
      alt="perfume bottle next to leave's"
    />
    <img
      className="prod-picture-lg"
      src={require('../images/image-product-desktop.jpg')}
    //   src="./images/image-product-desktop.jpg"
      alt="perfume bottle next to leave's"
    />
  </header>
    );
};


export default Header;