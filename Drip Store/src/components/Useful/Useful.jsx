import { Link } from 'react-router-dom';

export const Useful = ({ margin, color, textDecoration, to, value, target }) => {
  return (
    <Link
      to={to}
      target={target}
      style={{
        margin: margin,
        color: color,
        textDecoration: textDecoration
      }}
    >
      {value}
    </Link>
  );
}
