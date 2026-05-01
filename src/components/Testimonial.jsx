function Testimonial({ name, quote }) {
  return (
    <div className="testimonial">
      <h3>{name}</h3>

      <p>"{quote}"</p>
    </div>
  );
}

export default Testimonial;
