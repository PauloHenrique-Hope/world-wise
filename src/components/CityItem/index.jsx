import { format } from "date-fns";
import { Link, useSearchParams } from "react-router-dom";
import { useCities } from "../../contexts/CitiesContext";
import { Button } from "../Button";

export function CityItem({ city }) {
  const { deleteCity } = useCities();
  const { id, cityName, emoji, date, position } = city;
  const now = new Date();
  const formattedDate = format(now, "yyyy-MM-dd");

  function handleDelete(e) {
    e.preventDefault();
    deleteCity(id);
  }

  const flagemojiToPNG = (flag) => {
    var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())

      .map((char) => String.fromCharCode(char - 127397).toLowerCase())

      .join("");

    return (
      <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
    );
  };

  if (!position) return;
  return (
    <Link to={`${city.id}?lat=${position.lat}&lng=${position.lng}`}>
      <li className="flex justify-between text-white bg-blue-900 p-2 border-green-700 border-l-4 rounded-lg">
        <div className="flex gap-2">
          <span className="text-yellow-200">{flagemojiToPNG(emoji)}</span>
          <span>{city.cityName}</span>
        </div>
        <span>{formattedDate}</span>
        <Button onClick={handleDelete}>x</Button>
      </li>
    </Link>
  );
}
