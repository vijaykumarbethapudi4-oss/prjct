import "./SizeSelector.css";

export default function SizeSelector({
  sizes,
  selectedSize,
  onSelectSize,
}) {
  return (
    <div className="size-selector">
      <h3>Select Size</h3>

      <div className="size-options">
        {sizes.map((size) => (
          <button
            key={size}
            className={selectedSize === size ? "active" : ""}
            onClick={() => onSelectSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}