import "./colorselector.css";

export default function ColorSelector({
  colors,
  selectedColor,
  onSelectColor,
}) {
  return (
    <div className="color-selector">
      <h3>Select Color</h3>

      <div className="color-options">
        {colors.map((color) => (
          <button
            key={color}
            className={selectedColor === color ? "active" : ""}
            onClick={() => onSelectColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}