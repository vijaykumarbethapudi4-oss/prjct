
import { useState } from "react";

import product from "../data/ProductData";

import ProductGallery from "../components/productgallery/productgallery";
import ProductInfo from "../components/productinfo/productinfo";
import ColorSelector from "../components/colorselector/colorselector";
import SizeSelector from "../components/sizeselector/sizeselector";
import QuantitySelector from "../components/quantityselector/quantityselector";
import ActionButtons from "../components/actionbuttons/actionbuttons";
import WishlistButton from "../components/wishlistbutton/wishlistbutton";
import Reviews from "../components/reviews/reviews";

function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    alert("🛒 Product added to cart successfully!");
  };

  const handleBuyNow = () => {
    alert("⚡ Redirecting to checkout...");
  };

  return (
    <>
      <div className="product-page">
        <ProductGallery
          images={product.images}
          selectedImage={selectedImage}
          onSelectImage={setSelectedImage}
        />

        <div className="product-details">
          <ProductInfo product={product} />

          <ColorSelector
            colors={product.colors}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
          />

          <SizeSelector
            sizes={product.sizes}
            selectedSize={selectedSize}
            onSelectSize={setSelectedSize}
          />

          <QuantitySelector
            quantity={quantity}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
          />

          <ActionButtons
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />

          <WishlistButton
            isWishlisted={isWishlisted}
            onToggleWishlist={toggleWishlist}
          />
        </div>
      </div>

       <Reviews /> 
    </>
  );
}

export default ProductPage;