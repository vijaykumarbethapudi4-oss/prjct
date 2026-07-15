import "./productgallery.css";

export default function ProductGallery({
  images,
  selectedImage,
  onSelectImage,
}) {
  return (
    <div className="gallery">
      {/* Main Image */}
      <div className="main-image">
        <img
          src={images[selectedImage]}
          alt="Selected Product"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            className={
              selectedImage === index ? "active" : ""
            }
            onClick={() => onSelectImage(index)}
          />
        ))}
      </div>
    </div>
  );
}