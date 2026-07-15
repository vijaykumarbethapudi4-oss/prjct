import "./ActionButtons.css";

export default function ActionButtons({ onAddToCart, onBuyNow }) {
  return (
    <div className="action-buttons">
      <button className="cart-btn" onClick={onAddToCart}>
        🛒 Add to Cart
      </button>

      <button className="buy-btn" onClick={onBuyNow}>
        ⚡ Buy Now
      </button>
    </div>
  );
}