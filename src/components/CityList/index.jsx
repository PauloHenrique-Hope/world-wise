import { CityItem } from "../CityItem";

import { useCities } from "../../contexts/CitiesContext";

export function CityList() {
  const { cities } = useCities();
  return (
    <ul className="flex flex-col p-2  gap-3 ">
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
