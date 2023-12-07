import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = React.useState(product.colors[0]);
  // const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
  // Use the location object to access state data
  const { state } = navigate;
  
  if (state && state.productID) {
    const { productID, color, quantity } = state;
    console.log(`Product ID: ${productID}, Color: ${color}, Quantity: ${quantity}`);
  } else {
    console.error('Missing checkout data in navigation state');
  }
};

  

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div key={product._id} className="bg-gray-300 p-6 rounded-lg shadow-md border-4 border-black/20 flex flex-col h-full">
      <div className="mb-4" style={{ marginTop: '-50px', border: '4px solid var(--Navy) rounded-md' }}>
        <Slider {...sliderSettings}>
          {product.images.map((image, index) => (
            <div key={index}>
              <img
                className="w-full h-36 object-cover object-center rounded-xl"
                src={image}
                alt={`Color ${product.colors[index]}`}  // Use color information as alt text
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center mb-4 pt-5">
        {product.colors.map((color, index) => (
          <button
            key={index}
            className={`mx-2 p-3 rounded-full border ${selectedColor === color ? 'border-black' : 'border-transparent'}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          ></button>
        ))}
      </div>
      <h3 className="text-lg text-center font-bold mb-2 text-black h-16 overflow-hidden">
        {product.name} ({selectedColor})
      </h3>
      <p className="text-black text-center mb-3 h-5 overflow-hidden">QTY: {product.quantity}</p>
      <p className="text-black pb-3 h-5 mb-8 text-center">{product.description}</p>
      <button
        className="block mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-[--Gold] hover:text-black font-serif text-center"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;


















