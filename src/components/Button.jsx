function Button({ text, size, type }) {
  return <button className={`btn ${size} ${type}`}>{text}</button>;
}

export default Button;
