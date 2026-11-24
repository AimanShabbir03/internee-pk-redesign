import { Link } from 'react-router-dom';

export default function SmartLink({ to, children, ...rest }) {
  if (/^https?:/.test(to)) return <a href={to} target="_blank" rel="noreferrer" {...rest}>{children}</a>;
  return <Link to={to} {...rest}>{children}</Link>;
}
