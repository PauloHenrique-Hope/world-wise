import { NavLink } from "react-router-dom";

export function AppNav() {
  return (
    <nav>
      <ul className="flex justify-center text-white bg-gray-900 w-fit mx-auto rounded-lg">
        <NavLink className="cities" to="cities">
          <li className="bg-gray-700 p-2 rounded-s-lg  hover:bg-gray-950">
            Cities
          </li>
        </NavLink>

        <NavLink className="" to="countries">
          <li className="bg-gray-800 p-2 rounded-e-lg hover:bg-gray-950">
            Countries
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}
