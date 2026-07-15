import "./QuantitySelector.css";

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="quantity-selector">
      <h3>Quantity</h3>

      <div className="quantity-box">
        <button onClick={onDecrease}>−</button>

        <span>{quantity}</span>

        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}