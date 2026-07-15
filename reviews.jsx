import "./Reviews.css";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Rahul",
      rating: 5,
      comment: "Amazing quality. Very comfortable shoes."
    },
    {
      id: 2,
      name: "Priya",
      rating: 4,
      comment: "Looks premium and delivery was quick."
    },
    {
      id: 3,
      name: "Arjun",
      rating: 5,
      comment: "Worth every rupee. Highly recommended!"
    }
  ];

  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>

      {reviews.map((review) => (
        <div className="review-card" key={review.id}>
          <h4>{review.name}</h4>
          <p className="stars">
            {"⭐".repeat(review.rating)}
          </p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}