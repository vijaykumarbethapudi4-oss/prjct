import "./ProductInfo.css";

export default function ProductInfo({ product }) {
  return (
    <div className="product-info">
      <p className="brand">{product.brand}</p>

      <h1>{product.name}</h1>

      <div className="rating">
        ⭐ {product.rating} ({product.reviews} Reviews)
      </div>

      <div className="price">
        <span className="new-price">₹{product.price}</span>
        <span className="old-price">₹{product.oldPrice}</span>
      </div>

      <p className="description">
        {product.description}
      </p>
    </div>
  );
}
