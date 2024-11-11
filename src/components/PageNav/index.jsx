import { Link, NavLink } from "react-router-dom";
import { Logo } from "../Logo";

export function PageNav() {
  return (
    <nav className="relative flex z-10 justify-between items-center p-3 text-gray-50 md:text-xl lg:text-2xl">
      <div className="flex items-center gap-3">
        <Link to="/">
          <Logo>
            <img src="/icon.png" className="size-9 md:size-10 lg:size-12" />
          </Logo>
        </Link>
      </div>
      <ul className="flex gap-3 justify-end">
        <li>
          <NavLink className="hover:text-gray-600" to="/pricing">
            PRICING
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-gray-600" to="/product">
            PRODUCT
          </NavLink>
        </li>
        <li>
          <NavLink
            // className="bg-green-500 p-2 rounded-md active:bg-green-900"
            className={({ isActive }) =>
              isActive
                ? "bg-green-600 p-2 rounded-md"
                : "bg-green-500 p-2 rounded-md hover:bg-green-600"
            }
            to="/login"
          >
            LOGIN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
