import { format } from "date-fns";
import { useContext, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useCities } from "../../contexts/CitiesContext";

export function City() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { currentCity, getCity } = useCities();

  console.log(currentCity);
  const { id } = useParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  const flagemojiToPNG = (flag) => {
    var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())

      .map((char) => String.fromCharCode(char - 127397).toLowerCase())

      .join("");

    return (
      <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
    );
  };

  const { cityName, emoji, date, notes } = currentCity;
  return (
    <section className="flex flex-col gap-4 h-screen px-2 py-10 m-2 text-white bg-gray-950 rounded-xl sm:px-4">
      <div className="flex items-center gap-3">
        {/* <span>{flagemojiToPNG(emoji)}</span> */}
        <h2 className="text-3xl">{cityName}</h2>
      </div>
      <div>
        <p className="text-xl text-gray-500 font-medium">
          You went to {cityName} on
        </p>
        <span>{formatDate(date || null)}</span>
      </div>
      <div>
        <p className="text-xl text-gray-500 font-medium">Your Notes</p>
        <p>{notes}</p>
      </div>
      <div>
        <h6 className="text-xl text-gray-500 font-medium">Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
          className="text-purple-500"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
    </section>
  );
}
