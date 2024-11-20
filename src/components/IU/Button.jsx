import { Link } from "react-router-dom";

const classCss = "px-6 py-2 bg-white text-black rounded-sm";

export function ButtonLink({ children, href, ...props }) {
  return (
    <Link to={href} {...props} className={classCss}>
      {children}
    </Link>
  );
}

export function ButtonA({ children, href, ...props }) {
  return (
    <a href={href} {...props} className={classCss}>
      {children}
    </a>
  );
}
