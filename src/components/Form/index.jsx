import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { useUrlPosition } from "../../hooks/useUrlPosition";
import { useCities } from "../../contexts/CitiesContext";
import { Message } from "../Message";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export function Form() {
  const [lat, lng] = useUrlPosition();
  const { isLoading } = useCities();
  const navigate = useNavigate();

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [emoji, setEmoji] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [geocodingError, setGeocodingError] = useState("");
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);

  useEffect(
    function () {
      async function fetchCityData() {
        try {
          setIsLoadingGeocoding(true);
          setGeocodingError("");
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();

          console.log(data);

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a city. Click somewhere else 😉"
            );

          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  if (!lat && !lng)
    return <Message message="Start by clicking somewhere on the map" />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form className="flex flex-col mx-auto px-2 gap-2 w-full ">
      <div className="flex flex-col text-white">
        <label className="text-xl font-medium" htmlFor="cityName">
          City Name
        </label>
        <input
          className="text-xl text-black pl-1 py-2 outline-none"
          id="cityName"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>

      <div className="flex flex-col text-white">
        <label className="text-xl font-medium" htmlFor="date">
          When did you go to?
        </label>
        <input
          className="text-xl text-black  outline-none pl-1 py-2"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="flex flex-col text-white">
        <label className="text-xl font-medium" htmlFor="notes">
          Notes about your trip
        </label>
        <textarea
          className="text-xl text-black pl-1 py-2 outline-none "
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Wonderful place.."
        />
      </div>
      <div className="flex flex-col gap-3">
        <Button>ADD</Button>
        <Button
          type="back"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          BACK
        </Button>
      </div>
    </form>
  );
}
