import { CountryItem } from "../CountryItem";

import { useCities } from "../../contexts/CitiesContext";

export function CountryList() {
  const { cities } = useCities();

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [
        ...arr,
        { id: city.id, country: city.country, emoji: city.emoji },
      ];
    else return arr;
  }, []);
  return (
    <ul className="flex justify-evenly mx-auto md:w-[600px]">
      {countries.map((country) => (
        <CountryItem countryEl={country} key={country.id} />
      ))}
    </ul>
  );
}
