import "./WishlistButton.css";

export default function WishlistButton({
  isWishlisted,
  onToggleWishlist,
}) {
  return (
    <button
      className={`wishlist-btn ${
        isWishlisted ? "active" : ""
      }`}
      onClick={onToggleWishlist}
    >
      {isWishlisted ? "❤️ Wishlisted" : "🤍 Add to Wishlist"}
    </button>
  );
}